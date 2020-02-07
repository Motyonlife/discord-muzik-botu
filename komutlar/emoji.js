exports.run = (client,message) => {
var xir = client.emojis.get("675372467350667294")
message.channel.send('sss')
  
}
  
  module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['davet', 'invite'],
  permLevel: 0 
};

module.exports.help = {
  name: 'davet', 
  description: 'Test iconunu gösterir',
  usage: 'davet'
};