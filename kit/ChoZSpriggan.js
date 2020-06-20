const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class ChoZSpriggan extends Beyblade {
  constructor(firstOwner, id){
    super("Cho-Z Spriggan", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/5/58/BBC_Cho-Z_Spriggan_0Wall_Zeta%27_Beyblade.png/revision/latest?cb=20181126123327", "Super Spriggan Slash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 43;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Cho-Z Spriggan used **Super Spriggan Slash**. 43 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed)
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = ChoZSpriggan;