/*CMD
  command: /opsk
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*👩‍🚀User Details\n\n\ Name: "+user.first_name+"\n\n Username:- "+user.username+" \n\n\ User ID :*")
