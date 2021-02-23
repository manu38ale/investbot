/*CMD
  command: /setid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Typing
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < 1) {
  Bot.sendMessage(
    "*❌ You can not reinvest right now:* " +
      "You need at least 1 TRX to reinvest!"
  )
} else {
  Bot.sendMessage(
    "♻️ _How many TRX you want to Reinvest?_\n\n_Minimum: 1 TRX_" +
      "\n" +
      "_Maximum: _`" +
      balance.value().toFixed(8) +
      "`\n" +
      " _Maximum amount corresponds to your balance_" +
      "\n\n" +
      "➡️ _Send now the amount of  you want to Reinvest_"
  )
}
Bot.runCommand("/complete")

