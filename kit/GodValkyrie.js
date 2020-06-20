//Import required modules
const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GodValkyrie extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("God Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/f/fb/Beyblade_God_Valkyrie.png/revision/latest?cb=20200126233810", "God Reboot", firstOwner, id); 
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.hp = victim.hp - 70;
    acted.stamina = acted.stamina - 4;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] God Valkyrie used **God Reboot**. 70 damage dealt. 4 stamina lost due to Reboot's energy drain.`)
    .setColor("#551a8b");
    
    message.channel.send(embed);
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = GodValkyrie;