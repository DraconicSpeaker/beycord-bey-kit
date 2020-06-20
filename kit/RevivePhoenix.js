const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class RevivePhoenix extends Beyblade {
  constructor(firstOwner, id){
    super("Revive Phoenix", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/c/ca/BBC-RP10F_Beyblade.png/revision/latest?cb=20180709182938", "Revive Crush", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 60;
    acted.hp = acted.hp - 6;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Revive Phoenix used **Revive Crush**. 68 damage dealt. [${acted.username}] Revive Phoenix also lost some HP due to it's armour accidentally hitting itself.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = RevivePhoenix;