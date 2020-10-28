const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------STRIGA ÇOK TATLI BİRİSİ BEN OLSAM VİDEOLARINA LİKE ATAR KANALINA ABONE OLUR VİDEOSUNA YORUM YAPARDIM BU ARADA---------------------------------\\





//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('763559117074989066'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
    member.addRole('763559117074989066'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
  });
  
  //-----------------------GİRENE-ROL-VERME----------------------\\     STG





//-----------------------sthg----------------------\\     STG

client.on("guildMemberAdd", member => {  
    var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:757899705891029073>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '1': `<a:bir:757887984757506109>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '2': `<a:iki:757887984111583232>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '3': `<a:uc:757887984896049213>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '4': `<a:drt:757887984920952872>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE                        
    '5': `<a:be:757887983759130645>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '6': `<a:alt:757887982165557377>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '7': `<a:yedi:757887981666435073>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '8': `<a:sekiz:757887981863436318>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '9': `<a:dokuz:757887608583094334>`}[d]; // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
      })
    }
    const kanal = "757713070343717007"; // HOŞ GELDİN MESAJINI NEREYE ATACAKSA O KANALIN İDSİNİ GİRİN
    let user = client.users.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed()
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = ' **Hesap Güvenilir Değil**'
  if (kurulus > 1296000000) kontrol = ' **Hesap Güvenilir**'
    moment.locale("tr");
    let stg = client.channels.get(kanal);
  stg.send("<a:tac1:757887976423555172> ** Hoşgeldin! " + member + " Seninle "+ üyesayısı +" Kişiyiz.**  \n\n<a:kalp4:766309268893728789>  **Müsait olduğunda Teyit Odalarından Birine Geçip Kaydını Yaptırabilirsin..**  \n\n<a:klbk:766539300459773953>**<@&757712849106895049> seninle ilgilenicektir.**\n\n<a:yldz11:766309269301624844>  **Hesabını" + moment(member.user.createdAt).format(" YYYY DD MMMM dddd (hh:mm:ss) ") +  " Tarihinde Oluşturmuşsun.** \n\n<a:yldz:721485929067315553>  **Hesap Durumu:** "  + kontrol + "   \n\n<a:sar:721485755154694214>  **Tagımızı alarak `Ψ` bize destek olabilirsin.** \n\n"
    );
  });
  
//-----------------------sthg----------------------\\     STG
  

















//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.get("") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.addRole(rol)
   member.removeRole(kayıtsız)
member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

    
   }
        else {

        }  
    });


//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG











//-----------------------TAG-ROL----------------------\\     STG

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "Ψ"  ; // TAGINIZ & SEMBOLÜNÜZ NEYSE ONU "TIRNAKLARIN ARASINA" YAZIN
    let sunucu = "764225317303877652"; // SUNUCUNUZUN İDSİNİ "TIRNAKLARIN ARASINA" YAZIN
    let kanal = "764862313022619648" // HANGİ KANALA KİMİN TAGI ALIP ÇIKARDIĞINI YAZMASI İÇİN "TIRNAKLARIN ARASINA" LOG - KANAL İDSİNİ YAZIN
    let rol = "764583055934619648"; // HANGİ ROLÜ VERECEKSE "TIRNAKLARIN" ARASINA İDSİNİ GİRİN
    if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(kanal).send(`${newUser} tagını aldı`)
      client.guilds.get(sunucu).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
      client.channels.get(kanal).send(`${newUser} Tagını Çıkardı`)
    }

  }
})

//-----------------------TAG-ROL----------------------\\     STG
