require('dotenv').config() 
const Discord = require("discord.js"); 
const config = require("./auth.json");
const https = require('https');

const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});
//const { Client, Intents, MessageEmbed } = require('discord.js');

const fetch = require('node-fetch');

var id;

//const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix = "!"; 
client.on("messageCreate", async message => { 
if (message.author.bot) return; 
if (!message.content.startsWith(prefix)) return; 
const commandBody = message.content.slice(prefix.length);
const args = commandBody.split(' '); 
const command = args.shift().toLowerCase();

id = message.id

if (command === "t_ping") {
    const timeTaken = Date.now() - message.createdTimestamp; message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
 if (command === "t_music") {
    
    message.reply(`La la la la la la `);
  }
	if (command === 't_map') { https.get('https://api.mozambiquehe.re/maprotation?version=2&auth=UyAjuCMgRrqY4xDdy8pu', (resp) => { let data = '';
  // A chunk of data has been received.
  resp.on('data', (chunk) => { data += chunk;
  });
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log(JSON.parse(data));
    j_data = JSON.parse(data)
    //console.log(j_data)
   // console.log(j_data.battle_royale.current.map); 
    message.reply("The current map on Apex is: " +"**" + j_data.battle_royale.current.map + "**" + " with **" + j_data.battle_royale.current.remainingMins + "** remaining minutes."+ "\nThe next map is: " + j_data.battle_royale.next.map);
  message.fetch(id).then(msg => msg.delete());
});
//console.log("new") console.log("data" + data) console.log("new_1")
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
		//await message.deferReply(); const { file } = await fetch('https://api.mozambiquehe.re/maprotation?version=2&auth=UyAjuCMgRrqY4xDdy8pu').then(response => response.json());
	
		//message.editReply({ files: [file] });
		
	}
});
console.log('hello')
client.login(config.bot_token);
