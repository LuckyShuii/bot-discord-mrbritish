const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Liste des commandes disponibles :`,
            fields: [
                {
                    name: "mr.help",
                    value: "Envoi le lien du serveur support officiel"
                },
                {
                    name: "mr.invite",
                    value: "Envoi le lien d'invitation pour ajouter Mr. British au serveur"
                },
                {
                    name: "mr.sendlater temps_en_minute #_nom_du_channel votre message",
                    value: `Envoi un message en différé dans le salon demandé, il est requis d'avoir le droit de supprimer les messages.`
                },
                {
                    name: "mr.ping",
                    value: "Renvoi la latence du bot"
                },
                {
                    name: "mr.clear nombre_de_messages",
                    value: "Supprime le nombre de message demandé, dans une limite de 100, nécessite le droit de modifier les messages"
                },
                {
                    name: "mr.stats @user",
                    value: "Renvoi certaines informations sur l'utilisateur mentionné"
                },
                {
                    name: "mr.kick",
                    value: "Kick l'utilisateur mentionné"
                },
                {
                    name: "mr.ban",
                    value: "Banni l'utilisateur mentionné"
                },
                {
                    name: "mr.report 'message'",
                    value: "Envoi un message de report privé à l'équipe de modération"
                },
                {
                    name: "mr.convocation @user #channel",
                    value: "Envoie une phrase aléatoire pour convoquer @user dans le bureau du formateur"
                },
                {
                    name: "mr.vote message..",
                    value: "Renvoi [message] avec deux émojis en dessous (pousse vers le haut & pousse vers le bas"
                }
            ],
            footer: {
                text: `Bot développé par Mr. British#5117`
            }
        }
    })
};

module.exports.help =  {
    name : "commands"
}