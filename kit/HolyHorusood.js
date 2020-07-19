//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class HolyHorusood extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Holy Horusood", "Stamina", "https://i.ibb.co/zhw5xY7/horus.png", "Horusood Field", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    	victim.atk = Math.round((victim.atk/100)*70);
		acted.stamina = acted.stamina + 3;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Holy Horusood used **Horusood Field**.`)
	.setDescription (`Horusood's claws on it's Claw tip caught the wind and extended out, generating a huge tornado that repelled 30% of incoming damage and increased stamina by 3!`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = HolyHorusood;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
