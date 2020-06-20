const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class ChoZAchilles extends Beyblade {
  constructor(firstOwner, id){
    super("Cho-Z Achilles", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/3/3a/BBC_Cho-Z_Achilles_00_Dimension_Beyblade.png/revision/latest?cb=20181217192338", "Turbo Breaker", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 80;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Cho-Z Achilles used **Turbo Breaker**. 65 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed)
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = ChoZAchilles;