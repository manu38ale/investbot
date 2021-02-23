/*CMD
  command: /start2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.run({command:"/starttype",
run_after:5,
chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )
