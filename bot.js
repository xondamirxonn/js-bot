const { translate } = require("@vitalets/google-translate-api");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("6944671638:AAHDpHk5LXOXIvo3j3OpCGk2myjfZ8BQqx4");

bot.start((ctx) => ctx.reply("Botimizga xush kelibsiz. Bot O'zbekchadan Ruschaga Tarjima qilib beradi.  \n\n\n\nAdmin @xondamirxonn"
));




bot.on("text", async (ctx) => {
  try {
    const textMessage = ctx.message.text;
    const { text } = await translate(textMessage, { from: "uz", to: "ru" });
    await ctx.reply(text);
  } catch (error) {
    await ctx.reply(JSON.stringify(error));
  }
});

bot.launch();


