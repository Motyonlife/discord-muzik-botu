const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} DAVET SİSTEMİ `)
        .setDescription(`📥**Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=675072108232966154&scope=bot&permissions=805314622%27) \n🔶**Destek Sunucusu İçin** [TIKLA](https://discord.gg/GVzbs6s)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite', 'davet', 'davetet'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};