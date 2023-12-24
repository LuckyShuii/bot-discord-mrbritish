const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {
    message.channel.send(`Hey! C'est génial tu peux m'inviter en cliquant sur ce lien :) : \n > https://discordapp.com/oauth2/authorize?client_id=651195002055032832&scope=bot&permissions=8
    `)
};

module.exports.help = {
    name: "invite"
}