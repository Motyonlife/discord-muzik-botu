const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» 🎼Müzik Komutları')
.setTimestamp()
.addField('» -Çal- Müzik Açar', '!çal ')
.addField('» -Sıra- Şarkı Kuyruğunu Gösterir', '!sıra')
.addField('» -Devam- Şarkıya Devam Eder', '!devam')
.addField('» -Duraklat- Şarkıyı Durdurur', '!duraklat')
.addField('» -Kapat- Şarkıyı Kapatır', '!kapat')
.addField('» -Ses- Müziğe Ses Ve Bass Eklersiniz', '!ses 1/100')
.addField('» -Çalan- Çalan Şarkının Bilgisini Verir', '!çalan')
.addField('» -Geç- Şarkıyı Geçersiniz', '!geç')
.setFooter('XQ Müzik Menü', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['müzik','muzik'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};