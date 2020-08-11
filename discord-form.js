const Discord = require('discord.js');
const { site_owner, token, buttonId, formClass } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("staring into void of existence.", { type: "PLAYING"});
});

console.log('Called');

client.login(token);