//Import required modules
const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class SeigXcalibur extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Seig Xcalibur", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/1/11/Beyblade_Sieg_Xcalibur.png/revision/latest/zoom-crop/width/720/height/720?cb=20180716235603", "Third Impact", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.hp = victim.hp - 50;
    acted.hp = acted.hp - 5;
    acted.stamina = acted.stamina - 1
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Seig Xcalibur used **Third Impact**. 50 damage dealt, but 5 taken as well as a 3 drain in stamina.`)
    .setColor("#551a8b");
    
    message.channel.send(embed);
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = SeigXcalibur;

//Congrats, You know know how to make a Bey!