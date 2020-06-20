const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class BlackSprigganRequiem extends Beyblade {
  constructor(firstOwner, id, bey){
    super("Black Spriggan Requiem", "Balance", "https://cdn.discordapp.com/attachments/490783690323001345/721681887361368064/image-removebg-preview.png", "Counter Break", firstOwner, id);
    this.sdchangable = true;
    if(bey) this.sd = bey.sd
    else this.sd = "Right";
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 50;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Spriggan Requiem used **Counter Break**. 50 damage dealt.`)
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
    else acted.bey.type = types[random];
    victim.hp = victim.hp - 32;
    let embed = new Discord.MessageEmbed()
    .setAuthor("Passive Ability")
    .setTitle(`[${acted.username}] Black Spriggan Requiem used **Tip Switch**. The tip of it's driver switched changing it's type to ${acted.bey.type} while also dealing 35 damage.`)
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = BlackSprigganRequiem;
