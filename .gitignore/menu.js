const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);
client.on('ready', function(){;
    client.user.setActivity('n!help | Nezuko ❤ ');

})

var prefix = ("n!");

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.687208360294219797).send(`Bienvenue ${member} nous sommes désormais ${member.guild.memberCount} ! 🎉`);
})
          
client.on("message", (message) => {

    if(message.content === "Bonjour") [
        message.channel.send("Coucou beau gosse <3")
    ]
    
    if(message.content === "bonjour") [
        message.channel.send("Coucou beau gosse <3")
    ]
    
    if(message.content === "Ta gueule") [
        message.channel.send("Pas de violence, merci <3")
    ]
    
    if(message.content === "Tg") [
        message.channel.send("Pas de violence, merci <3")
    ]
    
    if(message.content === "tg") [
        message.channel.send("Pas de violence, merci <3")
    ]
    
    if(message.content === "<o/") [
        message.channel.send("\\o>")
    ]

    if(message.content === "") [
        message.channel.send("")
    ]
    
    if(message.content === prefix + "help") [
        message.channel.send("🌹 **Nezuko** est un bot intéractif qui réagis à vos messages 🌹")
    ]

});
