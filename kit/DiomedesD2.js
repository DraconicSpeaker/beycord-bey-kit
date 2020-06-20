//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DiomedesD2 extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Diomedes D2", "Attack", "https://i.ibb.co/6mmdWk0/diomedes.png", "Shield Stance \n Triple Sniper", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	 if (acted.hp > Math.round((acted.maxhp/100)*50)) {
		 victim.atk = Math.round((victim.atk/100)*70);
		 acted.stamina = acted.stamina + 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Diomedes D2 used **Shield Stance**. Diomedes used the weight of it's Triple disc concentrated into the wall shaped design of it's layer to block 30% damage and preventing stamina loss this turn.`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (acted.hp <= Math.round((acted.maxhp/100)*50)) {
	 victim.hp = victim.hp - 70;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Diomedes D2 used **Triple Sniper**. Diomedes used the Triple disc, aligned with it's three arrowhead contact points for a powerful attack, further strengthened by the Accel tip for a fierce 70 damage attack!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
  }}
	 
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}
//Make this file represents the Bey.
module.exports = DiomedesD2;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
