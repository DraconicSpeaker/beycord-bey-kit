//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DracielShield extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Draciel Shield", "Defense", "https://i.ibb.co/v49kxWw/Draciel.png", "Central Defense", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
    victim.atk = Math.round((victim.atk/100)*60);
	acted.stamina = acted.stamina + 1;
	victim.stamina = victim.stamina - 2;
    
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
	.setTitle(`[${acted.username}] Draciel Shield used **Central Defense**.`)
	.setDescription(`Draciel's centralized weight distribution created a stamina retaining spin, allowing it to defend against 40% of incoming damage and increase stamina by 2. The opponent's weakened attacks were exploited to stall the battle out, dropping their stamina by 1.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = DracielShield;
//Made by Draconicspeaker and MrShadow
//Congrats, You know know how to make a Bey!
