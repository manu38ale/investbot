/*CMD
  command: /joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: ✅ i have joined
CMD*/

Api.getChatMember({
  chat_id: "@Phoenix_Admin",
  user_id: user.telegramid,
  on_result: "next1"
})

