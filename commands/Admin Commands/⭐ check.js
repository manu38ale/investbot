/*CMD
  command: ⭐ check
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  User.setProperty("id", msg, "integer")
  var tgid = User.getProperty("id")
  var res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  Bot.sendMessage(message + " Has `" + res.value().toFixed(8) + "`")
} else {
  Bot.sendMessage("😜 Respeta!! No eres admi XD")
}

