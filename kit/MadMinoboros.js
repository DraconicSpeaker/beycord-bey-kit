//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class MadMinoboros extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Mad Minoboros", "Attack", "https://i.ibb.co/wzb3LjK/Minoboros.png", "Mad Quake", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.hp = victim.hp - 100;
	acted.stamina = acted.stamina - 2;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Mad Minoboros used **Mad Quake**. Minoboros used the offset weight of the Quarter disc, and offset Quake tip to bounce high into the air as it crashed back down atop it's opponent in a concentrated attack, dealing 100 damage but losing 2 stamina.`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = MadMinoboros;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
