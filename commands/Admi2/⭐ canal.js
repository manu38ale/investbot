/*CMD
  command: ⭐ canal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admi2
  answer: Envia msj al canal.. 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
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

