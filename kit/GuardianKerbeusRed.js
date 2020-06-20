const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class GuardianKerbeusRed extends Beyblade {
  constructor(firstOwner,id){
    super("Guardian Kerbeus Red Ver.", "Stamina", "https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2F7411BF2F-B805-4384-8E2C-5E7FAD650A73.jpeg?v=1579684506649", "Firework Dive", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 40;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Guardian Kerbeus Red Ver. used **Firework Dive**. 40 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = GuardianKerbeusRed;