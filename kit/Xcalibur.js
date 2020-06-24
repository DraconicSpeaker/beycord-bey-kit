//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Xcalibur extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Xcalibur", "Attack", "https://i.ibb.co/q0PxGcY/xcalibur.png", "The One Impact, Xtreme Impact", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	 if (acted.hp > 60) {
		 
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
	
		 acted.stamina = acted.stamina - 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xcalibur used **The One Impact**.`)
	.setDescription(`Xcalibur used the Saber on it's layer to strike the opponent with a strong, concentrated attack for ${diff} damage! The natural imbalance in the layer reduced stamina by 1.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp <= 60) {
		 
		 let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	 acted.stamina = acted.stamina - 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xcalibur used **Xtreme Impact**.`)
	.setDescription(`Xcalibur's Force disc aligned with the sword on it's layer, boosting it's power at the cost of a heavy imbalance, reducing stamina by 2. Xcalibur used this boost in power to slice the opponent for ${diff} damage!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
	 }
	 }
  
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = Xcalibur;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
