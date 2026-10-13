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
    await bot.setWebHook(webhookUrl);
    console.log('✅ Webhook configurado exitosamente en:', webhookUrl);

    const info = await bot.getWebHookInfo();
    console.log('ℹ️ Info del webhook actualizada:', info);
  } catch (error) {
    console.error('❌ Error configurando webhook:', error);
  }
}

configureWebhook();