/*CMD
  command: trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1290520197) {
  let res = Libs.ResourcesLib.userRes("balance")
  Bot.sendMessage(
    "📤 _How many TRX you want to withdraw?_\n\n_Minimum: 1 TRX_" +
      "\n" +
      "_Maximum: _" +
      res.value().toFixed(8) +
      "\n" +
      " _Maximum amount corresponds to your balance_" +
      "\n\n" +
      "➡️ _Send now the amount of  you want to withdraw_"
  )
  Bot.runCommand("auto")
} else {
  var daily_earnBT8 = User.getProperty("daily_earnBT")
  if (daily_earnBT8) {
    var duration_in_hours = (new Date() - daily_earnBT8) / 1000 / 60 / 60
  } else {
    // It is the first time!
    var duration_in_hours = 99
  }
  if (duration_in_hours >= 0) {
    User.setProperty("daily_earnBT", new Date(), "datetime")

    let res = Libs.ResourcesLib.userRes("balance")
    if (res.value() < 5) {
      Bot.sendMessage(
        "❌ Minimum amount to withdraw is 5 TRX.\nYour Balance is " +
          res.value().toFixed(5)
      )
    } else {
      Bot.sendMessage(
        "📤 _How many TRX you want to withdraw?_\n\n_Minimum: 1 TRX_" +
          "\n" +
          "_Maximum: _" +
          res.value().toFixed(8) +
          "\n" +
          " _Maximum amount corresponds to your balance_" +
          "\n\n" +
          "➡️ _Send now the amount of  you want to withdraw_"
      )
      Bot.runCommand("auto")
    }
  } else {
    duration_in_hours = Math.abs(duration_in_hours - 0)
    var hours = Math.floor(duration_in_hours)
    var minutes = Math.floor((duration_in_hours - hours) * 60)
    var seconds = Math.floor(((duration_in_hours - hours) * 60 - minutes) * 60)
    Bot.sendMessage(
      " *📵 Sorry but you can only withdraw once per day, try again in the next*\n\n✅ _⏳ " +
        hours +
        " hours :" +
        minutes +
        " minutes :" +
        seconds +
        " seconds_"
    )
  }
}

