//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class HyrusH2 extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Hyrus H2", "Defense", "https://i.ibb.co/98hPKMk/hyrus.png", "Horn Yell", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	victim.atk = Math.round((victim.atk/100)*60);
	victim.stamina = victim.stamina - 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Hyrus H2 used **Horn Yell**.`)
	.setDescription (`Hyrus used the outward weight distribution of it's Yell disc, and the studded points of it's Needle tip to defend 40% damage from incoming attacks, the enhanced defense slowly wears out it's opponent and drain 1 stamina.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = HyrusH2;
//Made by MrSHadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
