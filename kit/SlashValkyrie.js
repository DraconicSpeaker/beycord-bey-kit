const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class SlashValkyrie extends Beyblade {
  constructor(firstOwner, id){
    super("Slash Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/1/18/BBGT_Slash_Valkyrie_Blitz_Power_Retsu_Beyblade.png/revision/latest?cb=20190401120837", "Wing Slash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 55;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Slash Valkyrie used **Wing Slash**. 55 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = SlashValkyrie;