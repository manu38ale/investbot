/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 📊 statistic
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit")
let withdraw = Libs.ResourcesLib.userRes("withdraw")
let currency = "TRX" // Set Your Currency
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let re = Libs.ResourcesLib.anotherChatRes("re", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage(
  "*📊 Bot Live Statistics*" +
    "\n\n👤* Total User:* " +
    tota.value().toFixed(0) +
    "\n\n*➕ Total Investments:* " +
    depo.value().toFixed(4) +
    " *TRX*" +
    "\n\n*🔄 Total Reinvests:* " +
    re.value().toFixed(4) +
    " *TRX*" +
    "\n\n*💳 Total Withdrawn:* " +
    userPayment.value().toFixed(4) +
    " *TRX*"
)

