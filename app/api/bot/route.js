import { after } from "next/server";
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

// Registro en memoria de updates procesados para ignorar duplicados de Telegram
const processedUpdates = new Set();

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

    const mediaItems = [];
    const errors = [];

    // Generar todas las imágenes en buffers
    for (const { key, processor } of processorsToRun) {
      try {
        const buffer = await processor(rates[key]);
        mediaItems.push({
          key,
          type: "photo",
          media: buffer,
          fileOptions: {
            filename: `${key}.png`,
            contentType: "image/png",
          },
        });
      } catch (err) {
        console.error(`Error procesando ${key}:`, err);
        errors.push(`${key}: ${err.message || err}`);
      }
    }

    if (mediaItems.length === 0) {
      const errorDetail = errors.length > 0 ? `\nDetalle: ${errors.slice(0, 3).join(", ")}` : "";
      await bot.sendMessage(
        chatId,
        `No se pudieron generar imágenes en este momento.${errorDetail}`,
        PERSISTENT_KEYBOARD
      );
      return;
    }

    // Enviar en álbumes de hasta 7 fotos con sendMediaGroup
    // Reduce drásticamente 13 mensajes individuales a solo 2 álbumes
    try {
      const CHUNK_SIZE = 7;
      for (let i = 0; i < mediaItems.length; i += CHUNK_SIZE) {
        const chunk = mediaItems.slice(i, i + CHUNK_SIZE).map((item) => ({
          type: "photo",
          media: item.media,
          fileOptions: item.fileOptions,
        }));

        await bot.sendMediaGroup(chatId, chunk);

        if (i + CHUNK_SIZE < mediaItems.length) {
          await new Promise((r) => setTimeout(r, 1000));
        }
      }

      // Mensaje final con el botón de actualización
      await bot.sendMessage(
        chatId,
        "✅ Tasas generadas exitosamente. Usa el botón inferior para actualizar cuando desees:",
        UPDATE_BUTTON
      );
    } catch (mediaGroupErr) {
      console.warn("Fallo sendMediaGroup, recurriendo a envío individual:", mediaGroupErr.message);

      // Fallback a envío individual si sendMediaGroup presenta problemas
      for (let i = 0; i < mediaItems.length; i++) {
        const item = mediaItems[i];
        const isLast = i === mediaItems.length - 1;
        await bot.sendPhoto(
          chatId,
          item.media,
          {
            reply_markup: isLast ? UPDATE_BUTTON.reply_markup : undefined,
          },
          item.fileOptions
        );
        if (!isLast) {
          await new Promise((resolve) => setTimeout(resolve, 800));
        }
      }
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

    // Filtro contra actualizaciones duplicadas de Telegram
    if (update.update_id) {
      if (processedUpdates.has(update.update_id)) {
        console.log(`⚠️ Update ${update.update_id} ya procesado previamente. Ignorando.`);
        return new Response("ok", { status: 200 });
      }
      processedUpdates.add(update.update_id);
      if (processedUpdates.size > 500) {
        const first = processedUpdates.values().next().value;
        processedUpdates.delete(first);
      }
    }

    const chatId =
      update.message?.chat?.id || update.callback_query?.message?.chat?.id;

    if (!chatId) {
      return new Response("ok", { status: 200 });
    }

    const rawText = (update.message?.text || "").trim();
    const text = rawText.toLowerCase();
    const callbackData = update.callback_query?.data;

    console.log(`📩 [Telegram Update] chatId: ${chatId} | texto: "${rawText}" | callback: ${callbackData || 'ninguno'}`);

    // Responder de inmediato al callback_query sin bloquear
    if (update.callback_query) {
      bot.answerCallbackQuery(update.callback_query.id).catch((e) => {
        console.warn("Aviso al responder callback query:", e.message);
      });
    }

    const WELCOME_MESSAGE = `🤖 ¡Hola! Soy TravelBot, tu bot generador de imágenes.

📋 ¿Cómo usarme?

1️⃣ Presiona "Generar Tasas💸" para procesar las imágenes
2️⃣ Usa el botón "🔄 Actualizar Tasas" cuando necesites tasas nuevas

¡Comencemos! 👇`;

    if (text === "/start" || text === "start") {
      after(async () => {
        try {
          await bot.sendMessage(chatId, WELCOME_MESSAGE, {
            reply_markup: {
              inline_keyboard: [
                [{ text: "Generar Tasas 💸", callback_data: "generate_rates" }]
              ],
            }
          });

          await new Promise((resolve) => setTimeout(resolve, 500));

          await bot.sendMessage(chatId, "O presiona el botón inferior 👇", PERSISTENT_KEYBOARD);
        } catch (err) {
          console.error("Error en /start:", err);
        }
      });

      // Retornar 200 OK inmediatamente a Telegram
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
      // Usamos after() de Next.js para ejecutar la generación pesada en segundo plano
      // sin bloquear la respuesta HTTP a Telegram (evitando 'Read timeout expired')
      after(async () => {
        try {
          await handleGenerateImages(chatId);
        } catch (err) {
          console.error("Error en generación en segundo plano:", err);
        }
      });

      // Responder 200 OK inmediatamente a Telegram (< 50ms)
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
