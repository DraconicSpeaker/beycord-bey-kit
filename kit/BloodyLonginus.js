//Import required modules
const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BloodyLonginus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Bloody Longinus", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/f/f6/BeybladeBloodyLonginusAnime.png/revision/latest?cb=20190918213350", "Dragon Scream", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.atk = victim.atk = 0;
    victim.hp = victim.hp - 50;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Bloody Longinus used **Dragon Scream**. 50 damage dealt and opponent's damage nullified for this turn.`)
    .setColor("#551a8b");
    
    message.channel.send(embed);
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = BloodyLonginus;

//Congrats, You know know how to make a Bey!
