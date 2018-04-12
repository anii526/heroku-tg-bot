const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
let token = '573107675:AAEW8yY6nrZCN1dUQsMepXynEMRmrIJRViE';
// Включить опрос сервера
let bot = new TelegramBot(token, {polling: true});

// Простая команда без параметров.
bot.on('message',(msg) => {
    let chat = msg.chat;
    let chatId = chat.id;
    if (chat.type === "private") {
        // Это сообщение отправлено в личный чат с ботом
        let messageText = msg.text;
        bot.sendMessage(chatId, messageText);

        // switch (messageText) {
        //     // Обработка команд
        //     case '/docker':
        //         console.log('Processing command: ' + messageText);

        //         // Получить ссылки из RSS ленты и отправить в чат
        //         var feed_url = 'https://dev-ops-notes.ru/category/docker/feed/';
        //         parser.parseURL(feed_url, function(err, parsed) {
        //             parsed.feed.entries.forEach(function(entry) {
        //                 var msg = decodeURIComponent(entry.link);
        //                 // Собственно отправка сообщения ботом
        //                 bot.sendMessage(chatId, msg);
        //             });
        //         });
        //         break;
        //     default:
        //         bot.sendMessage(chatId, 'Привет! Отправь мне /docker и получи последние статьи о Docker!');
        //         break;
        // }
    }
});

console.log("Сработало");