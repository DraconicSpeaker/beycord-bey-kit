const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

class datbey extends Beyblade {
  constructor(firstOwner, id){
    super("dat bey", "Balance", "https://randomlinkhereXD", "Passive: Belt Swing\nManual: Spank", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    acted.hp = acted.hp - 60;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] dat bey used **Spank**. The opponent got spanked hard and cried. 60 damage dealt.`)
    .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  check(acted, victim, message, player){
    let bool;
    if(acted.hp < 60) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
    acted.hp = acted.hp - 56;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] dat bey used **Belt Swing**. That hit hard and dealt 56 damage... wow.`)
    .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = datbey;
