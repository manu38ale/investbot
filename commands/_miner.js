/*CMD
  command: /miner
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
var deposit = Libs.ResourcesLib.userRes("deposit")
var amount = User.getProperty("Investment");
amount = parseFloat(amount);

res.add(message*1);
deposit.add(-message);

if(amount >= 1 && amount <= 199)
{ var hourly = amount*0.0025;
var daily = amount*0.06;
var profit = amount*1.05;
var secs_in_hour = 1*60*60;
res.growth.add({
  value:hourly,
  interval:3600,
  max:profit
}); }
if( amount >= 200 && amount <= 499 )
{var hourly = amount*0.0025;
var daily = amount*0.06;
var profit = amount*2.0;
var secs_in_hour = 1*60*60;
res.growth.add({
  value:hourly,
  interval:3600,
  max:profit
}); }
if( amount >= 500 && amount <= 5000) 
{ var hourly = amount*0.0025;
var daily = amount*0.06;
var profit = amount*3.0;
//Max value: 1
var secs_in_hour = 1*60*60;
res.growth.add({
  value:hourly,
  interval:3600,
  max:profit
}); }
