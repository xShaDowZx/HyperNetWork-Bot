const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` HyperNetWork Discord .`,'http://shyper-network.buycraft.net/');
  console.log('---------------');
  console.log('HyperNetWork Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});
client.login("process.env.BOT_TOKEN");
