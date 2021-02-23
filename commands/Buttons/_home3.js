/*CMD
  command: /home3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 👬 referral
CMD*/

if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("Tron_Universe_Bot", "bot")
let TRX = 12.5 * refcom.value()

let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [
  [
    { title: "📑 Refs List", command: "/list" },
    { title: "🏆 Top 10", command: "/tops" }
  ]
]

Bot.sendInlineKeyboard(
  key,
  "🏆 *Refferrals System*" +
    "\n\n" +
    "1 Level:" +
    "\n" +
    "*🥇 Level → 5%*" +
    "\n\n" +
    "*🗣 Referral direct bot url:*" +
    "\n" +
    bot +
    "\n\n" +
    "*🗣 Referral Statistics*" +
    "\n\n" +
    "1° Level: " +
    reflist.length +
    " users" +
    "\n\n" + 
    "🗣 Referral Deposits: " +
    TRX.toFixed(5) +
    " *TRX*" +
    "\n" +
    "♾ Earnings: " +
    refcom.value().toFixed(5) +
    " *TRX*",
  { is_reply: true }
)

