const config = require("./config");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

let messagesSeen = 0;

client.on("message", async (message) => {
  if (message.author.id === "1234567890") { // Users ID
    messagesSeen += 1;
    if (messagesSeen >= 5) {
      messagesSeen = 0;
      message.channel.send("I love you").then(msg => {
        msg.delete(30 * 1000);
      });
    }
  }
});


client.login(config.botToken);