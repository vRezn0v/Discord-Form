const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const { site_owner, token, buttonId, formPage } = require('./config.json');

const client = new Discord.Client();

const PORT = process.env.PORT || 5000;

client.on('ready', () => {
    client.user.setActivity("staring into void of existence.", { type: "PLAYING"});
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/send', (req, res) => {
    const embed = new MessageEmbed()
                    .setColor("#0000ff")
                    .setTimestamp()
                    .setAuthor("You've got a new message!")
                    .setDescription(stripIndents`**From:** ${req.body.name}
                    **Email** ${req.body.email}
                    **Message:** ${req.body.message}`);
    client.users.cache.get(site_owner).send(embed);
    res.redirect(formPage);
});

app.listen(PORT, () => {
    console.log(`Server running on port${PORT}`);
});

client.login(token);
