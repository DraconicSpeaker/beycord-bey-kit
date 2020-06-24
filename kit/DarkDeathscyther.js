//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DarkDeathscyther extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Dark Deathscyther", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/6/68/Beyblade_Deathscyther.png/revision/latest?cb=20181219002723", "Shake Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	 let before = victim.hp;
    let base = 70;
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
    acted.stamina = acted.stamina - 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Dark Deathscyther used **Shake Launch**.`)
	.setDescription (`Deathscyther used it's Jaggy driver and outward weight distribution to move unpredictably in a wide scythe-like shape along the stadium, before slicing into the opponent for ${diff} damage! losing 1 stamina by the impact.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = DarkDeathscyther;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
