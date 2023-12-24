const Discord = require("discord.js");
const prefix = "mr.";
const client = new Discord.Client();


module.exports = async(client, message) => {
    //console.log(message.author);
    //if(message.author.client.user) return; (lol xptdr)


    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    if(!message.content.startsWith(prefix)) return;
    //console.log(prefix);
    //console.log(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);
    console.log(cmd); // Display command's name only if the bot is sending a message twice.. wut

    if(!cmd) return;

    cmd.run(client, message, args);
}