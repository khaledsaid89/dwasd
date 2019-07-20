const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602085097184952331")
setInterval(function() {
channel.send(`far5a`);
}, 30)
})

client.login(process.env.BOT_TOKEN);