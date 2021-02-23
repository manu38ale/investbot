/*CMD
  command: ReferLink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Typing
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.run({command:"/referlink",
run_after:0.9,
chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )
