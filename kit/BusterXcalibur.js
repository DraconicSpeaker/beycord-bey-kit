const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class BusterXcalibur extends Beyblade {
  constructor(firstOwner, id){
    super("Buster Xcalibur", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/1/10/BBC_Buster_Xcalibur_Beyblade.png/revision/latest?cb=20180723120716", "Dual Sabers", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 48;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Buster Xcalibur used **Dual Sabers**. 48 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = BusterXcalibur;