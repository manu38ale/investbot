/*CMD
  command: /complete
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

                                                                                                                    

var result = JSON.parse(data.content);
var TRX = result.market_data.current_price.usd
var deposit = Libs.ResourcesLib.userRes("deposit");
var reinvest = Libs.ResourcesLib.userRes("reinvest");
var wallet = User.getProperty("wallet");
var re = Libs.ResourcesLib.anotherChatRes("re", "global")
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
if(data.message < 1 ){
Bot.sendMessage("❌ You can not reinvest right now: You need at least 1 TRX to reinvest!")
}else{
if(data.message > balance.value()){
Bot.sendMessage("🚫Insufficient balance\n\nYour balance:"+balance.value().toFixed(6)+" TRX")
}else{
Bot.sendMessage("*✅ Reinvest Successful*\n\n💳 *Details* :\n 💰*Amount* : "+data.message+" *TRX*\n💼 *Your wallet* : "+wallet+"")
balance.add(-data.message)
deposit.add(+data.message)
re.add(+data.message)
reinvest.add(+data.message) 
Api.sendMessage({chat_id: "@tronuniversepayments", text: "*♻️ New Reinvest *\n*💰 Amount : *" +data.message+ "* TRX *"+"\n*👤 User : * " + info  ,parse_mode : "Markdown" , disable_web_page_preview: true
})
}
}
