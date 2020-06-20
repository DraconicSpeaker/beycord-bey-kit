const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class KingKerbeus extends Beyblade {
  constructor(firstOwner, id){
    super("King Kerbeus", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/8/88/Beyblade_Kerbeus.png/revision/latest?cb=20181219001015", "Chain Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 15;
    victim.stamina = victim.stamina - 1;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] King Kerbeus used **Chain Launch**. 15 damage dealt and opponent's stamina decreased by 1.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = KingKerbeus;