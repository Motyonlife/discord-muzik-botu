const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('BLUE')
    .setAuthor(`Duu6 | Müzik Komutları`, client.user.avatarURL) 
      .setDescription('**[]()**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`çal`, `kapat`, `duraklat`, `devam`, `ses (1-100)`, `sıra`, `çalan`, `geç`,            Detaylı müzik yardım için `!müzikdetay` yazınız.')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'müzik',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};