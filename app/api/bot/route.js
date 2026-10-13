import { bot } from "../../../lib/telegram";
import { getRates } from "../../../lib/fetchRates";
import { createImageWithRatesVenezuela } from "../../../lib/processorVenezuela";
import { createImageWithRatesPeru } from "../../../lib/processorPeru";
import { createImageWithRatesChile } from "../../../lib/processorChile";
import { createImageWithRatesArgentina } from "../../../lib/processorArgentina";
import { createImageWithRatesBrasil } from "../../../lib/processorBrasil";
import { createImageWithRatesColombia } from "../../../lib/processorColombia";
import { createImageWithRatesEfectivo } from "../../../lib/processorEfectivo";
import { createImageWithRatesEEUU } from "../../../lib/processorEEUU";
import { createImageWithRatesEspana } from "../../../lib/processorEspana";
import { createImageWithRatesParaguay } from "../../../lib/processorParaguay";
import { createImageWithRatesEcuador } from "../../../lib/processorEcuador";
import { createImageWithRatesRemesasVenezuela } from "../../../lib/RemesasVenezuela";
import { createImageWithRatesMexico } from "../../../lib/processorMexico";

export const maxDuration = 60; // Permite hasta 60 segundos de ejecución en Vercel

// Modo de prueba: configurado en true para ejecutar únicamente Venezuela
const TEST_MODE = false;

const ALL_IMAGE_PROCESSORS = [
  { key: 'remesasVenezuela', processor: createImageWithRatesRemesasVenezuela },
  { key: 'chile', processor: createImageWithRatesChile },
  { key: 'peru', processor: createImageWithRatesPeru },
  { key: 'argentina', processor: createImageWithRatesArgentina },
  { key: 'colombia', processor: createImageWithRatesColombia },
  { key: 'brasil', processor: createImageWithRatesBrasil },
  { key: 'eeuu', processor: createImageWithRatesEEUU },
  { key: 'espana', processor: createImageWithRatesEspana },
  { key: 'paraguay', processor: createImageWithRatesParaguay },
  { key: 'mexico', processor: createImageWithRatesMexico },
  { key: 'ecuador', processor: createImageWithRatesEcuador },
  { key: 'venezuela', processor: createImageWithRatesVenezuela },
  { key: 'efectivo', processor: createImageWithRatesEfectivo },
];

const IMAGE_PROCESSORS = TEST_MODE
  ? [{ key: 'venezuela', processor: createImageWithRatesVenezuela }]
  : ALL_IMAGE_PROCESSORS;

const PERSISTENT_KEYBOARD = {
  reply_markup: {
    keyboard: [
      [
        { text: "Generar Tasas💸" }
      ]
    ],
    resize_keyboard: true,
    one_time_keyboard: false,
  },
};

const UPDATE_BUTTON = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Actualizar Tasas🔄",
          callback_data: "update_all",
        },
      ],
    ],
  },
};

async function handleGenerateImages(chatId) {
  try {
    const processingMsg = await bot.sendMessage(
      chatId,
      "⏳ Procesando imágenes... Esto durará solo unos segundos"
    );

    const rawRates = await getRates();

    if (!rawRates) {
      await bot.editMessageText("No encontré tasas disponibles en este momento", {
        chat_id: chatId,
        message_id: processingMsg.message_id,
      });
      return;
    }

    const rates = {
      ecuador: rawRates["EEUU"], // Ecuador usa USD → mismas tasas que EEUU
      mexico: rawRates["Mexico"],
      venezuela: rawRates["Venezuela"],
      remesasVenezuela: rawRates["RemesasVenezuela"],
      peru: rawRates["Peru"],
      chile: rawRates["Chile"],
      argentina: rawRates["Argentina"],
      brasil: rawRates["Brasil"],
      colombia: rawRates["Colombia"],
      eeuu: rawRates["EEUU"],
      espana: rawRates["España"],
      paraguay: rawRates["Paraguay"],
      efectivo: rawRates["Efectivo"],
    };

    if (Object.values(rates).every(val => !val || Object.keys(val).length === 0)) {
      await bot.editMessageText("No encontré tasas disponibles en este momento", {
        chat_id: chatId,
        message_id: processingMsg.message_id,
      });
      return;
    }

    const processorsToRun = IMAGE_PROCESSORS.filter(
      ({ key }) => rates[key] && Object.keys(rates[key]).length > 0
    );

    let sentCount = 0;
    const errors = [];

    for (let i = 0; i < processorsToRun.length; i++) {
      const { key, processor } = processorsToRun[i];
      try {
        const buffer = await processor(rates[key]);
        const isLast = i === processorsToRun.length - 1;

        await bot.sendPhoto(
          chatId,
          buffer,
          {
            reply_markup: isLast ? UPDATE_BUTTON.reply_markup : undefined,
          },
          {
            filename: `${key}.png`,
            contentType: "image/png",
          }
        );
        sentCount++;
      } catch (err) {
        console.error(`Error procesando o enviando ${key}:`, err);
        errors.push(`${key}: ${err.message || err}`);
      }
    }

    if (sentCount === 0) {
      const errorDetail = errors.length > 0 ? `\nDetalle: ${errors.slice(0, 3).join(", ")}` : "";
      await bot.sendMessage(
        chatId,
        `No se pudieron generar imágenes en este momento.${errorDetail}`,
        PERSISTENT_KEYBOARD
      );
      return;
    }
  } catch (error) {
    console.error("Error en handleGenerateImages:", error);
    try {
      await bot.sendMessage(chatId, `Ocurrió un error: ${error.message || error}`);
    } catch (_) { }
  }
}

export async function POST(req) {
  try {
    const update = await req.json();

    const chatId =
      update.message?.chat?.id || update.callback_query?.message?.chat?.id;
    const rawText = (update.message?.text || "").trim();
    const text = rawText.toLowerCase();
    const callbackData = update.callback_query?.data;

    console.log(`📩 [Telegram Update] chatId: ${chatId} | texto: "${rawText}" | callback: ${callbackData || 'ninguno'}`);

    if (update.callback_query) {
      await bot.answerCallbackQuery(update.callback_query.id);
    }

    const WELCOME_MESSAGE = `🤖 ¡Hola! Soy TravelBot, tu bot generador de imágenes.

📋 ¿Cómo usarme?

1️⃣ Presiona "Generar Tasas💸" para procesar las imágenes
2️⃣ Usa el botón "🔄 Actualizar Tasas" cuando necesites tasas nuevas

¡Comencemos! 👇`;

    const INLINE_START_BUTTON = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Generar Tasas 💸",
              callback_data: "generate_rates",
            },
          ],
        ],
      },
    };

    if (text === "/start" || text === "start") {
      // Enviamos el mensaje con el botón inline Y registramos el teclado inferior persistente
      await bot.sendMessage(chatId, WELCOME_MESSAGE, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Generar Tasas 💸", callback_data: "generate_rates" }]
          ],
        }
      });
      // Aseguramos el teclado inferior por si su Telegram lo soporta
      await bot.sendMessage(chatId, "O presiona el botón inferior 👇", PERSISTENT_KEYBOARD);
      return new Response("ok", { status: 200 });
    }

    // Normalizar texto para aceptar "generar tasas", "generar tasa", "tasas", con o sin emoji
    const cleanText = text.replace(/[^a-z0-9]/g, "");
    const isGenerateText =
      cleanText.includes("generartasa") ||
      cleanText.includes("generartasas") ||
      cleanText === "tasas" ||
      cleanText === "tasa";

    // Manejo de generación de imágenes (acepta callback_data o texto escrito)
    if (
      callbackData === "update_all" ||
      callbackData === "generate_rates" ||
      text === "generar tasas💸" ||
      isGenerateText
    ) {
      await handleGenerateImages(chatId);
      return new Response("ok", { status: 200 });
    }

    return new Response("ok", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("ok", { status: 200 });
  }
}

export async function GET() {
  const rates = await getRates();
  return new Response(
    JSON.stringify(
      {
        message: "API Bot funcionando",
        timestamp: new Date().toISOString(),
        rates,
      },
      null,
      2
    ),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
