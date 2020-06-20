const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class ChoZValkyrie extends Beyblade {
  constructor(firstOwner, id){
    super("Cho-Z Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/f/f9/BBC_Cho-Z_Valkyrie_Zenith_Evolution_Beyblade.png/revision/latest?cb=20181105123418", "Super Valkyrie Slash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 50;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Cho-Z Valkyrie used **Super Valkyrie Slash**. 51 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = ChoZValkyrie;