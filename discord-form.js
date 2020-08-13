const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const { site_owner, token, buttonId, formPage } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("staring into void of existence.", { type: "PLAYING"});
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req, res){
   res.sendFile(window.location.pathname + "/index.html");
});

app.post('/send', (req, res) => {
    const embed = new MessageEmbed()
                    .setColor("#0000ff")
                    .setTimestamp()
                    .setAuthor("You've got a new message!")
                    .setDescription(stripIndents`**From:** ${req.body.name}
                    **Email** ${req.body.email}
                    **Message:** ${req.body.message}`);
    client.users.cache.get(site_owner).send(embed);
    res.redirect('/'+formPage);
});

const port = 5500;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});

client.login(token);