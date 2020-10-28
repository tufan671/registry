const Discord = require('discord.js');
const db = require("quick.db");
exports.run = async(client, message, args) => {
  
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu Komutu Kullanabilmek İçin \`Kullanıcıları Yasakla\` Yetkisine Sahip Olmalısın').then(m => m.delete(10000))
  if(!args[0]) return message.reply('Kaldırılacak banlı kullanıcının IDsini girmelisin. (Tüm banları kaldırmak için toplu yazmalısın)')
    if(args[0] === "toplu") {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın').then(m => m.delete(10000))
        message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
            message.guild.unban(user)
          });
        });
        message.channel.send(`**Sunucudaki banların tümü başarıyla kaldırılıyor...**`)
      return
    }
    if(isNaN(args[0])) return message.reply('Banı kaldırılacak kullanıcının ID numarasını girmelisin!').then(x => x.delete(5000))
    try {
      message.guild.unban(args[0])
      client.fetchUser(args[0]).then(x => message.channel.send(new Discord.RichEmbed().setAuthor('Ban Kaldırıldı').setTimestamp().setColor("GREEN").setFooter(message.guild.name, message.guild.iconURL).setDescription(`**Banı Kaldırılan:** ${x.tag} \n**Banı Kaldıran:** ${message.author} | ${message.author.id}`)))
    } catch(err) { message.reply('Belirtilen ID numarasının banı kaldırılamadı!').then(x => x.delete(5000)) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['un-ban', 'ban-kaldır'],
  permLevel: 0,
};

exports.help = {
  name: 'unban',
  description: 'Sunucudan ban kaldırmanızı sağlar.',
  usage: 'unban id/toplu',
};