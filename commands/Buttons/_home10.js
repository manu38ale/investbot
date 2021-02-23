/*CMD
  command: /home10
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons

  <<ANSWER
📞 *You are now in direct contact with our Administrator*
You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!
  ANSWER
  keyboard: Back 🔙
  aliases: 📞 support
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("Message was sended to admin");
