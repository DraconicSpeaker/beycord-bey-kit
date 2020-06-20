//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class InfernoIfrit extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Inferno Ifrit", "Balance", "https://i.ibb.co/ypmqNqw/ifrit.png", "Hell Inferno", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.hp = victim.hp - 90;
	acted.stamina = acted.stamina - 1;
	victim.atk = victim.atk * 2;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Inferno Ifrit used **Hell Inferno**. Ifrit's Magnum disc aligned with the contact points on it's layer, boosting attack power as it struck the enemy with a three hit barrage for 90 damage! Ifrit's shifted balance will result in 2x the enemy damage this turn.`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = InfernoIfrit;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
