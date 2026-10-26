import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);
let webhookUrl = process.env.WEB_HOOK_URL;
if (webhookUrl && !webhookUrl.includes('/api/bot')) {
  webhookUrl = webhookUrl.replace(/\/+$/, '') + '/api/bot';
}

async function configureWebhook() {
  try {
    // drop_pending_updates: true limpia la cola de mensajes acumulados/reintentos
    await bot.setWebHook(webhookUrl, { drop_pending_updates: true });
    console.log('✅ Webhook configurado exitosamente en:', webhookUrl);

    const info = await bot.getWebHookInfo();
    console.log('ℹ️ Info del webhook actualizada:', info);
  } catch (error) {
    console.error('❌ Error configurando webhook:', error);
  }
}

configureWebhook();
