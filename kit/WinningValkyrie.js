const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class WinningValkyrie extends Beyblade {
  constructor(firstOwner, id){
    super("Winning Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/c/cf/Anime_wV.png/revision/latest?cb=20180404012334", "Rush Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Winning Valkyrie used **Rush Launch**. 35 damage dealt.`)
    .setColor("#551a8b");
    victim.hp = victim.hp - 35;
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = WinningValkyrie;