exports.run = (client,message) => {
var xir = client.emojis.get("675372467350667294")
message.channel.send('✨ Botu davet etmek için: https://discordapp.com/oauth2/authorize?client_id=675072108232966154&scope=bot&permissions=805314622')
  
}
  
  module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['davet', 'invite'],
  permLevel: 0 
};

module.exports.help = {
  name: 'davet', 
  description: 'Botun davet linkini atar.',
  usage: 'davet'
};