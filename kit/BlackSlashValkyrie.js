const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class BlackSlashValkyrie extends Beyblade {
  constructor(firstOwner, id){
    super("Black Slash Valkyrie", "Attack", "https://cdn.discordapp.com/attachments/490783690323001345/721682635058970624/SPOILER_blacksvalkyrie.png", "Wing Slash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 60;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Slash Valkyrie used **Wing Slash**. 60 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = BlackSlashValkyrie;