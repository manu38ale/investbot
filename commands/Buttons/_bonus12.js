/*CMD
  command: /bonus12
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ "+wait_hours +" h " + wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.0234)
User.setProperty("history", "0.0234", "integer")
Bot.sendMessage(
  "*🎁 Congrats , you Received 0.0234TRX*"
)
