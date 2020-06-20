//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class Kerbeus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Kerbeus", "Defense", "https://i.ibb.co/Q8p0yvz/kerbeus.png", "Chain Defense", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
        victim.hp = victim.hp - 40;
	acted.stamina = acted.stamina - 2;
	victim.atk = Math.round((victim.atk / 100) * 75);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Kerbeus used **Chain Defense**. Utilizing central weight distribution, Kerbeus enhanced it's resistance and reduced enemy attack damage by 25%, and shredded into the opponent in retaliation for 40! Stamina was reduced by 2 due to the tabs on it's Defense tip.`)
    .setColor("#551a8b");
    
    message.channel.sendMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = Kerbeus;
//Made by MrShadow adn Draconicspeaker
//Congrats, You know know how to make a Bey!
