//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class StormSpriggan extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Storm Spriggan", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/a/a7/Beyblade_Spriggan.png/revision/latest?cb=20181218235223", "Upper Launch, Counter Break", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		
		let before = victim.hp;
    let base = 60;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
		 acted.stamina = acted.stamina + 2; 
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Storm Spriggan used **Upper Launch**.`)
	.setDescription (`Spriggan used the slope of the stadium as a momentum boost, coming down at a angle to send the opponent flying for ${diff} damage and avoid retaliation, saving stamina and increasing it by 2.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 
		 let before = victim.hp;
    let base = 40;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	 acted.atk = victim.atk;
	 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Storm Spriggan used **Counter Break**.`)
	.setDescription (`Spriggan recoiled from the enemy attack as it landed on the rubber of it's Unite tip, draining 1 stamina. The rubber boosted it's strength before crashing into the enemy for ${diff} damage + the enemy's attack!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = StormSpriggan;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
