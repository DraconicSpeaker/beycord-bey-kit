const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class HellSalamander extends Beyblade {
  constructor(firstOwner, id){
    super("Hell Salamander", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/3/3a/HS_Official.png/revision/latest?cb=20180520230011", "Swirling Inferno", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.atk = victim.atk - 10;
    victim.hp = victim.hp - 41;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Hell Salamander used **Swirling Inferno**. 41 damage dealt and defense incresed.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = HellSalamander;