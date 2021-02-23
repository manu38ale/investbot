/*CMD
  command: /onWalletCreationdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));

let wallet = options.result.address;

Bot.sendMessage("*➕ Welcome! Here you can start a new investment!*\n\n💵 We offer a single Investment plan, able to offer you the best profit!\n\n➡ Our plan starts from 5 DOGE\n\n⏱ Profit will be credited 130% every 24 hours, for 1 days: 130% daily!\n📆 Paid on Every Day") 

Bot.sendMessage("✋️*Hold on..... generating your deposit address...*")
Bot.sendMessage("⚠️ If you send less than 5 DOGE, your deposit will be cancelled!\n\n✅ Send the amount you want to invest to the following address:")

Bot.sendMessage("`" + wallet + "`")
