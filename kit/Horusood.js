//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Horusood extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Horusood", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/2/25/HorusoodSpreadEdge_5.png/revision/latest?cb=20160106220527", "Edge Field", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	acted.stamina = acted.stamina + 2;
	victim.atk = Math.round((victim.atk/100)*50);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Horusood used **Edge Field**.`)
	.setDescription(`Horusood utilized it's Edge driver to catch the wind and boost stamina by 2, while forming a solid wall that parried the enemy's attack, reducing damage from it by 50%.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = Horusood;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
