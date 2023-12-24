const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas les permissions !`).catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'ai pas la permission !`).catch(console.error);

    if(!args[0]) return message.channel.send(`Vous devez spécifier un nombre de messages à supprimer !`);

    if(isNaN(args[0])) return message.channel.send(`Veuillez spécifier un nombre !`);

    if(args[0] > 100) return message.channel.send(`Je ne peux supprimer que 100 messages d'un coup !`);

    message.channel.bulkDelete(parseInt(args[0])+1);

    let sentence;
    if(args[0] < 2){
        sentence = `${args[0]} message a été supprimé !`;
    } else {
        sentence = `${args[0]} messages ont été supprimés !`;
    }
    
    const answer = await message.channel.send(sentence);

    setTimeout(() => {
        answer.delete();
    }, 10000);
};

module.exports.help = {
    name: "clear"
}