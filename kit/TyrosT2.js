//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class TyrosT2 extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Tyros T2", "Balance", "https://i.ibb.co/Zc97drj/Tyros.png", "Hound Barrier", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.stamina = victim.stamina - 1;
	victim.atk = Math.round((victim.atk/100)*60);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Tyros T2 used **Hound Barrier**. Tyros used it's rounded layer and outward weight distribution to repel 40% of incoming damage, and stalling out the opponent to drop their stamina by 1!`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = TyrosT2;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
