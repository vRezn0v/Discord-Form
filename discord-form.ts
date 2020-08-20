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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.sendFile(window.location.pathname + "/");
});

app.post('/send', (req, res) => {
    const embed = new MessageEmbed()
                    .setColor("#0000ff")
                    .setTimestamp()
                    .setAuthor("You've got a new message!")
                    .setDescription(stripIndents`**From:** \`\`\`${req.body.name}\`\`\`
                    **Email** \`\`\`${req.body.email}\`\`\`
                    **Message:** \`\`\`${req.body.message}\`\`\``);
    client.users.cache.get(site_owner).send(embed);
    res.redirect("/contact");
});

app.listen(4200, () => {
    console.log(`Server running on port 4201`);
});

client.login(token);
