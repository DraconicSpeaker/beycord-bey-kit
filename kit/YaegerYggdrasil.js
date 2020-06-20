//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class YaegerYggdrasil extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Yaeger Yggdrasil", "Stamina", "https://i.ibb.co/wrjqwvJ/yggdrasil.png", "Nature Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    acted.hp = acted.hp + 50;
	acted.stamina = acted.stamina + 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Yaeger Yggdrasil used **Nature Launch**. Yggdrasil used the POM, low friction surface of it's Yielding tip to negate stamina loss this turn, and enhance it's stability, recovering 50 hp!`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = YaegerYggdrasil;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
