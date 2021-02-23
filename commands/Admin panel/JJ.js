/*CMD
  command: JJ
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Send monto 
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage(
  "*Balance cambiado* \n👤 User: " + tgid + "\n💰 Amount:" + amount
)

