/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let result = options.body.result
let error = options.body.error
let wallet = User.getProperty("wallet")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (error == "ok") {
  Bot.sendMessage(
    "*✅ Withdrawal Requested*\nYour payment is being processed automatically right now!\n\nSecured Payment ID:\n*" +
      result.id +
      "*\n_You will receive TXID soon _\n\n*💳 Transaction Details:*\n" +
      result.amount +
      " *TRX* to the wallet\n" +
      wallet
  )
} else {
  Bot.sendMessage(error)
}

