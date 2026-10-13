import Papa from 'papaparse';
import 'dotenv/config';

const SHEET_URL = process.env.SHEET_URL;

const CANONICAL_COUNTRIES = {
  PERU: 'Peru',
  CHILE: 'Chile',
  COLOMBIA: 'Colombia',
  BRASIL: 'Brasil',
  BRAZIL: 'Brasil',
  BR: 'Brasil',
  EEUU: 'EEUU',
  USA: 'EEUU',
  ESPANA: 'España',
  ESPAÑA: 'España',
  ARGENTINA: 'Argentina',
  PARAGUAY: 'Paraguay',
  MEXICO: 'Mexico',
  VENEZUELA: 'Venezuela',
  VZLA: 'Venezuela',
  PANAMA: 'Panama',
  ECUADOR: 'Ecuador',
};

function toCanonicalCountry(name) {
  if (!name) return '';
  const clean = name.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  return CANONICAL_COUNTRIES[clean] || name.trim();
}

function extractSpreadsheetId(url) {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : url.trim();
}

const DEFAULT_GIDS = {
  vzla: process.env.SHEET_VENEZUELA_GID || '468975263',
  giros: process.env.SHEET_GIROS_GID || '840936877',
};

export async function getRates() {
  try {
    const spreadsheetId = extractSpreadsheetId(SHEET_URL);
    if (!spreadsheetId) {
      throw new Error("No se pudo obtener el ID del Google Spreadsheet desde SHEET_URL.");
    }

    const vzlaUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${DEFAULT_GIDS.vzla}`;
    const girosUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${DEFAULT_GIDS.giros}`;

    // Descarga ambas pestañas en paralelo en un solo viaje de red
    const [vzlaRes, girosRes] = await Promise.all([
      fetch(vzlaUrl),
      fetch(girosUrl)
    ]);

    if (!vzlaRes.ok) throw new Error(`Error descargando ENVIOS PARA VENEZUELA (HTTP ${vzlaRes.status})`);
    if (!girosRes.ok) throw new Error(`Error descargando GIROS (HTTP ${girosRes.status})`);

    const [vzlaCsv, girosCsv] = await Promise.all([
      vzlaRes.text(),
      girosRes.text()
    ]);

    const { data: vzlaRows } = Papa.parse(vzlaCsv, { header: false });
    const { data: girosRows } = Papa.parse(girosCsv, { header: false });

    // 1. Tasas hacia Venezuela
    const ratesToVenezuela = {};
    const venezuelaRates = {};

    for (let i = 0; i < vzlaRows.length; i++) {
      const row = vzlaRows[i];
      const hasTasaFinal = row.some(
        c => typeof c === 'string' && c.toLowerCase().includes('tasa final')
      );

      if (hasTasaFinal) {
        const idx = row.findIndex(
          c => typeof c === 'string' && c.toLowerCase().includes('tasa final')
        );
        const rawCountry =
          row[idx + 1]?.trim() ||
          row.find((c, col) => col > idx && typeof c === 'string' && c.trim())?.trim();

        const nextRow = vzlaRows[i + 1];
        if (rawCountry && nextRow) {
          const val = nextRow[idx]?.trim();
          if (val) {
            const canonical = toCanonicalCountry(rawCountry);
            ratesToVenezuela[canonical] = val;
            venezuelaRates[canonical] = val;
          }
        }
      }
    }

    // 2. Tasas de Giros entre países
    const result = {};

    let currentOrigin = null;
    let currentHeaders = null;

    for (let i = 0; i < girosRows.length; i++) {
      const row = girosRows[i];
      const col10 = row[10]?.trim();
      const col11 = row[11]?.trim();
      const col12 = row[12]?.trim();
      // col11 o col10 son el país de origen; col12 puede ser un destino extra (ej: Ecuador en EEUU)
      const candidateOrigin = col11 || col10;

      const destCols = [];
      // Escanear hasta col 12 (columna M) para capturar países extra como Ecuador en la sección EEUU
      for (let c = 2; c <= 12; c++) {
        // Saltar col 10 y 11 si ya son el origen, y col 12 si coincide con el origen
        if ((c === 10 || c === 11) && toCanonicalCountry(row[c]?.trim()) === toCanonicalCountry(candidateOrigin)) continue;
        if (c === 12 && col12 && toCanonicalCountry(col12) === toCanonicalCountry(candidateOrigin)) continue;
        const val = row[c]?.trim();
        if (val && !val.toLowerCase().includes('tabla de giros') && !val.match(/^\d/)) {
          destCols.push({ col: c, country: toCanonicalCountry(val.replace(/tabla de giros/i, '')) });
        }
      }

      if (candidateOrigin && destCols.length >= 3) {
        currentOrigin = toCanonicalCountry(candidateOrigin);
        currentHeaders = destCols;
        continue;
      }

      const isResultRow = row.some(
        cell =>
          typeof cell === 'string' &&
          (cell.includes('RESULTADO B') || cell.trim() === 'TOTAL')
      );

      if (isResultRow && currentOrigin && currentHeaders) {
        const originObj = result[currentOrigin] || {};

        for (const { col, country } of currentHeaders) {
          const val = row[col]?.trim();
          if (val) {
            originObj[country] = val;
          }
        }

        // Agregar la tasa hacia Venezuela para este país desde la pestaña de envíos
        const rateToVzla = ratesToVenezuela[currentOrigin];
        if (rateToVzla) {
          originObj['Venezuela'] = rateToVzla;
        }

        result[currentOrigin] = originObj;
      }
    }

    // Si existe tasa de EEUU hacia Venezuela, Ecuador tiene la misma tasa (USD)
    if (ratesToVenezuela['EEUU']) {
      ratesToVenezuela['Ecuador'] = ratesToVenezuela['EEUU'];
      venezuelaRates['Ecuador'] = ratesToVenezuela['EEUU'];
    }

    // Guardar las tasas de REMESAS hacia Venezuela
    result['RemesasVenezuela'] = { ...venezuelaRates };

    // Si en la hoja de giros no se procesó la fila de Venezuela, inicializarla
    if (!result['Venezuela']) {
      result['Venezuela'] = {};
    }

    // Para TODOS los países: Ecuador comparte la misma tasa que EEUU (moneda USD)
    for (const origin of Object.keys(result)) {
      if (origin === 'RemesasVenezuela') continue;
      if (result[origin]['EEUU'] && !result[origin]['Ecuador']) {
        result[origin]['Ecuador'] = result[origin]['EEUU'];
      }
    }

    // En la raíz, Ecuador comparte las mismas tasas que EEUU (USD)
    if (result['EEUU']) {
      result['Ecuador'] = { ...result['EEUU'] };
    }

    return result;
  } catch (error) {
    console.error("Error procesando el Excel:", error);
    return null;
  }
}
