
const Moment = require('moment')
const Discord = require('discord.js')
module.exports = client => {
  
  const aktiviteListesi = [
    
    '✦ Yıkılmaz',
    '✦ Yıkılmaz',
    '✦ Yıkılmaz'
  ]//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 4000)
}
 

//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert