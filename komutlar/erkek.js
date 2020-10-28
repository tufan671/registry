const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
// 12. SATIRDA 2. ROL VAR
  
//------------------------------------KANALLAR-----------------------------------\\ STG
const tag = "Ψ"; // TAGINIZ (BAŞA GELECEK) 
  
const kayıtlı = message.guild.roles.find(r => r.id === "757712858846068848"); // ERKEK ROLÜNÜN İDSİ
  
const unregister = message.guild.roles.find(r => r.id === "757712860565733437"); // UNREGİSTER ROLÜNÜN İDSİ
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "757713070343717007"); // KAYIT KANALININ İDSİ
  const genelchat = message.guild.channels.find(c => c.id === "757713019336786101"); // GENEL SOHBET KANALININ İDİSİ
  const dogrulandi = client.emojis.find(emoji => emoji.name === "kalp"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM)
  if(!message.member.roles.array().filter(r => r.id === "757712849106895049")[0]) { // KAYIT YAPAN ROLÜN İDSİ
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("Kayıt Yapabilmek İçin `Ψ Register Hummer` Rolüne Sahip Değilsiniz.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const stg = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    stg.removeRole(unregister)
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    stg.removeRole(unregister)
    
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`<a:tac1:757887976423555172> Kayıt Tamamlandı !`)
    .addField( `<a:kalp4:766309268893728789> Kayıt Eden`, `<@${message.author.id}>`) 
    .addField( `<a:klbk:766539300459773953> Verilen Rol`, `<@&${kayıtlı.id}>`) 
    .addField( `<a:yldz11:766309269301624844> Alınan Rol`, `<@&${unregister.id}>`)
    .addField( `<a:yldz:721485929067315553> Yeni İsmin`, `\`${tag} | ${nick} | ${yas}\``) 
    .setFooter(`${message.author.username} Tarafından Kayıt Yapıldı`)
    .setColor("0x277ecd")
    log.send(embed)
    message.react(dogrulandi)
    
        const agla = new Discord.RichEmbed()
        genelchat.send(`<@${stg.user.id}> <a:211:730828344572248114> Aramıza Hoş Geldin, Keyifli Vakitler Geçirmeni Dileriz.`)      

//------------------------------------------------MESAJ-----------------------------------------------\\       STG

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e", "boy", "man"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   