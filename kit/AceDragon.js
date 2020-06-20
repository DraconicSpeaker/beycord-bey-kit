const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class AceDragon extends Beyblade {
  constructor(firstOwner, id){
    super("Ace Dragon", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/4/4e/BBGT_Ace_Dragon_Sting_Charge_Zan_Beyblade.png/revision/latest?cb=20190401120826", "Dragon Shoot", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 49;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Ace Dragon used **Dragon Shoot**. 49 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = AceDragon;