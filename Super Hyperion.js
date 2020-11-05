//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class NewBey extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Super Hyperion", "Attack", "https://static.wikia.nocookie.net/beyblade/images/0/0c/BBSK_Super_Hyperion_Xceed_1A_Beyblade.png/revision/latest?cb=20200403081343", "Passive: Xceed Counter\nSuper Strike", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.5; //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    acted.stamina = acted.stamina - 1.6;
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Super Hyperion used **Super Strike**.`)
    .setDescription(`${diff} damage dealt.\n1.6 stamina penalty.
    .setColor("#551a8b");
 
 message.channel.send(embed);
  }
   check(acted, victim, message, player){
    let chance = Math.floor(math.random()*1);
    let bool;
    if (acted.stamina >= 3);
    if (acted.move === "Fight" && chance === 1) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
          acted.atk = acted.atk + (acted.atk/100*50)
          victim.hp = victim.hp - acted.atk
	  acted.stamina = acted.stamina - 1.6
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] Super Hyperion used **Xceed Counter**.`)
  .setDescription(`${diff} (150%) damage dealt.\n1.6 stamina penalty.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = SuperHyperion;
