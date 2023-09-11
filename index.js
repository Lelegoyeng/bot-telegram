const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;
const myID = process.env.myID;
const bot = new TelegramBot(token, { polling: true });


bot.sendMessage(myID, 'Received your message');
