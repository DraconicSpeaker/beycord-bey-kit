//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BeastBehemoth extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Beast Behemoth", "Attack", "https://i.ibb.co/z4jS65c/behemoth.png", "Beast Hold", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	 let before = victim.hp;
    let base = 60;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	victim.atk = Math.round((victim.atk/100)*80);
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Beast Behemoth used **Beast Hold**.`)
	.setDescription (`Behemoth tilted heavily on it's Hold driver, causing it to spin erratically, forcing it to sit in the center of the stadium as it's wavering spin allowed it to parry enemy attacks and reduce incoming damage by 20%. Behemoth was able to fiercely strike the opponent once they got close enough, dealing ${diff} damage.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = BeastBehemoth;

//Congrats, You know know how to make a Bey!
