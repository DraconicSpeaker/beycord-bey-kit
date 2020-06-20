//Import required modules
const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DrainFafnir extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Drain Fafnir", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/2/21/Beyblade_Drain_Fafnir.png/revision/latest?cb=20180716233052", "Nothing Breaker", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.  
    victim.stamina = victim.stamina - 3;
    acted.stamina = acted.stamina + 3
    victim.hp = victim.hp - 10;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Drain Fafnir used **Nothing Breaker**. Drain Fafnir absorbed 3 stamina and dealt 10 damage.`)
    .setColor("#551a8b");
    
    message.channel.send(embed);
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = DrainFafnir;

//Congrats, You know know how to make a Bey!