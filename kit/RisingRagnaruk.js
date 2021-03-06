//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class RisingRagnaruk extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Rising Ragnaruk", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/3/3c/Beyblade_Ragnaruk.png/revision/latest?cb=20181219001611", "Ragnaruk Zone", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    acted.stamina = acted.stamina + 3;
	victim.stamina = victim.stamina - 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Rising Ragnaruk used **Ragnaruk Zone**.`)
	.setDescription (`Ragnaruk reduced stamina loss by utilizing the Revolve driver's sharp tip in the center of it, reducing stamina loss as much as possible to enhance stamina by 3 while using it's free spinning plate to reduce knockback when knocked off balance, stalling out the opponent and dropping their stamina by 1.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = RisingRagnaruk;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
