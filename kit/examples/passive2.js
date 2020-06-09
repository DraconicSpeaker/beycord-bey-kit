const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class SpryzenRequiem extends Beyblade {
  constructor(firstOwner, id, bey){
    super("Spryzen Requiem", "Balance", "https://cdn.glitch.com/246ebe39-76c4-4f23-9058-86ccadf85d3b%2F8882A773-F98C-46E4-92E7-13577D201E33.png?1556017693607", "Counter Break", firstOwner, id);
    this.sdchangable = true;
    this.sd = bey.sd || "Right";
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 40;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Spryzen Requiem used **Counter Break**. 40 damage dealt.`)
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }
  check(acted, victim, message, player){
    let bool;
    if(acted.hp <= (acted.maxhp / 2)) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
    let ct = acted.bey.type || "Balance";
    let types = ["Attack", "Stamina", "Defense"];
    let random = Math.floor(Math.random() * types.length);
    if(ct === "Balance") acted.bey.type = types[random];
    else acted.bey.type = "Attack";
    victim.hp = victim.hp - 31;
    let embed = new Discord.MessageEmbed()
    .setAuthor("Passive Ability")
    .setTitle(`[${acted.username}] Spryzen Requiem used **Tip Switch**. The tip of it's driver switched changing it's type to ${acted.bey.type} while also dealing 31 damage.`)
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = SpryzenRequiem;
