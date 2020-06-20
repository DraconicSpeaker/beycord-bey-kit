const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class ZAchilles extends Beyblade {
  constructor(firstOwner, id){
    super("Z Achilles", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/4/4e/Anime_zA.png/revision/latest?cb=20180404012936", "Z Breaker", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 43;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Z Achilles used **Z Breaker**. 43 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = ZAchilles;