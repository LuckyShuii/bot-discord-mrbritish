const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {

    let separation = message.content.split(' ');
    const userMessage = await message;
    let utilisateur = message.author.id;
    let messageUser = separation.splice(1);

    if(message.member.hasPermission(0x00002000) == 1) {
        if(messageUser != 0){
        message.channel.send(messageUser.join(' '))
        .then(function (message) {
            message.react("✔️");
            message.react("⚪️");
            message.react("❌");
        });
        setTimeout(() => {
            userMessage.delete();
        }, 1);

        } else {
            const MSGBOT = await message.channel.send("<@" + utilisateur + "> : Merci de renseigner un descriptif du vote !");
            MSGBOT;


            setTimeout(() => {
                userMessage.delete();
            }, 1);

            setTimeout(() => {
                MSGBOT.delete();
            }, 10000);
        }
    } else {
        message.channel.send("<@" + utilisateur + "> : Attention, vous n'avez pas les permissions requises pour éxecuter cette commande. \nVous devez avoir le droit de supprimer les messages pour l'utiliser.")
    }






};

module.exports.help =  {
    name : "vote"
}