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
const IMAGE_PROCESSORS = [
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
            const processingMsg = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendMessage(chatId, "⏳ Procesando imágenes... Esto puede durar máximo 1 minuto");
            const rawRates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRates"])();
            const rates = {
                ecuador: rawRates["Ecuador"] || rawRates["ECUADOR"],
                mexico: rawRates["Mexico"] || rawRates["México"] || rawRates["MEXICO"],
                venezuela: {
                    ...rawRates["Venezuela"] || {},
                    ...rawRates["Vzla"] || {}
                },
                peru: rawRates["Perú"] || rawRates["Peru"] || rawRates["PERU"],
                chile: rawRates["Chile"] || rawRates["CHILE"],
                argentina: rawRates["Argentina"] || rawRates["ARGENTINA"],
                brasil: rawRates["Brasil"] || rawRates["BR"] || rawRates["BRASIL"],
                colombia: rawRates["Colombia"] || rawRates["COLOMBIA"],
                eeuu: rawRates["EEUU"] || rawRates["eeuu"],
                espana: rawRates["España"] || rawRates["españa"],
                panama: rawRates["Panamá"] || rawRates["Panama"],
                efectivo: rawRates["Efectivo"] || rawRates["efectivo"]
            };
            if (Object.values(rates).every((val)=>!val || Object.keys(val).length === 0)) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].editMessageText("No encontré tasas disponibles en este momento", {
                    chat_id: chatId,
                    message_id: processingMsg.message_id
                });
                return new Response("ok", {
                    status: 200
                });
            }
            const imagePromises = IMAGE_PROCESSORS.filter(({ key })=>rates[key] && Object.keys(rates[key]).length > 0).map(async ({ key, processor })=>{
                try {
                    const buffer = await processor(rates[key]);
                    return {
                        buffer
                    };
                } catch (error) {
                    console.error(`Error procesando ${key}:`, error);
                    return null;
                }
            });
            const images = (await Promise.all(imagePromises)).filter(Boolean);
            if (images.length === 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendMessage(chatId, "No se pudieron generar imágenes en este momento", PERSISTENT_KEYBOARD);
                return new Response("ok", {
                    status: 200
                });
            }
            for(let i = 0; i < images.length; i++){
                const img = images[i];
                const isLast = i === images.length - 1;
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bot"].sendPhoto(chatId, img.buffer, {
                    caption: img.caption,
                    reply_markup: isLast ? UPDATE_BUTTON.reply_markup : undefined
                });
            }
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
    return new Response(JSON.stringify({
        message: "API Bot funcionando"
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
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
const parseRoute = (label)=>{
    const parts = label.split(/\s*-\s*|\s+a\s+|\s+/i);
    if (parts.length >= 2) {
        return {
            origin: parts[0].trim(),
            dest: parts.slice(1).join(' ').trim()
        };
    }
    return {
        origin: label,
        dest: 'unknown'
    };
};
async function getRates() {
    try {
        const res = await fetch(SHEET_URL);
        const csvText = await res.text();
        const { data: rows } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$7$2e$0$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
            header: false
        });
        const result = {};
        let inBlueTable = false; // Bandera para saber si estamos dentro de la tabla azul
        for(let i = 0; i < rows.length; i++){
            const row = rows[i];
            const firstCell = row[2]; // Índice 2 equivale a la columna C
            // Si ya entramos a la tabla azul y encontramos una celda vacía, significa que la tabla terminó.
            // Rompemos el bucle para no sobreescribir los datos con las tablas de abajo.
            if (inBlueTable && (!firstCell || firstCell.trim() === '')) {
                break;
            }
            // Detectamos si es una fila de encabezados (ej. "Chile-Peru")
            if (firstCell && typeof firstCell === 'string' && firstCell.includes('-')) {
                inBlueTable = true; // Marcamos que ya encontramos la tabla
                const valueRow = rows[i + 1];
                if (!valueRow) continue;
                // Recorremos las columnas de la C (2) a la L (11)
                for(let j = 2; j <= 11; j++){
                    const label = row[j];
                    const rawValue = valueRow[j];
                    if (label && rawValue) {
                        const { origin, dest } = parseRoute(label);
                        const value = rawValue;
                        if (!result[origin]) result[origin] = {};
                        result[origin][dest] = value;
                    }
                }
                i++; // Saltamos la fila de valores para no procesarla como encabezado
            }
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesArgentina(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "argentina.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const positions = {
        "Chile": [
            565,
            354
        ],
        "Colombia": [
            549,
            477
        ],
        "Ecuador": [
            677,
            608
        ],
        "Brasil": [
            586,
            742
        ],
        "Venezuela": [
            585,
            792
        ],
        "Perú": [
            927,
            352
        ],
        "EEUU": [
            865,
            477
        ],
        "Mexico": [
            981,
            608
        ],
        "Panamá": [
            904,
            742
        ],
        "España": [
            954,
            856
        ]
    };
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de Argentina
    const [cashX, cashY] = [
        623,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorBrasil.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesBrasil",
    ()=>createImageWithRatesBrasil
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesBrasil(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "brasil.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const positions = {
        "Chile": [
            570,
            354
        ],
        "Argentina": [
            548,
            477
        ],
        "EEUU": [
            668,
            608
        ],
        "Mexico": [
            590,
            742
        ],
        "Venezuela": [
            587,
            792
        ],
        "Peru": [
            923,
            350
        ],
        "Colombia": [
            873,
            477
        ],
        "Ecuador": [
            978,
            608
        ],
        "Panamá": [
            887,
            737
        ],
        "España": [
            930,
            865
        ]
    };
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de Brasil
    const [cashX, cashY] = [
        613,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorChile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesChile",
    ()=>createImageWithRatesChile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesChile(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "chile.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
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
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    // Posiciones de los países (sin efectivo en la lista de tasas dinámicas)
    const positions = {
        "Peru": [
            573,
            350
        ],
        "Colombia": [
            533,
            477
        ],
        "Ecuador": [
            677,
            606
        ],
        "Brasil": [
            582,
            741
        ],
        "Venezuela": [
            585,
            792
        ],
        "Argentina": [
            930,
            350
        ],
        "EEUU": [
            865,
            477
        ],
        "Mexico": [
            981,
            606
        ],
        "Panamá": [
            882,
            735
        ],
        "España": [
            959,
            854
        ]
    };
    // Pintar tasas de países
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        // Si viene alguna variación de efectivo en el objeto, la ignoramos aquí
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar exactamente "Consultar Tasa" fijo en la casilla de efectivo
    const [cashX, cashY] = [
        623,
        854
    ];
    ctx.font = "32px Roboto SemiBold"; // Reducido a 32px para que la frase entre centrada y legible
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorColombia.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesColombia",
    ()=>createImageWithRatesColombia
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesColombia(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "colombia.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const positions = {
        "Chile": [
            570,
            354
        ],
        "Argentina": [
            544,
            477
        ],
        "Ecuador": [
            673,
            608
        ],
        "Brasil": [
            586,
            742
        ],
        "Venezuela": [
            585,
            792
        ],
        "Perú": [
            933,
            352
        ],
        "EEUU": [
            869,
            483
        ],
        "Mexico": [
            982,
            608
        ],
        "Panamá": [
            882,
            737
        ],
        "España": [
            952,
            856
        ]
    };
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de Colombia
    const [cashX, cashY] = [
        625,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorEEUU.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesEEUU",
    ()=>createImageWithRatesEEUU
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesEEUU(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "eeuu.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const positions = {
        "Chile": [
            568,
            354
        ],
        "Argentina": [
            550,
            477
        ],
        "Ecuador": [
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
            346
        ],
        "Colombia": [
            875,
            477
        ],
        "Mexico": [
            978,
            608
        ],
        "Panamá": [
            903,
            737
        ],
        "España": [
            938,
            855
        ]
    };
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de EEUU
    const [cashX, cashY] = [
        613,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorEfectivo.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesEfectivo",
    ()=>createImageWithRatesEfectivo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesEfectivo(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "efectivo.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 410;
    const dateY = 89;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    ctx.font = "44px Roboto SemiBold";
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
    ctx.font = "44px Roboto SemiBold";
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
"[project]/lib/processorEspana.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesEspana",
    ()=>createImageWithRatesEspana
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesEspana(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "espana.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const positions = {
        "Chile": [
            566,
            354
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
        "Panamá": [
            980,
            608
        ],
        "Mexico": [
            890,
            737
        ],
        "Ecuador": [
            949,
            855
        ]
    };
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de España
    const [cashX, cashY] = [
        613,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorPanama.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesPanama",
    ()=>createImageWithRatesPanama
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesPanama(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "panama.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
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
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de Panamá
    const [cashX, cashY] = [
        613,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorPeru.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesPeru",
    ()=>createImageWithRatesPeru
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesPeru(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "peru.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 908;
    const dateY = 93;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const positions = {
        "Chile": [
            556,
            357
        ],
        "Colombia": [
            545,
            477
        ],
        "ecuador": [
            664,
            608
        ],
        "brasil": [
            588,
            742
        ],
        "Venezuela": [
            585,
            792
        ],
        "Argentina": [
            924,
            349
        ],
        "eeuu": [
            869,
            477
        ],
        "mexico": [
            974,
            608
        ],
        "Panamá": [
            896,
            733
        ],
        "España": [
            947,
            856
        ]
    };
    ctx.font = "44px Roboto SemiBold";
    for (const [country, value] of Object.entries(rates)){
        if (country.toLowerCase().includes("efectivo")) continue;
        const pos = positions[country];
        if (pos) {
            const text = `${value}`;
            ctx.strokeText(text, pos[0], pos[1]);
            ctx.fillText(text, pos[0], pos[1]);
        }
    }
    // Pintar "Consultar Tasa" en la posición de Efectivo de Perú
    const [cashX, cashY] = [
        614,
        856
    ];
    ctx.font = "32px Roboto SemiBold";
    const cashText = "Consultar Tasa";
    ctx.strokeText(cashText, cashX, cashY);
    ctx.fillText(cashText, cashX, cashY);
    return canvas.toBuffer("image/png");
}
}),
"[project]/lib/processorVenezuela.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageWithRatesVenezuela",
    ()=>createImageWithRatesVenezuela
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs, [project]/node_modules/.pnpm/canvas@3.2.3/node_modules/canvas)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
try {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["registerFont"])(fontPath, {
        family: "Roboto SemiBold"
    });
} catch (err) {
    console.error("Error al registrar la fuente:", err);
}
async function createImageWithRatesVenezuela(rates) {
    const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "venezuela.jpg");
    const image = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["loadImage"])(imagePath);
    const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$canvas$40$3$2e$2$2e$3$2f$node_modules$2f$canvas$29$__["createCanvas"])(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    const now = new Date().toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    ctx.font = "44px Roboto SemiBold";
    const dateX = 410;
    const dateY = 89;
    ctx.strokeText(now, dateX, dateY);
    ctx.fillText(now, dateX, dateY);
    const timePart = new Date().toLocaleString("en-VE", {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    ctx.font = "44px Roboto SemiBold";
    const timeText = `${timePart} Hora Vzla`;
    const timeX = 770;
    ctx.strokeText(timeText, timeX, dateY);
    ctx.fillText(timeText, timeX, dateY);
    const positions = {
        "Chile": [
            177,
            351
        ],
        "Argentina": [
            178,
            469
        ],
        "EEUU": [
            523,
            470
        ],
        "Brasil": [
            490,
            725
        ],
        "Venezuela": [
            587,
            792
        ],
        "Peru": [
            526,
            351
        ],
        "Colombia": [
            497,
            605
        ],
        "Ecuador": [
            200,
            724
        ],
        "Mexico": [
            186,
            838
        ],
        "España": [
            516,
            838
        ],
        "Panamá": [
            210,
            601
        ]
    };
    ctx.font = "44px Roboto SemiBold";
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0fkbzq-qsp4rk._.js.map