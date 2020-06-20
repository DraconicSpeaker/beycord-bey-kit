//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class AcidAnubis extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Acid Anubis", "Defense", "https://i.ibb.co/pxVTFw4/Anubis.png", "Perfect Circle", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.hp = victim.hp - 50;
	victim.atk = Math.round((victim.atk/100)*60);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Acid Anubis used **Perfect Circle**. Anubis achieved perfect stability thanks to it's well balanced Yell disc and the wide surface of it's Orbit tip, reducing enemy damage by 40%. The free spinning nature of Orbit let Anubis counterattack for 50 damage!`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = AcidAnubis;
//Made By MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!