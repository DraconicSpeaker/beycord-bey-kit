//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class JailJormungand extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Jail Jormungand", "Stamina", "https://i.ibb.co/C0gyWgj/jormuntor.png", "Undead Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
   if (victim.atk = 0) {
	   victim.hp = victim.hp - 0;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}]  Jail Jormungand attempted to use Undead Launch, but without any incoming attacks, it failed to do anything!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (victim.atk > 0) {
	 victim.atk = Math.round((victim.atk/100)*25);
	 acted.stamina = acted.stamina + 3;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Jail Jormungand used **Undead Launch**. Jormungard used the free spinning wings on it's Cycle tip to reduce incoming damage by 75%, preserving stamina and increasing it by 3!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
}}

//Make this file represents the Bey.
module.exports = JailJormungand;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
