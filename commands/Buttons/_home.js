/*CMD
  command: /home
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 🕺balance
CMD*/

let profit = Libs.ResourcesLib.userRes("profit")
let reinvest = Libs.ResourcesLib.userRes("reinvest")
let deposit = Libs.ResourcesLib.userRes("deposit")
let res = Libs.ResourcesLib.userRes("balance")
let withdraw = Libs.ResourcesLib.userRes("withdraw")
let refcom = Libs.ResourcesLib.userRes("refcom")
let depositBTT = Libs.ResourcesLib.userRes("deposit")
let resBTT = Libs.ResourcesLib.userRes("deposit")
let WithdrawBTT = Libs.ResourcesLib.userRes("deposit")
let reinvestBTT = Libs.ResourcesLib.userRes("deposit")
let profitBTT = Libs.ResourcesLib.userRes("deposit")
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
let info =
  "[" + user.telegramid + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

Bot.sendMessage(
  "*👤 Account Balance:*  " +
    inf +
    "\n\n*➖ Withdrawable Balance:*" +
    "\n" +
    res.value().toFixed(8) +
    " *TRX*" +
    "\n\n💳 *Active Investments:* " +
    "\n" +
    deposit.value().toFixed(8) +
    " *TRX*" +
    "\n\n♻️* Active Reinvestments:*" +"\n" + reinvest.value().toFixed(8) +"*TRX*" +"\n\n💰*Total Profit:* " +
    "\n" +
    profit.value().toFixed(8) +
    " *TRX*" +
    "\n\n🎁 *Total Affiliate Bonus:*" +
    "\n" +
    refcom.value().toFixed(8) +
    " *TRX*" +
    "\n\n*💸Total Withdrawn:*" +
    "\n" +
    withdraw.value().toFixed(8) +
    " *TRX*",
  { is_reply: true }
)
