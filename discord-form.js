const Discord = require('discord.js');
const { site_owner, token, buttonId } = require('./config.json');

const client = new Discord.Client();

const btn = document.getElementById(buttonId);

client.on('ready', () => {
    client.user.setActivity("staring into void of existence.", { type: "PLAYING"});
});



client.login(token);