const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first();
    if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur !`);

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: "ID:",
                    value: membre.id
                },
                {
                    name: "Créé le :",
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: "Jeu :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "L'utilisateur ne joue pas"}`
                },
                {
                    name: "Rejoin le :",
                    value: moment.utc(membre.joinedAt).format("LLL")
                }
            ],
            footer: {
                text: `Bot développé par Mr. British#5117`
            }
        }
    })
};

module.exports.help = {
    name: 'stats'
};