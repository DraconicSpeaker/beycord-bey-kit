const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class KillerDeathscyther extends Beyblade {
  constructor(firstOwner, id){
    super("Killer Deathscyther", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/d/de/KD_2v_hn.jpg/revision/latest?cb=20171115105012", "Double Strike", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.atk = victim.atk - 30;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Killer Deathscyther used **Double Strike**. 30 damage dealt and defense incresed.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = KillerDeathscyther;