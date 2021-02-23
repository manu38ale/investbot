/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Envie El mensaje que desea enviar a su canal 📡
  keyboard: 
  aliases: send message in channel, 📡 canal 📡
CMD*/

var admin = user.telegramid

if (admin == 1548636348) {
  let msg = message
  Api.sendMessage({
    chat_id: "@tronuniversepayments",
    text: msg,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
} else {
  Bot.sendMessage("You are not Admin!")
}

