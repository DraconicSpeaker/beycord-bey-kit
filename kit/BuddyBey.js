const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class BuddyBey extends Beyblade {
    constructor(firstOwner,id,bey){
        super(bey.bbname || bey.name, bey.type, bey.image, bey.move, firstOwner, id);
      this.effects = bey.effects
      this.bbname = bey.bbname;
      this.stats = bey.stats;
    }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - acted.bey.effects.atk;
    victim.stamina = victim.stamina - acted.bey.effects.ss;
    acted.stamina = acted.stamina + acted.bey.effects.ss;
    victim.atk = victim.atk - acted.bey.effects.dmgb;
    acted.hp = acted.hp + acted.bey.effects.hpr;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] ${acted.bey.bbname} used **${acted.bey.move}**. ${acted.bey.effects.atk} damage dealt. ${acted.bey.effects.dmgb} damage blocked. ${acted.bey.effects.ss} stamina stolen. ${acted.bey.effects.hpr} hitpoints healed.`)
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = BuddyBey;