/*CMD
  command: ⭐ reinversion
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: ID
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let msg = message
  User.setProperty("id", msg, "integer")
  {
    Bot.runCommand("ree")
  }
} else {
  Bot.sendMessage("You are not admin!")
}

