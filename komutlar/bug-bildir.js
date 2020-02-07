const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("675351693977714708")
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://discordapp.com/channels/672020749518635019/672116206677000192/672401811201851392")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp bize yardım edebilirsiniz .',
  usage: 'bug-bildir'
}