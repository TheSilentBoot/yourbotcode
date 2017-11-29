const config = require("./config");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});


client.on("message", async (message) => {
  if (message.author.id === "1234567890") { // Users ID
    message.channel.send("I love you"); // Message no mention
    // message.reply("I love you"); // Message with mention
  }
});


client.login(config.botToken);