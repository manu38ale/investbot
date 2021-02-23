/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 🚫 cancel, 🏠 home, ⬅️ return, ✅ i have joined
CMD*/

Api.getChatMember({
  chat_id: "@tronuniversepayments",
  user_id: user.telegramid,
  on_result: "next"
})
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
tota.add(1)
function onAttracted(refUser) {
  // access to Bonus Res of refUser
  let res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  res.add(0.0) // add 0.05000 bonus for friend
  var refchatid = refUser.chatId
  Bot.sendMessageToChatWithId(refchatid, "✔️ You have a new Referral")
}

Libs.ReferralLib.currentUser.track({
  onAtractedByUser: onAttracted
})

