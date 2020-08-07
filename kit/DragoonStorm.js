//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DragoonStorm extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Dragoon Storm", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/e/ec/Bey%2C_Burst_Dragoon_S_W.X_%28Takara_Tomy%29.png/revision/latest?cb=20200327123934", "Storm Attack", firstOwner, id);
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
	victim.atk = Math.round((victim.atk/100)*65);
    acted.stamina = acted.stamina - 1;
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
	.setTitle(`[${acted.username}] Dragoon Storm used **Storm Attack**.`)
	.setDescription(`Dragoon used the wind flowing through it's Wing disc, and the incredible spin velocity generated by it's Xtreme driver to create a huge tornado around itself that reduced damage by 35%. The tornado's vacuum sucked in the opponent afterwards, spitting them out into the air for ${diff} damage. Dragoon lost 1 stamina due to the strain on it's spin velocity.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = DragoonStorm;
//Made by Draconicspeaker and MrShadow
//Congrats, You know know how to make a Bey!
