/*CMD
  command: ree
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Monto
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let tgid = User.getProperty("id")
let reinvest = Libs.ResourcesLib.anotherUserRes("reinvest", tgid)
reinvest.add(parseFloat(amount))
Bot.sendMessage(
  "*Balance añadido* \n👤 User: " + tgid + "\n💰 Amount:" + amount
)

