const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {
    return message.channel.send('> Pour avoir de l\'aide sur l\'utilisation de <@651195002055032832>, rendez-vous sur notre serveur officiel : https://discord.gg/2rJCur3 \n\n> **Pour connaître les commandes disponibles faites** : `mr.commands`')
};

module.exports.help =  {
    name : "help"
}