/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons
  answer: Please input reply
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "📨 *Your message has received a reply from admin:* "+message;
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
