/*CMD
  command: /onIncomebtc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  // for security we need to check
  // that this command runned only by lib
  // user can not run command with options
  return
}

let wallet = options.address
let currency = options.currency
let amount = options.amount

let fiat_amount = options.fiat_amount
let fiat_currency = options.fiat_coin

let fee = options.fee
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"

let txn_id = options.txn_id
let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

// see another fields by
//Bot.sendMessage(inspect(options));
if(currency!=="TRX"){
Bot.sendMessage("Thanks for Deposit, we appreciate you")
return
 }
if (amount >= 1 && amount <= 10000) {
  Api.sendMessage ({chat_id: "@DragonTRON_Payments", text: "*💴 New Investment *" + "\n\n💠Status: Confirmed" +
    "\n *💠Investment Amount * " +
amount + "* TRX * \n *💠Name:* " + info + "\n * \n🔘 Transaction ID: *" + "\n ["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)" + "\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
  let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
  let deposit = Libs.ResourcesLib.userRes("deposit")
  deposit.add(amount)
  depo.add(amount)
  User.setProperty("minertrx", amount, "text")
  Bot.runCommand("minertrx")
  let lilo = Bot.getProperty("total")
  let total = lilo + amount
  Bot.setProperty("total", total, "integer")
  let referrer = Libs.ReferralLib.currentUser.attractedByUser()
  let bonus = amount * 0.05

  if (referrer) {
    let referrerRes = Libs.ResourcesLib.anotherUserRes(
      "balance",
      referrer.telegramid
    )
    referrerRes.add(bonus)
    let refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
    refcom.add(bonus)
    Bot.sendMessageToChatWithId(
      referrer.telegramid,
      "*➕ Referral Deposit:* " + bonus.toFixed(8) + "*TRX*"
    )
  } else {
    Bot.sendMessage("Check Payment Channel: @tronuniversepayments")
  }
}
