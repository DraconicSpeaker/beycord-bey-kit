const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class JudgementJoker extends Beyblade {
  constructor(firstOwner, id){
    super("Judgement Joker", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/3/33/BBGT_Judgement_Joker_00Turn_Trick_Zan_Beyblade.png/revision/latest?cb=20191030220420", "The Judgement", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 30;
    acted.hp = acted.hp - 10;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Judgement Joker used **The Judgement**. 30 damage dealt. [${acted.username}] Judgement Joker got hit by recoil and lose 10 HP.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = JudgementJoker;