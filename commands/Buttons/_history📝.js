/*CMD
  command: /history📝
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data1 =
User.getProperty("data1")
var data2 =
User.getProperty("data2")
var data3 =
User.getProperty("data3")
var msg =""
if(!data1){
}else{
msg+=data1+"\n\n"
}
if(!data2){
}else{
msg+=data2+"\n\n"
}
if(!data3){
}else{
msg+=data3+"\n\n"
}
if(!data1){
Bot.sendMessage("`✨No Transaction Found!`");
}else{
Bot.sendMessage(msg);
}
