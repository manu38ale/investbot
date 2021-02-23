/*CMD
  command: /bonus2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Must Join
  answer: 
  keyboard: 
  aliases: 🎁 bonus
CMD*/

Api.getChatMember({
  chat_id: "@tronuniversepayments",
  user_id: user.telegramid,
  on_result: "/checkMember10"
})
