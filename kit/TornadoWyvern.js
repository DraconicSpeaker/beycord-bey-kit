//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class TornadoWyvern extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Tornado Wyvern", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/7/76/Beyblade_Tornado_Wyvern.png/revision/latest?cb=20180716233432", "Passive: Tornado Parry, Hyper Shield Crash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
   let before = victim.hp;
    let base = 55;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	victim.hp = victim.hp - acted.atk;
	victim.atk = Math.round((victim.atk/100)*65);
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Tornado Wyvern used **Hyper Shield Crash**.`)
	.setDescription(`Wyvern used it's free spinning layer to reduce incoming damage by 35%, while riding up the stadium slope to the very ledge and coming back down to slam into the opponent for ${diff} damage plus the opponent's attack damage.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  check(acted, victim, message, player){
    let bool;
    if (acted.hp > Math.round((acted.maxhp/100)*50) && acted.stamina >= 6) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
	  acted.stamina = acted.stamina + 2;
    victim.atk = Math.round((victim.atk/100)*75);
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] Tornado Wyvern activated **Tornado Parry**.`)
  .setDescription(`Wyvern used the free spinning blades on it's layer to parry the opponent, preserving it's own stamina and increasing it by 2. The parried blow was reduced by 50% and inflicted back on the attacker.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = TornadoWyvern;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
