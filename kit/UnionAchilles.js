const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class UnionAchilles extends Beyblade {
  constructor(firstOwner, id){
    super("Union Achilles", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/9/9b/BBGT_Union_Achilles_Convert_Xtend%2B_Retsu_Beyblade.png/revision/latest?cb=20191031110523", "Union Buster", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 34;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Union Achilles used **Union Buster**. 34 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = UnionAchilles;