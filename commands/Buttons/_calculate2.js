/*CMD
  command: /calculate2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons

  <<ANSWER
*🖥 Profit Calculator 🖥

Calculate here your incoming profits!

Send the amount of TRX you want to invest*
  ANSWER
  keyboard: Back 🔙
  aliases: 💡calculator
CMD*/

let msg = parseFloat(message)

let daily = msg * 1.0
let profit = msg * 0.2
let total = msg * 1.2
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 120% for 24h_\n\n*Each Added Time:* 5% every hours\n\n_⏱ Your first payment will arrive after 24 hours!_\n\n*💰 After 24 hours: *" +
    total.toFixed(9) +
    " TRX\n_❓ You will get back Your profit than what you invested after just 24 h_\n\n*🔥 Total Profit: *" +
    profit.toFixed(8) +
    " TRX"
)


