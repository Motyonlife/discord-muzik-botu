exports.run = (client,message) => {
message.channel.send('✨ilhan♥Melisa✨')
  
}
  
  module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['im', 'ilhanmelisa', 'mi', 'melisailhan'],
  permLevel: 0 
};

module.exports.help = {
  name: 'im', 
  description: 'ilhan & Melisa.',
  usage: 'im'
};