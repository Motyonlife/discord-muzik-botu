const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ Bu komutu kullanabilmen için: Mesajları Yönet yetkisine sahip olman gerek!");
  if (!args[0]) return message.channel.send(" 🗑 !clear [Silinecek mesaj sayısı] Şeklinde yazmanız gerekiyor!");
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`✈️ ${args[0]} tane mesaj havaya uçtu!`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear','temizle','sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};