import { getRates } from './lib/fetchRates.js';

async function test() {
  console.log("⏳ Conectando con Google Sheets y procesando tasas...\n");
  const startTime = Date.now();
  
  const rates = await getRates();
  const duration = Date.now() - startTime;

  if (!rates) {
    console.error("❌ Error: No se pudieron obtener las tasas. Revisa tu SHEET_URL o conexión.");
    return;
  }

  console.log(`✅ ¡Tasas procesadas en ${duration}ms!\n`);
  
  const paises = ['Peru', 'Chile', 'Venezuela', 'Colombia', 'Brasil', 'EEUU', 'España', 'Argentina', 'Paraguay', 'Mexico'];

  for (const pais of paises) {
    if (rates[pais]) {
      console.log(`==============================`);
      console.log(`📍 ORIGEN: ${pais.toUpperCase()}`);
      console.log(`==============================`);
      console.table(rates[pais]);
    }
  }

  console.log("\n💡 Para ver el JSON completo tal cual se genera:");
  console.log("node -e \"import('./lib/fetchRates.js').then(m => m.getRates()).then(r => console.log(JSON.stringify(r, null, 2)))\"");
}

test();
