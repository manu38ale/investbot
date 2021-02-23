/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
let value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}

if (message < 1) {
  Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "🚫You can withdraw maximum: " + balance.value().toFixed(6) + " TRX"
    )
  } else {
    balance.add(-message)
    withdraw.add(+message)
    userPayment.add(+message)
    Libs.CoinPayments.apiCall({
      fields: {
        cmd: "create_withdrawal",
        amount: message, // input your withdrawal amount
        currency: "TRX", //currency for withdrawal
        address: wallet,
        auto_confirm: 1
      },
      onSuccess: "/onSuccess"
    })
    let msg =
      "*💵 New Withdrawal 🤑🤑*" +
    "\n \n" + "💠Status: Paid" + "\n*💠Name: *" +info+ "\n*💠Withdrawal Amount:* " + message + "* TRX! *" + "\n" + "\n*🔘 Transaction ID: *\n ["+ wallet + "]" +"(https://tronscan.org/#/address/" +wallet+ "\n)"
    ;("\n")
    "\n*💳 User Address*:\n" +
      wallet +
      "*You will receive your withdrawal request instantly, Thank you❤️!*" +
      "\n\n" +
      "@tronuniversepayments"
    Api.sendMessage({
      chat_id: "@tronuniversepayments",
      text: msg,
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
  }
}
var history =
  "*📤 Your Withdrawal*" +
  "\n \n *👤 User : *" +
  info +
  "\n\n *💰 Amount : * " +
  message +
  "* TRX *" +
  "\n" +
  "\n*💳 User Address*:\n" +
  wallet +
  "" +
  "\n" +
  "\n" +
  "*🕓 Server Time:*" +
  "\n" +
  time +
  "" +
  "\n\n" +
  "*You will receive your withdrawal request instantly, Thank you❤️!*" +
  "\n\n" +
  " @tronuniversepayments"

let history2 = Libs.ResourcesLib.userRes("history2")
if (history2.value() < 1) {
  history2.set(1)
  User.setProperty("data1", history, "text")
  return
}
if (history2.value() < 2) {
  history2.set(0)
  User.setProperty("data2", history, "text")
  return
}
if (history3.value() < 3) {
  history3.set(0)
  User.setProperty("data3", history, "text")
  return
}
