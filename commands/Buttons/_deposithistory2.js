/*CMD
  command: /deposithistory2
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
let data1 =
User.getProperty("dat8")
let data2 =
User.getProperty("dat9")
let msg =""
if(!data1){
}else{
msg+=data1+"\n\n"
}
if(!data2){
}else{
msg+=data2
}

if(!data1){
Bot.sendMessage("✨ No Deposit investments found");
}else{
Bot.sendMessage(msg);
}
