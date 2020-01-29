const Discord = require('discord.js');
var isim;
var yas;
exports.run = (client, message, args) => {
    if (message.author.bot) return;
    let filter = m => m.author.id === message.author.id;
    message.delete();
    message.guild.createChannel(`başvuru-${message.author.username}`, 'text').then(kanal => {
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("BAN_MEMBERS")) {
                kanal.overwritePermissions(role, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true
                }).catch(err => console.log(err))
            }
        })
        kanal.overwritePermissions(message.author.id, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true
        }).catch()
        kanal.overwritePermissions(message.guild.id, {
            VIEW_CHANNEL: false
        })
        kanal.send(message.author)
        const ilkmesaj = new Discord.RichEmbed()
            .setTitle("BAŞVURU")
            .setColor("BLUE")
            .setDescription("İsminiz ne?")
        kanal.send(ilkmesaj).then(mesaj => {
            kanal.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
            }).then(collected => {
                isim = collected.first().content;
                collected.first().delete();
                const ikinci = new Discord.RichEmbed()
                    .setTitle("BAŞVURU")
                    .setColor("BLUE")
                    .setDescription("Kaç yaşındasınız?")
                mesaj.edit(ikinci).then(mesaj => {
                    kanal.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                    }).then(collected => {
                        yas = collected.first().content
                        collected.first().delete();
                        kanal.delete()
                        const form = new Discord.RichEmbed()
                            .setTitle(`${message.author.tag} - Başvuru Formu`)
                            .addField("Kullanıcı ID", message.author.id)
                            .addField("İsim", isim)
                            .addField("Yaş", yas)
                        message.guild.channels.get("672116206677000192").send(form)
                        message.author.send("Başvurunuz yetkililere gönderildi")
                    })
                })
            })
        })
    })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['başvur'],
    permLevel: 0
};

exports.help = {
    name: 'başvuru',
    description: 'Başvuru yaparsınız',
    usage: 'başvuru'
};