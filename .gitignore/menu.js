const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);
client.on('ready', function(){;
    client.user.setActivity('n!help | Nezuko la police');

})

var prefix = ("n!");

client.on("message", (message) => {

    if(message.content === "bonjour") [
        message.channel.send("Coucou beau gosse <3")
    ]
    
    if(message.content === prefix + "help") [
        message.channel.send("**Nezuko** est un *bot* intéractif qui réagis à vos messages")
    ]

});
