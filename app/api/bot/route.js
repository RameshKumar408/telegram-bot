export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'
const { Markup } = require('telegraf');

const token = "7352687069:AAE_e2DG-X55FaeKa061I7y3_WCYJCjyHRU"

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token)
// bot.command("start", (ctx) => {
//     ctx.reply('Welcome! Click the button below to launch the mini app:', Markup.inlineKeyboard([
//         [Markup.button.url('Launch Application', "https://t.me/rameshfoodorderbot/rameshfoodorder")]
//     ]))
// });

bot.api.setMyCommands([
    {
        command: 'start',
        description: 'Launch App',
    }
]);

bot.command("start", (ctx) => {
    ctx.reply('Welcome! Click the button below to launch the mini app:', Markup.inlineKeyboard([
        [Markup.button.url('Launch Application', "https://t.me/rameshfoodorderbot/rameshfoodorder")]
    ]))
});

export const POST = webhookCallback(bot, 'std/http')