/*CMD
  command: /home4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let key = [{ title: "♻️ Reinvest", command: "/setid" }]
Bot.sendInlineKeyboard(
  key,
  "♻️ *Reinvest here your profits!*\n\n💵 We offer up to 1 different Investment Plans, choose the best for you!\n\n1️⃣ From *1 TRX to 10000 TRX*\n_120.00% daily for 1 day\n120.00% every 24 hours_"
)

