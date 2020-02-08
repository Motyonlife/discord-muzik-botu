exports.run = (client,message) => {
var xir = client.emojis.get("675372467350667294")
message.channel.send('✨∞ ilhan♥Melisa ∞✨')
  
}
  
  module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['im', 'ilhanmelisa'],
  permLevel: 0 
};

module.exports.help = {
  name: 'im', 
  description: '∞ ilhan♥Melisa ∞.',
  usage: 'im'
};