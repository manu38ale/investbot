/*CMD
  command: next
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status

if (user == "member" || user == "creator" || user == "administrator") {
  Bot.runCommand("/joined")
} else {
  Bot.runCommand("Task-On-Joining")
}

Bot.setProperty("status", user, "text")

