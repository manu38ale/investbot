/*CMD
  command: /bonushistory
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Must Join
  answer: 
  keyboard: 
  aliases: 🎁bonus history
CMD*/

Api.getChatMember({
  chat_id: "@tronuniversepayments",
  user_id: user.telegramid,
  on_result: "/checkMember13"
})
