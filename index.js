const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
import { token } from './token.js';

client.on('message', function (message) {

    //console.log(message) - le message est envoyé trois fois, wtf ?

    function isLink(link) {
        let urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        let regex = new RegExp(urlRegex);
        return link.match(regex);
    }


    // Remplir cette constante avec la commande mr.thumbactive
    // Stocker dans un tableau en pushant
    // thumbdisable - retire du tableau l'id
    const channelId = "645269624715214848";
    //645269624715214848 purgatoire
    //651208046562902039 serveur bot test

    let checkLink = isLink(message.content);
    //Ajout des réactions si Liens

    //Réactions automatiques pouce vert bas et pouce vert haut

    if (message.channel.id === channelId && checkLink !== null) {
        message.react("👍")
        message.react("👎")
    }

    // client.on('guildMemberAdd', (member) => {
    //     member.addRole(member.guild.roles.find('name', 'Membres Galiyak'));
    //  });

});

client.on('guildMemberAdd', (member) => {
    member.addRole(member.guild.roles.find('name', 'Visiteur'));
});

fs.readdir('./Commands', (error, f) => {
    if (error) { return console.error(error); }
    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

    commandes.forEach((f) => {
        let commande = require(`./Commands/${f}`);
        console.log(`${f} commande chargée !`);
        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        let events = require(`./Events/${f}`);
        let event = f.split('.')[0];
        client.on(event, events.bind(null, client));
    });
});

client.login(token);

