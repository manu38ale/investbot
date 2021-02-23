/*CMD
  command: /depo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📥deposit
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "@"+user.username,
  onSuccess: "/onWalletCreationdoge",
  onIncome: "/onIncomedoge"
});
