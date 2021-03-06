//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DranzerSpiral extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Dranzer Spiral", "Balance", "https://i.ibb.co/z4j8VJM/Dranzser.png", "Fire Spin", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	 let before = victim.hp;
    let base = 50;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.stamina = victim.stamina - 1.5;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
	.setTitle(`[${acted.username}] Dranzer Spiral used **Fire Spin**.`)
	.setDescription(`Dranzer slammed into a wall and was sent flying into the air, increasing it's spin velocity midair as it came crashing down atop it's opponent for ${diff} damage. The destabilization from the attack dropped the opponent's stamina by 1.5.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = DranzerSpiral;
//Made by Draconicspeaker and MrShadow
//Congrats, You know know how to make a Bey!
