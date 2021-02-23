/*CMD
  command: minertrx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var deposit = Libs.ResourcesLib.userRes("deposit")
var balance = Libs.ResourcesLib.userRes("balance")
balance.growth.add({
  value: 1.20 * deposit.value(),
  interval: 1 * 60 * 60 * 24
})
//acc
Bot.run({
  command: "/acc",
  run_after: 1 * 60 * 60 * 24
})
