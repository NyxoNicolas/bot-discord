const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("n!");

client.on("message", (message) => {

    if(message.content === "bonjour") [
        message.channel.send("Coucou beau gosse <3")
    ]
    
    if(message.content === prefix + "ban") [
        message.channel.send("Tu veux ban qui ptdr ?!")
    ]

});
