//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Chaos extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Chaos", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/4/4f/C_og_transparent.png/revision/latest?cb=20171103215250", "Gyro Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    acted.stamina = acted.stamina + 3;
	victim.atk = Math.round((victim.atk/100)*70);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Chaos used **Gyro Launch**.`)
	.setDescription (`Chaos used it's low angled contact point to destabilize the opponent and reduce their damage by 30%, while utiliizing it's free spinning Gyro driver to enhance stamina by 3.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = Chaos;
//Made by Mr.Shadow and DraconicSpeaker
//Congrats, You know know how to make a Bey!
