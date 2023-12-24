const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {

    // membre guilde role : 710544634652393523

    let role         = message.guild.roles.get("710544867117236364");
    let invite_role  = message.guild.roles.get("710545220596662293");
    let member       = message.member;
    let generalChannel = "710528336342024214";


    if(message.member.roles.has("710544867117236364")){

        message.channel.send("You already have this role / Tu as déjà ce rôle")

        setTimeout(() => {
            message.delete();
        }, 1);

    } else {
        
        member.addRole(role).catch(console.error)
        member.removeRole(invite_role).catch(console.error)

        client.channels.get(generalChannel).send(`Bienvenue <@${message.author.id}> sur notre serveur ! 
Tu peux t'attribuer des rôles dans le salon <#710552283812724736>
------------
Welcome <@${message.author.id}> on our server!
You can self-attribute roles in the channel <#710552283812724736>`)

        setTimeout(() => {
            message.delete();
        }, 1);
    }

};

module.exports.help = {
    name: "pickup"
}