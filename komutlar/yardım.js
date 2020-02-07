const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '!'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('XQ Yardım Menüsü')
  .setDescription(`:white_small_square: \`${p}yardım eğlence\` = Eğlence Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım müzik\` = Müzik Komutlarını Listeler.`)
  message.channel.send({embed})
  }
   if (arg === 'Eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence Komutları')
  .setDescription(`:white_small_square: \`${p}mcödül\` = Send a Minecraft Achievement image to the channel \n:white_small_square: \`${p}servericon\` = Serverin iconunu gösterir.  \n:white_small_square: \`${p}yaz\` = İstediğiniz şeyi bota yazdırır. \n:white_small_square: \`${p}doğrulukcesaret\` = Doğruluk cesaret oynarsınız.`)
  message.channel.send(embed)
  }
  if (arg === 'Müzik' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Müzik komutları:')
      .setDescription(`:white_small_square: \`${p}oynat\` = Bot İstediğiniz Müziği Açar. \n:white_small_square: \`${p}durdur\` = Bot Müziği Durdurur. \n:white_small_square: \`${p}devam\` = Bot Müziği Devam Ettirir. \n:white_small_square: \`${p}ses\` = Müziğin Ses Seviyesini Ayarlar.`)
      return message.channel.send(embed);
}
   if (arg === 'Yetkili' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('Yetkili komutları:')
      .setDescription(`:white_small_square: \`${p}otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`${p}sayaç\` = Sunucu için sayaç ayarlar.`)
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};