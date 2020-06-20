//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Xcalibur extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Xcalibur", "Attack", "https://i.ibb.co/q0PxGcY/xcalibur.png", "The One Impact\nXtreme Impact", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	 if (acted.hp > Math.round(acted.maxhp / 100) * 60) {
		 victim.hp = victim.hp - 80;
		 acted.stamina = acted.stamina - 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xcalibur used **The One Impact**. Xcalibur used the Saber on it's layer to strike the opponent with a strong, concentrated attack for 80 damage! The natural imbalance in the layer reduced stamina by 1.`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (acted.hp <= Math.round(acted.maxhp / 100) * 60) {
	 victim.hp = victim.hp - 100;
	 acted.stamina = acted.stamina - 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xcalibur used **Xtreme Impact**. Xcalibur's Force disc aligned with the sword on it's layer, boosting it's power at the cost of a heavy imbalance, reducing stamina by 2. Xcalibur used this boost in power to slice the opponent for 100 damage!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
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
