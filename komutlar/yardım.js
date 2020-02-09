const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '!'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('🎲XQ Yardım Menüsü')
  .setDescription(`:white_small_square: \`${p}yardım eğlence\` = Eğlence Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım yetkili\` = Yetkili Komutlarını Listeler. \n\n:white_small_square: \`${p}müzik\` = Müzik Komutlarını Listeler.`)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('🌈Eğlence Komutları')
  .setDescription(`:white_small_square: \`${p}mcödül\` = Send a Minecraft Achievement image to the channel \n:white_small_square: \`${p}servericon\` = Serverin iconunu gösterir.  \n:white_small_square: \`${p}yaz\` = İstediğiniz şeyi bota yazdırır. \n:white_small_square: \`${p}doğrulukcesaret\` = Doğruluk cesaret oynarsınız. \n:white_small_square: \`${p}savaş\` = İstediğiniz bir kişi ile düello atarsınız! \n:white_small_square: \`${p}youtube\` = !youtube "Aramak İstediğiniz Şey" İsterseniz bir komut hakkında yardım eder. :white_small_square: \`${p}öp\` = Öpüceğin birisini etiketlemelisin. :white_small_square: \`${p}sarıl\` = Sarılacağın birisini etiketlemelisin. :white_small_square: \`${p}havadurumu\` = hava durumunu gösterir.`)
  message.channel.send(embed)
  }
  if (arg === 'müzik' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('🎼Müzik komutları:')
      .setDescription(`:white_small_square: \`${p}çal\` = Bot İstediğiniz Müziği Açar. \n:white_small_square: \`${p}kapat\` = Bot Müziği Durdurur. \n:white_small_square: \`${p}devam\` = Bot Müziği Devam Ettirir. \n:white_small_square: \`${p}ses\` = ``!ses (1-100) Müziğin Ses Seviyesini Ayarlar.`)
      return message.channel.send(embed);
}
   if (arg === 'yetkili' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('🔨Yetkili komutları:')
      .setDescription(`:white_small_square: \`${p}clear\` = Belirlenen miktarda mesajı siler. \n:white_small_square: \`${p}mute\` = Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar. \n:white_small_square: \`${p}reklam-taraması\` = Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar. \n:white_small_square: \`${p}oylama\` = Oylama yapmanızı sağlar. \n:white_small_square: \`${p}çekiliş\` = Sunucuda çekiliş yapmanı sağlar.`)
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