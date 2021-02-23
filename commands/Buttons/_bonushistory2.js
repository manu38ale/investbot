/*CMD
  command: /bonushistory2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var history = User.getProperty("history")
if(!history){
Bot.sendMessage("✨ `No Bonus History found`");
}else{
Bot.sendMessage("💡 You recently claimed a bonus in the last 24 hours!\nIt has been successfully added to your withdrawable balance!\n\n💰 Amount: " + history + "TRX\nStatus: ✅Added");
}
