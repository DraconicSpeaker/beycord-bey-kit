//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Evileye extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Evil-eye", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/7/79/E_WN.png/revision/latest?cb=20180624024355", "Needle Drift", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	acted.stamina = acted.stamina - 1;
	victim.atk = Math.round((victim.atk/100)*35);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Evil-eye used **Needle Drift**.`)
	.setDescription(`Evil-eye utilized it's Needle driver's multitude of contact points to absorb the opponent's attack, reducing it by 65% before swiftly dashing out the way at the cost of 1 stamina.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = Evileye;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
