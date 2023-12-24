const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let M = [
        'Est-ce que {user} peut se présenter au bureau des formateurs je vous prie ?',
        '{user} est demandé(e) au bureau du proviseur !',
        'Est-ce que {user} accepterai de se déplacer jusqu\'au bureau des formateurs ?',
        'Envoyé spécial : {user} doit se présenter dans les meilleurs délais au bureau central des opérations !',
        'Bruits de couloir : Il parait que {user} a reçu une convocation chez le dirlo ... il paraît ...'
    ]
    let separation = message.content.split(' ');
    let channelName = message.mentions.channels.first();

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

        if(separation[1].search("@") !== -1){

            if(separation[2].search("#") !== -1){

                channelName.send(M[
                    getRandomInt(4)
                    //aléatoire
                ].replace("{user}", separation[1]));
                 
            } else {
                message.channel.send("Bruh, tu n'as pas bien mentionné le channel que tu veux !")
            }
        } else {
            return message.channel.send("Vous n'avez pas mentionné de membre !")
        }
        
};

module.exports.help =  {
    name : "convocation"
}