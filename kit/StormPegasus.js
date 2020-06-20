const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class StormPegasus extends Beyblade {
  constructor(firstOwner, id){
    super("Storm Pegasus", "Attack", "https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2Fbcb7d440-7874-4610-92da-cff72677d517.image.png?v=1578891076433", "Starblast Attack", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 41;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Storm Pegasus used **Starblast Attack**. 41 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = StormPegasus;