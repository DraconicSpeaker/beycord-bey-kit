const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js")

class VictoryValtryek extends Beyblade {
  constructor(firstOwner, id){
    super("Victory Valtryek", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/2/2b/Beyblade_Valkyrie.png/revision/latest?cb=20181218234925", "Rush Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Victory Valtryek used **Rush Launch**. 40 damage dealt.`)
    .setColor("#551a8b");
    victim.hp = victim.hp - 40;
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = VictoryValtryek;