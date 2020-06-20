//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Spriggan extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Spriggan", "Balance", "https://i.ibb.co/QCg2V30/spriggan.png", "Counter Smash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.hp = victim.hp - 60;
	acted.atk = victim.atk;
	victim.atk = victim.atk = 0;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Spriggan used **Counter Smash**. Spriggan tilts back from the enemy attack, negating damage thanks to Spriggan's Fusion tip. The Fusion tip allows it to gain a sudden burst of strength as it crashed into the enemy for 60 damage + the opponent's damage.`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = Spriggan;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
