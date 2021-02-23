/*CMD
  command: /itsmypasssssssbsjdjdvsjsjsvdhiddjlabacs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: 📛 Stop, Este Menu Es Solo para la administracion, Introduce tu clave :
  keyboard: 
  aliases: 
CMD*/

if (message == "PhoenixAdmin") {
  Bot.sendKeyboard(
    "🎉 Saldo 🎉,📡 Canal 📡,\n📲 Mensaje 📲,⭐ Verificar ⭐,\nLogin\nBack To Menu",
    "Bienvenido 🎉"
  )
} else {
  Bot.sendMessage("🙄 Clave Incorrecta")
}

