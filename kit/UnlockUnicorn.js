//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class UnlockUnicorn extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Unlock Unicorn", "Defense", "https://i.ibb.co/fFqZBQf/Unicorn.png", "Horn Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Unicorn attempted to use Horn Launch, but without any incoming attacks, it failed to do anything!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 victim.hp = victim.hp - 60;
		 victim.stamina = victim.stamina - 1;
		 acted.stamina = acted.stamina - 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Unlock Unicorn used **Horn Launch**. Unicorn used it's Needle tip to hold it's ground against the enemy attack, draining 2 stamina, before driving it's horn into the opponent for 60 damage! The enemy's stability dropped, causing a decrease in stamina by 1!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = UnlockUnicorn;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
