const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class VenomDiabolos extends Beyblade {
  constructor(firstOwner, id){
    super("Venom Diabolos", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/c/c4/BBGT_Venom_Diabolos_Vanguard_Bullet_Beyblade.png/revision/latest?cb=20190802194350", "Dual Phantom", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 53;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Venom Diabolos used **Dual Phantom** and mini Bey is released. 48 damage dealt from Venom Diabolos and 5 damage dealt from the mini Bey.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = VenomDiabolos;