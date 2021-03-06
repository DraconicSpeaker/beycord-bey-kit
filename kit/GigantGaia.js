//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GigantGaia extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Gigant Gaia", "Balance", "https://i.ibb.co/x86gbcw/Gaia.png", "Swing Launch, Swing Counter", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		
		let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
		 acted.stamina = acted.stamina - 1; 
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Gigant Gaia used **Swing Launch**.`)
	.setDescription (`Gaia used the wavering spin caused by it's Quarter disc to deliver a heavy smash attack to it's opponent worth ${diff} damage! The unbalanced nature dropped stamina by 1.`)
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
	 victim.atk = Math.round((victim.atk/100)*40);
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Gigant Gaia used **Swing Counter**.`)
	.setDescription (`Gaia negated 60% of the enemy attack, instead using the momentum to ride up the stadium and come back down to slam into the opponent for ${diff} damage + the enemy's attack power!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = GigantGaia;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
