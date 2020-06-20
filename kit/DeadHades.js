const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class DeadHades extends Beyblade {
  constructor(firstOwner, id){
    super("Dead Hades", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/0/0c/BBC_DH11TZ%27_Beyblade.png/revision/latest?cb=20181015105727", "Dead Impulse", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 43;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Dead Hades used **Dead Impulse**. 29 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed)
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = DeadHades;