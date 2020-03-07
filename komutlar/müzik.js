const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('BLUE')
    .setAuthor(`Mechanic | Müzik Komutları`, client.user.avatarURL) 
      .setDescription('**[]()**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`çal`, `kapat`, `duraklat`, `devam`, `ses (1-100)`, `sıra`, `çalan`, `geç`, `müzikdetay`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
};

exports.help = {
    name: 'komutlar',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};