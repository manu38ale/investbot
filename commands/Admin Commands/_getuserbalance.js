/*CMD
  command: /getuserbalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Verifica el saldo actual de algun usuario en Tu Bot Enviame su ID :
  keyboard: 
  aliases: get balance, ⭐ verificar ⭐
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

