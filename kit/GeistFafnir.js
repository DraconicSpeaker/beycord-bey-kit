const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class GeistFafnir extends Beyblade {
  constructor(firstOwner, id){
    super("Geist Fafnir", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/f/fb/BBC_Geist_Fafnir_8%27_Absorb_Beyblade.png/revision/latest?cb=20190918213512", "Absorb Break", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 59;
    victim.stamina = victim.stamina - 1;
    acted.stamina = acted.stamina + 1
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Geist Fafnir used **Absorb Break**. 59 damage dealt and 1 stamina absorbed.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = GeistFafnir;