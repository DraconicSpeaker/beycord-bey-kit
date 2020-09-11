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
    
    let before = victim.hp;
    let base = 40;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	//Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	acted.stamina = acted.stamina - 2;
	victim.atk = Math.round((victim.atk/100)*75);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Kerbeus used **Chain Defense**.`)
	.setDescription(`Kerbeus utilized the centralized weight distribution of it's Central disc, increasing it's spin velocity as a method of improving it's damage resistance, along with the tabs on it's Defense driver to reduce damage by 25% at the cost of 2 stamina. Kerbeus retaliated by using the chain on it's layer to shred into the opponent for ${diff} damage`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
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
