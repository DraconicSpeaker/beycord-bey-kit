const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class DemonDestroyingBey extends Beyblade {
  constructor(firstOwner, id){
    super("Demon Destroying Bey", "Balance", "https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2Fkimetsunobeiburedo.png?v=1581766665854", "1st Form: Edge Slice\n2nd Form: Eye-blinding Beam\n3rd Form: Cage of Demon Destroying", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    let move = Math.floor(Math.random() * 3);
    
    switch(move){
      case 0:
        let embed = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Demon Destroying Bey used **Special Move 1st Form: Edge Slice**. 68 damage dealt.`)
          .setColor("#551a8b");
        victim.hp = victim.hp - 68;
        message.channel.send(embed);
        break;
      case 1:
        let embed2 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Demon Destroying Bey used **Special Move 2nd Form: Eye-blinding Beam**. Its opponent was blinded for 1 minute and missed its attack. 65% damage reduced.`)
          .setColor("#551a8b");
        victim.atk = Math.round((victim.atk / 100) * 35);
        message.channel.send(embed2);
        break;
      case 2:
        let embed3 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Demon Destroying Bey used **Special Move 3rd Form: Cage of Demon Destroying**.  The opponent was unable to attack due to being trapped in the cage. 10 damage dealt. Gained 2 stamina from the wind pressure generated by the cage's creation.`)
          .setColor("#551a8b");
        victim.atk = 0;
        victim.hp = victim.hp - 10;
        acted.stamina = acted.stamina + 1;
        message.channel.send(embed3);
        break;
    }
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = DemonDestroyingBey;