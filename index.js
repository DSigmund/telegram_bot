const TelegramBot = require('node-telegram-bot-api');

const Config = require('sigmundd-config');

let config = new Config()

const bot = new TelegramBot(config.token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  console.dir(msg)
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.from.id.toString() === config.like) {
    bot.sendMessage(chatId, likeMessages[Math.floor(Math.random()*likeMessages.length)], {reply_to_message_id: msg.message_id});
  }

  if (msg.from.id.toString() === config.dislike) {
    bot.sendMessage(chatId, dislikeMessages[Math.floor(Math.random()*dislikeMessages.length)], {reply_to_message_id: msg.message_id});
  }
});

let likeMessages = [
  "Finde ich gut!",
  "Genau!",
  "Ja!",
  "Stimmt, das denke ich auch"
]
let dislikeMessages = [
  "So ein Quatsch",
  "Buh!",
  "Nein!",
  "Glaube ich nicht."
]