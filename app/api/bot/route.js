export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'
const { Markup } = require('telegraf');

const token = "7352687069:AAE_e2DG-X55FaeKa061I7y3_WCYJCjyHRU"

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token)

const web_link = "https://legendary-belekoy-e355b2.netlify.app/";

bot.api.setMyCommands([
    {
        command: 'open',
        description: 'Launch App',
    }
]);

// bot.command("start", (ctx) => {
// ctx.reply('Welcome! Click the button below to launch the mini app:')
// });

bot.command('open', ctx => {
    ctx.reply('Click the link to open the web app:', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: { url: web_link } // Replace with your web app URL
                    }
                ]
            ]
        }
    });
});


// //send message to specific chat
// bot.api.sendMessage(5045326288, "Hi!");

bot.hears("ping", async (ctx) => {
    // `reply` is an alias for `sendMessage` in the same chat (see next section).
    await ctx.reply("pong", {
        // `reply_parameters` specifies the actual reply feature.
        reply_parameters: { message_id: ctx.msg.message_id },
    });
});


// bot.api.sendMessage(
//     5045326288,
//     "*Hi\\!* _Welcome_ to [grammY](https://grammy.dev)\\.",
//     { parse_mode: "MarkdownV2" },
// );

// bot.api.sendMessage(
//     5045326288,
//     '<b>Hi!</b> <i>Welcome</i> to <a href="https://grammy.dev">grammY</a>.',
//     { parse_mode: "HTML" },
// );


// bot.command("start", async (ctx) => {
//     await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
//         // Make Telegram clients automatically show a reply interface to the user.
//         reply_markup: { force_reply: true },
//     });
// });

// //listen event user msg to bot
// bot.on("message", async (ctx) => {
//     console.log("🚀 ~ bot.on ~ ctx:", ctx)
//     // `ctx` is the `Context` object.
// });

// //listen event user edited msg to bot
// bot.on("edited_message", async (ctx) => {
//     // Get the new, edited, text of the message.
//     const editedText = ctx.editedMessage.text;
//     console.log("🚀 ~ bot.on ~ editedText:", editedText)
// });

// // user enter phone number or email to get the values.
// bot.on("message:entities", async (ctx) => {
//     // Get all the entities.
//     const entities = ctx.entities();
//     console.log("🚀 ~ bot.on ~ entities:", entities)

//     // Get the first entity's text.
//     entities[0].text;

//     // Get email entities.
//     const emails = ctx.entities("email");
//     console.log("🚀 ~ bot.on ~ emails:", emails)

//     // Get phone entities.
//     const phone = ctx.entities("phone");
//     console.log("🚀 ~ bot.on ~ emails:", phone)
// });


//error handler
bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
});


export const POST = webhookCallback(bot, 'std/http')