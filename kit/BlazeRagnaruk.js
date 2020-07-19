//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BlazeRagnaruk extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Blaze Ragnaruk", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/c/c7/Beyblade_Blaze_Ragnaruk.png/revision/latest?cb=20180716232911", "True Ragnaruk Zone", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.stamina = victim.stamina - 1;
	acted.stamina = acted.stamina + 1;
	acted.hp = acted.hp + 30;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Blaze Ragnaruk used **True Ragnaruk Zone**.`)
	.setDescription(`Ragnaruk's centrifugal force opened the wings on it's layer, supported by it's Flugel driver to generate a tornado that bolstered it's stability, recovering 30 hp and negating stamina loss this turn. The tornado Ragnaruk created parried some of the opponent's blows as a stalling tactic, draining their stamina by 1.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = BlazeRagnaruk;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
