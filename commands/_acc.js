/*CMD
  command: /acc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance")
//acc
var deposit = Libs.ResourcesLib.userRes("deposit")
Bot.sendMessage(
  "*➕ Investment Accrual : *" + 1.2 * deposit.value().toFixed(8) + " TRX"
)
deposit.add(-deposit.value())
res.add(deposit.value())


Bot.run({
  command: "/stope",
  run_after: 1 * 1 * 1 * 1
})

