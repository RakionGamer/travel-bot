module.exports = [
(()=>{"use strict";return[
"[project]/app/api/bot/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fetchRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorVenezuela$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorVenezuela.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorPeru$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorPeru.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorChile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorChile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorArgentina$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorArgentina.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorBrasil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorBrasil.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorColombia$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorColombia.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorEfectivo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorEfectivo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorEEUU$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorEEUU.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorEspana$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorEspana.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorPanama$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/processorPanama.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
// Modo de prueba: configurado en true para ejecutar únicamente Venezuela
const TEST_MODE = false;
const ALL_IMAGE_PROCESSORS = [
    {
        key: 'chile',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorChile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesChile"]
    },
    {
        key: 'peru',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorPeru$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesPeru"]
    },
    {
        key: 'argentina',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorArgentina$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesArgentina"]
    },
    {
        key: 'colombia',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorColombia$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesColombia"]
    },
    {
        key: 'brasil',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorBrasil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesBrasil"]
    },
    {
        key: 'eeuu',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorEEUU$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesEEUU"]
    },
    {
        key: 'espana',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorEspana$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesEspana"]
    },
    {
        key: 'panama',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorPanama$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesPanama"]
    },
    {
        key: 'venezuela',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorVenezuela$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesVenezuela"]
    },
    {
        key: 'efectivo',
        processor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$processorEfectivo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createImageWithRatesEfectivo"]
    }
];
const IMAGE_PROCESSORS = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ALL_IMAGE_PROCESSORS;
const PERSISTENT_KEYBOARD = {
    reply_markup: {
        keyboard: [
            [
                {
                    text: "Generar Tasas💸"
                }
            ]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
    }
};
const UPDATE_BUTTON = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "Actualizar Tasas🔄",
                    callback_data: "update_all"
                }
            ]
        ]
    }
};
async function handleGenerateImages(chatId) {
    try {
        const processingMsg = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendMessage(chatId, "⏳ Procesando imágenes... Esto durará solo unos segundos");
        const rawRates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRates"])();
        if (!rawRates) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].editMessageText("No encontré tasas disponibles en este momento", {
                chat_id: chatId,
                message_id: processingMsg.message_id
            });
            return;
        }
        const rates = {
            ecuador: rawRates["Ecuador"],
            mexico: rawRates["Mexico"],
            venezuela: rawRates["Venezuela"],
            peru: rawRates["Peru"],
            chile: rawRates["Chile"],
            argentina: rawRates["Argentina"],
            brasil: rawRates["Brasil"],
            colombia: rawRates["Colombia"],
            eeuu: rawRates["EEUU"],
            espana: rawRates["España"],
            panama: rawRates["Panama"],
            efectivo: rawRates["Efectivo"]
        };
        if (Object.values(rates).every((val)=>!val || Object.keys(val).length === 0)) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].editMessageText("No encontré tasas disponibles en este momento", {
                chat_id: chatId,
                message_id: processingMsg.message_id
            });
            return;
        }
        const imagePromises = IMAGE_PROCESSORS.filter(({ key })=>rates[key] && Object.keys(rates[key]).length > 0).map(async ({ key, processor })=>{
            try {
                const buffer = await processor(rates[key]);
                return {
                    buffer,
                    key
                };
            } catch (error) {
                console.error(`Error procesando ${key}:`, error);
                return null;
            }
        });
        const images = (await Promise.all(imagePromises)).filter(Boolean);
        if (images.length === 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendMessage(chatId, "No se pudieron generar imágenes en este momento", PERSISTENT_KEYBOARD);
            return;
        }
        for(let i = 0; i < images.length; i++){
            const img = images[i];
            const isLast = i === images.length - 1;
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendPhoto(chatId, img.buffer, {
                caption: img.caption,
                reply_markup: isLast ? UPDATE_BUTTON.reply_markup : undefined
            });
        }
    } catch (error) {
        console.error("Error en handleGenerateImages:", error);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendMessage(chatId, "Ocurrió un error al generar las imágenes. Por favor intenta de nuevo.");
        } catch (_) {}
    }
}
async function POST(req) {
    try {
        const update = await req.json();
        const chatId = update.message?.chat?.id || update.callback_query?.message?.chat?.id;
        const rawText = (update.message?.text || "").trim();
        const text = rawText.toLowerCase();
        const callbackData = update.callback_query?.data;
        console.log(`📩 [Telegram Update] chatId: ${chatId} | texto: "${rawText}" | callback: ${callbackData || 'ninguno'}`);
        if (update.callback_query) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].answerCallbackQuery(update.callback_query.id);
        }
        const WELCOME_MESSAGE = `🤖 ¡Hola! Soy QuickRate, tu bot generador de imágenes.

📋 ¿Cómo usarme?

1️⃣ Presiona "Generar Tasas💸" para procesar las imágenes
2️⃣ Usa el botón "🔄 Actualizar Tasas" cuando necesites tasas nuevas

¡Comencemos! 👇`;
        if (text === "/start" || text === "start") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendMessage(chatId, WELCOME_MESSAGE, PERSISTENT_KEYBOARD);
            return new Response("ok", {
                status: 200
            });
        }
        // Manejo de generación de imágenes
        if (callbackData === "update_all" || text === "generar tasas💸") {
            // Respondemos 200 OK inmediatamente a Telegram para evitar timeout (502 / reintentos infinitos)
            handleGenerateImages(chatId);
            return new Response("ok", {
                status: 200
            });
        }
        return new Response("ok", {
            status: 200
        });
    } catch (err) {
        console.error(err);
        return new Response("ok", {
            status: 200
        });
    }
}
async function GET() {
    const rates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRates"])();
    return new Response(JSON.stringify({
        message: "API Bot funcionando",
        timestamp: new Date().toISOString(),
        rates
    }, null, 2), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
}),
"[project]/lib/canvas.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadImage",
    ()=>loadImage,
    "registerFont",
    ()=>registerFont
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
function registerFont(fontPath, options) {
    const family = typeof options === "string" ? options : options?.family;
    try {
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(fontPath)) {
            console.warn(`[Canvas] Fuente no encontrada en: ${fontPath}`);
            return false;
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["GlobalFonts"].registerFromPath(fontPath, family);
    } catch (error) {
        console.error("Error registrando fuente con @napi-rs/canvas:", error);
        return false;
    }
}
async function loadImage(source, options) {
    if (typeof source === "string" && !source.startsWith("http://") && !source.startsWith("https://") && !source.startsWith("data:")) {
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(source)) {
            throw new Error(`[Canvas] Imagen no encontrada en: ${source}`);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["loadImage"])(source, options);
}
;
}),
"[project]/lib/fetchRates.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRates",
    ()=>getRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$7$2e$0$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/papaparse@5.7.0/node_modules/papaparse/papaparse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dotenv$40$17$2e$4$2e$2$2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dotenv@17.4.2/node_modules/dotenv/config.js [app-route] (ecmascript)");
;
;
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
    ECUADOR: 'Ecuador'
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
    giros: process.env.SHEET_GIROS_GID || '840936877'
};
async function getRates() {
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
        const { data: vzlaRows } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$7$2e$0$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse(vzlaCsv, {
            header: false
        });
        const { data: girosRows } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$7$2e$0$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse(girosCsv, {
            header: false
        });
        // 1. Tasas hacia Venezuela
        const ratesToVenezuela = {};
        const venezuelaRates = {};
        for(let i = 0; i < vzlaRows.length; i++){
            const row = vzlaRows[i];
            const hasTasaFinal = row.some((c)=>typeof c === 'string' && c.toLowerCase().includes('tasa final'));
            if (hasTasaFinal) {
                const idx = row.findIndex((c)=>typeof c === 'string' && c.toLowerCase().includes('tasa final'));
                const rawCountry = row[idx + 1]?.trim() || row.find((c, col)=>col > idx && typeof c === 'string' && c.trim())?.trim();
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
        for(let i = 0; i < girosRows.length; i++){
            const row = girosRows[i];
            const col10 = row[10]?.trim();
            const col11 = row[11]?.trim();
            const candidateOrigin = col11 || col10;
            const destCols = [];
            for(let c = 2; c <= 10; c++){
                const val = row[c]?.trim();
                if (val && !val.toLowerCase().includes('tabla de giros') && !val.match(/^\d/)) {
                    destCols.push({
                        col: c,
                        country: toCanonicalCountry(val.replace(/tabla de giros/i, ''))
                    });
                }
            }
            if (candidateOrigin && destCols.length >= 3) {
                currentOrigin = toCanonicalCountry(candidateOrigin);
                currentHeaders = destCols;
                continue;
            }
            const isResultRow = row.some((cell)=>typeof cell === 'string' && (cell.includes('RESULTADO B') || cell.trim() === 'TOTAL'));
            if (isResultRow && currentOrigin && currentHeaders) {
                const originObj = result[currentOrigin] || {};
                for (const { col, country } of currentHeaders){
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
        // Guardar las tasas de Venezuela
        result['Venezuela'] = venezuelaRates;
        // Para TODOS los países: Ecuador comparte la misma tasa que EEUU (moneda USD)
        for (const origin of Object.keys(result)){
            if (result[origin]['EEUU'] && !result[origin]['Ecuador']) {
                result[origin]['Ecuador'] = result[origin]['EEUU'];
            }
        }
        // En la raíz, Ecuador comparte las mismas tasas que EEUU (USD)
        if (result['EEUU']) {
            result['Ecuador'] = {
                ...result['EEUU']
            };
        }
        return result;
    } catch (error) {
        console.error("Error procesando el Excel:", error);
        return null;
    }
}
}),
"[project]/lib/processorArgentina.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesArgentina",
    ()=>createImageWithRatesArgentina
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesArgentina(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "10.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // Argentina → EEUU, Brasil, Colombia, Ecuador, Chile, Perú, España, Paraguay, Panamá, México
    const positions = {
        "EEUU": [
            214,
            633
        ],
        "Brasil": [
            214,
            690
        ],
        "Colombia": [
            214,
            750
        ],
        "Ecuador": [
            214,
            810
        ],
        "Chile": [
            214,
            870
        ],
        "Peru": [
            599,
            633
        ],
        "España": [
            599,
            690
        ],
        "Paraguay": [
            599,
            750
        ],
        "Panama": [
            599,
            810
        ],
        "Mexico": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorBrasil.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesBrasil",
    ()=>createImageWithRatesBrasil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesBrasil(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "2.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // Brasil → Chile, Colombia, EEUU, Perú, Ecuador, Argentina, España, México, Paraguay, Panamá
    const positions = {
        "Chile": [
            214,
            633
        ],
        "Colombia": [
            214,
            690
        ],
        "EEUU": [
            214,
            750
        ],
        "Peru": [
            214,
            810
        ],
        "Ecuador": [
            214,
            870
        ],
        "Argentina": [
            599,
            633
        ],
        "España": [
            599,
            690
        ],
        "Mexico": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Panama": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorChile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesChile",
    ()=>createImageWithRatesChile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesChile(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "4.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // Chile → Colombia, EEUU, Argentina, México, Ecuador, Brasil, Perú, España, Paraguay, Panamá
    const positions = {
        "Colombia": [
            214,
            633
        ],
        "EEUU": [
            214,
            690
        ],
        "Argentina": [
            214,
            750
        ],
        "Mexico": [
            214,
            810
        ],
        "Ecuador": [
            214,
            870
        ],
        "Brasil": [
            599,
            633
        ],
        "Peru": [
            599,
            690
        ],
        "España": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Panama": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorColombia.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesColombia",
    ()=>createImageWithRatesColombia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesColombia(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "3.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // Colombia → Chile, EEUU, Argentina, México, Ecuador, Brasil, Perú, España, Paraguay, Panamá
    const positions = {
        "Chile": [
            214,
            633
        ],
        "EEUU": [
            214,
            690
        ],
        "Argentina": [
            214,
            750
        ],
        "Mexico": [
            214,
            810
        ],
        "Ecuador": [
            214,
            870
        ],
        "Brasil": [
            599,
            633
        ],
        "Peru": [
            599,
            690
        ],
        "España": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Panama": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorEEUU.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesEEUU",
    ()=>createImageWithRatesEEUU
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesEEUU(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "5.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // EEUU → Chile, Colombia, Ecuador, Argentina, México, Brasil, Perú, España, Paraguay, Panamá
    const positions = {
        "Chile": [
            214,
            633
        ],
        "Colombia": [
            214,
            690
        ],
        "Ecuador": [
            214,
            750
        ],
        "Argentina": [
            214,
            810
        ],
        "Mexico": [
            214,
            870
        ],
        "Brasil": [
            599,
            633
        ],
        "Peru": [
            599,
            690
        ],
        "España": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Panama": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorEfectivo.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesEfectivo",
    ()=>createImageWithRatesEfectivo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesEfectivo(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "efectivo.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    // Fecha
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    // Hora
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.lineWidth = 7;
    const dateX = 410;
    const dateY = 89;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const timeText = `${timePart} Hora Vzla`;
    const timeX = 770;
    ctx.strokeText(timeText, timeX, dateY);
    ctx.fillText(timeText, timeX, dateY);
    const positions = {
        "Chile": [
            208,
            357
        ],
        "Argentina": [
            213,
            463
        ],
        "EEUU": [
            484,
            592
        ],
        "Brasil": [
            463,
            718
        ],
        "Peru": [
            491,
            351
        ],
        "Colombia": [
            480,
            457
        ],
        "Ecuador": [
            199,
            722
        ],
        "Mexico": [
            214,
            840
        ],
        "España": [
            492,
            840
        ],
        "Panamá": [
            217,
            592
        ]
    };
    ctx.font = '44px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/jpeg");
}
}),
"[project]/lib/processorEspana.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesEspana",
    ()=>createImageWithRatesEspana
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesEspana(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "6.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // España → Chile, Colombia, Argentina, México, Ecuador, Brasil, Perú, EEUU, Paraguay, Panamá
    const positions = {
        "Chile": [
            214,
            633
        ],
        "Colombia": [
            214,
            690
        ],
        "Argentina": [
            214,
            750
        ],
        "Mexico": [
            214,
            810
        ],
        "Ecuador": [
            214,
            870
        ],
        "Brasil": [
            599,
            633
        ],
        "Peru": [
            599,
            690
        ],
        "EEUU": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Panama": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorPanama.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesPanama",
    ()=>createImageWithRatesPanama
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesPanama(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "panama.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas (mantiene posiciones originales de panama.jpg)
    const positions = {
        "Chile": [
            585,
            344
        ],
        "Argentina": [
            550,
            477
        ],
        "EEUU": [
            668,
            608
        ],
        "Brasil": [
            590,
            742
        ],
        "Venezuela": [
            587,
            792
        ],
        "Peru": [
            923,
            349
        ],
        "Colombia": [
            876,
            477
        ],
        "Ecuador": [
            978,
            608
        ],
        "Mexico": [
            890,
            737
        ],
        "España": [
            949,
            855
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/jpeg");
}
}),
"[project]/lib/processorPeru.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesPeru",
    ()=>createImageWithRatesPeru
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesPeru(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "7.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    // Perú → Chile, Ecuador, Colombia, Argentina, México, Brasil, España, EEUU, Paraguay, Panamá
    const positions = {
        "Chile": [
            214,
            633
        ],
        "Ecuador": [
            214,
            690
        ],
        "Colombia": [
            214,
            750
        ],
        "Argentina": [
            214,
            810
        ],
        "Mexico": [
            214,
            870
        ],
        "Brasil": [
            599,
            633
        ],
        "España": [
            599,
            690
        ],
        "EEUU": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Panama": [
            599,
            870
        ]
    };
    // Configuración de las tasas
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorVenezuela.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesVenezuela",
    ()=>createImageWithRatesVenezuela
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/canvas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__ = __turbopack_context__.i("[externals]/@napi-rs/canvas [external] (@napi-rs/canvas, cjs, [project]/node_modules/.pnpm/@napi-rs+canvas@1.0.11/node_modules/@napi-rs/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const robotoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(robotoPath, {
        family: "Roboto SemiBold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(childosPath, {
        family: "Childos"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(oswaldPath, {
        family: "Oswald-Bold"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "Contrail One"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerFont"])(contrailPath, {
        family: "ContrailOne"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesVenezuela(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "12.png");
    const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$napi$2d$rs$2f$canvas__$5b$external$5d$__$2840$napi$2d$rs$2f$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$napi$2d$rs$2b$canvas$40$1$2e$0$2e$11$2f$node_modules$2f40$napi$2d$rs$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    // Fecha y hora
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    // Desplazado significativamente hacia la izquierda (X de 805 a 750)
    // y bastante más hacia abajo (Y de 475 y 510 a 505 y 545)
    const x = 750;
    const dateY = 505;
    const timeY = 545;
    // Renderizar Fecha
    ctx.strokeText(now, x, dateY);
    ctx.fillText(now, x, dateY);
    // Renderizar Hora
    ctx.strokeText(timeText, x, timeY);
    ctx.fillText(timeText, x, timeY);
    // Coordenadas de las tasas
    const positions = {
        "Chile": [
            214,
            633
        ],
        "Colombia": [
            214,
            690
        ],
        "Ecuador": [
            214,
            750
        ],
        "España": [
            214,
            810
        ],
        "EEUU": [
            214,
            870
        ],
        "Mexico": [
            599,
            633
        ],
        "Brasil": [
            599,
            690
        ],
        "Argentina": [
            599,
            750
        ],
        "Paraguay": [
            599,
            810
        ],
        "Peru": [
            599,
            870
        ]
    };
    // Configuración de las tasas (texto negro, borde blanco grueso, tamaño 34px)
    ctx.textAlign = "center";
    ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    for (const [country, value] of Object.entries(rates)){
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/telegram.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bot",
    ()=>bot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$telegram$2d$bot$2d$api$40$0$2e$67$2e$0_request$40$2$2e$88$2e$2$2f$node_modules$2f$node$2d$telegram$2d$bot$2d$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-telegram-bot-api@0.67.0_request@2.88.2/node_modules/node-telegram-bot-api/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dotenv$40$17$2e$4$2e$2$2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dotenv@17.4.2/node_modules/dotenv/config.js [app-route] (ecmascript)");
;
;
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
    throw new Error("Falta TELEGRAM_BOT_TOKEN en .env.local");
}
const bot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$telegram$2d$bot$2d$api$40$0$2e$67$2e$0_request$40$2$2e$88$2e$2$2f$node_modules$2f$node$2d$telegram$2d$bot$2d$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](token);
}),
"[turbopack]/shared/module-cache.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cache",
    ()=>cache
]);
'use turbopack: no side effects';
const moduleCache = __turbopack_context__.c;
/**
 * Property keys always reach a `Proxy` trap as strings, but `ModuleId` is
 * `string | number` and the id kind is fixed for a build: either every id is a
 * number or every id is a string. Detect this by testing our own id.
 */ const idsAreNumeric = typeof __turbopack_context__.m.id === 'number';
// Coerce a string object propty to a ModuleId so it can match the cache.
function toKey(key) {
    if (!idsAreNumeric) return key;
    // A non-canonical spelling (`"0123"`, `"1e3"`, `" 1"`) is not any module's
    // id, so leave it as a string: it will simply miss, as it would have against
    // the object cache.  Without this "1x" would coerce to 1 which might match a module, incorrectly
    const numeric = Number(key);
    return String(numeric) === key ? numeric : key;
}
const cache = new Proxy(// Use an empty object as the 'target' so we can implement ownKeys
{}, {
    get (_target, key) {
        if (typeof key !== 'string') return undefined;
        return moduleCache.get(toKey(key));
    },
    set (_target, key, value) {
        if (typeof key !== 'string') return false;
        moduleCache.set(toKey(key), value);
        return true;
    },
    has (_target, key) {
        return typeof key === 'string' && moduleCache.has(toKey(key));
    },
    deleteProperty (_target, key) {
        if (typeof key !== 'string') return false;
        moduleCache.delete(toKey(key));
        return true;
    },
    ownKeys () {
        return Array.from(moduleCache.keys(), String);
    },
    // `ownKeys` alone is not enough: `Object.keys()` filters by enumerability, so
    // it invokes this trap for every key returned above.
    getOwnPropertyDescriptor (_target, key) {
        if (typeof key !== 'string') return undefined;
        const id = toKey(key);
        if (!moduleCache.has(id)) return undefined;
        return {
            value: moduleCache.get(id),
            writable: true,
            enumerable: true,
            configurable: true
        };
    }
});
}),
]})(),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0w1w3-88dpt72._.js.map