const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {
    let separation = message.content.split(' ');
    
    if(message.member.hasPermission(0x00002000) == 1) {
        if(separation[2].indexOf("#") != -1) {
            if(message.guild.channels.has(message.mentions.channels.first().id) != -1) {

                let timeMinute = separation[1] * 60000;
                let channelName = message.mentions.channels.first();
                let messageUser = separation.splice(3);
                let utilisateur = message.author.id;

                if(message.mentions.channels.size < 1 || timeMinute <= 0 || messageUser == 0) {
                    return message.channel.send("Vous n'avez pas bien renseigné les informations. Rappel de la structure de la commande : `mr.sendlater`  `temps_en_minute`  `#_nom_du_channel`  `votre message`");
                }

                else if(timeMinute > 2880*60000){
                    return message.channel.send("Le temps maximum est de 48h - soit 2880 minutes, merci de choisir une valeur inférieure !");
                }

                else if(separation[1].indexOf(",") != -1) {
                    return message.channel.send("> Pour le **temps** en minute, vous ne pouvez pas utiliser de **virgule** tel que `0,1`\n > Il faut utiliser un **point** tel que : `0.1`");
                }

                else if(separation[1].content == NaN){
                    return message.channel.send("> Merci de renseigner un `nombre` ou un `chiffre` pour le **temps** souhaité !");
                }

                else {
                    message.channel.send(`Votre message va être envoyé dans le salon ${channelName}, dans **${timeMinute/60000} minutes**\n> __**Contenu du message**__ : ${messageUser.join(' ')}`);

                    setTimeout(() => {
                        channelName.send(`<@${utilisateur}> ***a envoyé le message suivant en différé*** : \n > ${messageUser.join(' ')}`);
                    }, timeMinute);
                }

            } else {
                return message.channel.send(`Vous ne pouvez envoyer des messages que dans des salons qui sont présents sur ce serveur !`);
            }
        } else {
            return message.channel.send(`> Merci de choisir un nom de channel valide tel que : "**#ChannelName**"`);
        }
    } else {
        return message.channel.send(`**Vous ne remplissez pas les conditions requises pour exécuter cette commande.** \n > __Vous devez avoir la permission de gérer les messages.`)
    }


};
module.exports.help =  {
    name : "sendlater"
};