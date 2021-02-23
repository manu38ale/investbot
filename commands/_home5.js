/*CMD
  command: /home5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💼 trx wallet
CMD*/

let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "💼 Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set TRX wallet is:* `not set`\n\n💹It will be used for *all future withdrawals.*");
}else{
var button = [
[{title : "💼 Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set TRX wallet is:* \n `"+wallet+"`\n\n💹It will be used for *all future withdrawals.*");
}
