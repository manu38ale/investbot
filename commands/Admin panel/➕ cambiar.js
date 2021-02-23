/*CMD
  command: ➕ cambiar
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Envie el ID a cambiar el monto de la inversion activa
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  User.setProperty("id", msg, "integer")
  {
    Bot.runCommand("JJ")
  }
} else {
  Bot.sendMessage("You are not admin!")
}

