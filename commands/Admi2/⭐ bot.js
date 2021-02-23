/*CMD
  command: ⭐ bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admi2
  answer: Envia msj a los usuarios del bot 
  keyboard: 📲 panel
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  Bot.sendMessageToAllPrivateChats(msg)
} else {
  Bot.sendMessage("You are not Admin!")
}

