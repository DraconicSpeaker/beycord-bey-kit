//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GigantGaia extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Gigant Gaia", "Balance", "https://i.ibb.co/x86gbcw/Gaia.png", "Swing Launch \n Swing Counter", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		 victim.hp = victim.hp - 80;
		 acted.stamina = acted.stamina - 2; 
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Gigant Gaia used **Swing Launch**. Gaia used the wavering spin caused by it's Quarter disc to deliver a heavy smash attack to it's opponent worth 80 damage! The unbalanced nature dropped stamina by 2.`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (victim.atk > 0) {
	 acted.atk = victim.atk;
	 victim.hp = victim.hp - 30;
	 victim.atk = 0;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Gigant Gaia used **Swing Counter**. Gaia negated the enemy attack, instead using the momentum to ride up the stadium and come back down to slam into the opponent for 30 damage + the enemy's attack power!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
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
