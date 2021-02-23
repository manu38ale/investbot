/*CMD
  command: OpenHome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  Bot.sendKeyboard(
    "🕺Balance,\n 📥Deposit,💳 Withdraw,\n♻️ Reinvest,💻 Details, 🎁 Bonus,\n👬 Referral,📞 Support, 📒History ,\n💡Calculator,💼 TRX Wallet,📊 Statistic,\nAdmin Menu",
    "❤️ *Welcome* Home Admin[" +
      user.username +
      "](tg://user?id=" +
      user.username +
      ")"
  )
} else {
  Bot.sendKeyboard(
    "🕺Balance,\n 📥Deposit,📰,💳 Withdraw,\n♻️ Reinvest,💻 Details, 🎁 Bonus,\n👬 Referral,📞 Support, 📒History ,\n💡Calculator,💼 TRX Wallet,📊 Statistic,",
    "❤️ *Welcome* [" + user.username + "](tg://user?id=" + user.username + ")"
  )
} 
