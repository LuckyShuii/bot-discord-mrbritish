const Discord = require("discord.js");
const prefix = "mr.";
const client = new Discord.Client();

module.exports = async(client) => {
    client.user.setPresence({
        game: {
            name: "mr.help"
        }
    })
} 