export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'

const token = "7352687069:AAE_e2DG-X55FaeKa061I7y3_WCYJCjyHRU"

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token)
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

export const POST = webhookCallback(bot, 'std/http')