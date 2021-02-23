/*CMD
  command: /sendtoall
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: 📲 Envie el Mesaje que desea enviar a todos sus usuarios
  keyboard: 
  aliases: broadcast message, 📲 mensaje 📲
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  Bot.sendMessageToAllPrivateChats(msg)
} else {
  Bot.sendMessage("You are not Admin!")
}

