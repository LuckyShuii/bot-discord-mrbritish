const Discord = require('discord.js');
const client = new Discord.Client();


 module.exports.run = async(client, message, args) => {

    let separation = message.content.split(' ');
    let channelName = message.mentions.channels.first();
    let moderationChannel = "677230192304848916";

    if(separation[1] != undefined){
        client.channels.get(moderationChannel).send("<@238398635149099008> - Une **suggestion** provenant de <@" + message.member.id + "> vient d'être faite.\n Contenu du message :\n > " + separation[1])
    } else {
        return message.channel.send("Merci de renseigner un contenu.")
    }

    setTimeout(() => {
        message.delete();
    }, 1);

 };

module.exports.help =  {
    name : "suggestion"
}