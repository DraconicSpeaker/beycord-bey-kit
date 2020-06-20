const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class DeadPhoenix extends Beyblade {
  constructor(firstOwner, id){
    super("Dead Phoenix", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/e/ec/BBC_Dead_Phoenix_0_Atomic_Beyblade.png/revision/latest?cb=20190131010643", "Dead Armour Press", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 50;
    acted.hp = acted.hp - 8;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Dead Phoenix used **Dead Armour Press**. 50damage dealt. [${acted.username}] Dead Phoenix also lost some HP due to it's armour accidentally hitting itself.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = DeadPhoenix;