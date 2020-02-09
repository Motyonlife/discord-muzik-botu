const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('XQ Bot')
.setTimestamp()
.addField('Kuruluş Yılı', '2020')
.addField('Bot Sahibi', '<@674212659968606208>')
.addField('Neden Biz?', 'Gelişmiş Özellikli Botumuz Var ')
.addField('Davet Linklerini Nasıl Görebilirim?', '!davet')
.addField('Hedefimiz Nedir?', '150 Sunucu Büyük Hedefim')
.setFooter('XQ - Bot - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['botinfo', 'bot', 'info'], 
  permLevel: 0 
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};