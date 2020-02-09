const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Öpüceğin birisini etiketlemelisin')
  if (user.id === message.author.id) return message.reply('Kendini Öpemessin olum sakin.');

    
  if ( message.react('😍')) {
      var gif = [
      '', '', '', '', '', '', ''];
      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react('😍')) {
    const op = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}>'ı öptü 💋`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'öp',
  usage: 'öp'
};