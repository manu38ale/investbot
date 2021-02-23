/*CMD
  command: 💳 cambiar
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Envie ID a cambiar Etc..
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  User.setProperty("id", msg, "integer")
  {
    Bot.runCommand("J")
  }
} else {
  Bot.sendMessage("You are not admin!")
}

