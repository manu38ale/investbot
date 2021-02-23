/*CMD
  command: /adderever@94123
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Introduzca el ID del usuario al cual desea agregar Saldo 
  keyboard: 
  aliases: add balance, 🎉 saldo 🎉
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  User.setProperty("id", msg, "integer")
  {
    Bot.runCommand("adder")
  }
} else {
  Bot.sendMessage("You are not admin!")
}

