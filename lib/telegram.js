import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error("Falta TELEGRAM_BOT_TOKEN en .env.local");
}

export const bot = new TelegramBot(token);

// Helper para esperar milisegundos
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Interceptor global para auto-reintentar cuando Telegram devuelva error 429 (Too Many Requests)
const originalRequest = bot._request.bind(bot);

bot._request = async function (endpoint, options = {}) {
  const maxRetries = 3;
  let attempt = 0;

  while (true) {
    try {
      // Usamos una copia superficial para evitar mutaciones no deseadas entre reintentos
      const requestOptions = { ...options };
      if (options.form) requestOptions.form = { ...options.form };
      if (options.qs) requestOptions.qs = { ...options.qs };
      if (options.formData) requestOptions.formData = { ...options.formData };

      return await originalRequest(endpoint, requestOptions);
    } catch (error) {
      attempt++;
      const statusCode = error.response?.statusCode || error.response?.body?.error_code;
      const is429 = statusCode === 429 || /429|Too Many Requests/i.test(error.message || '');

      if (is429 && attempt <= maxRetries) {
        // Extraer los segundos que Telegram solicita esperar
        const retryAfter =
          error.response?.body?.parameters?.retry_after ||
          parseInt(error.message?.match(/retry after (\d+)/i)?.[1], 10) ||
          parseInt(error.response?.headers?.['retry-after'], 10) ||
          5;

        console.warn(
          `⚠️ [Telegram 429 Rate Limit] Límite alcanzado en "${endpoint}". Esperando ${retryAfter}s antes de reintentar (intento ${attempt}/${maxRetries})...`
        );

        // Esperar el tiempo exacto que pide Telegram + margen de 600ms
        await sleep(retryAfter * 1000 + 600);
        continue;
      }

      // Si no es 429 o superó los reintentos, relanzar el error
      throw error;
    }
  }
};
