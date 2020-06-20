//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class ExceedEvileye extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Exceed Evil-eye", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/e/eb/Exceed_Evil-eye_%28B-80_02_Ver%29.png/revision/latest?cb=20180306204432", "Serpent Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.atk = 0;
	acted.stamina = acted.stamina - 2;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Exceed Evil-eye used **Serpent Launch**. Evileye deflected the enemy's attacks due to the outward weight distribution of it's Gravity disc, negating all incoming damage. But it's Atomic tip is forced to lock up when defending, reducing stamina by 2.`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = ExceedEvileye;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
