//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GaiaDragoon extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Gaia Dragoon", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/6/64/GD.Ar.Hn%27.png/revision/latest?cb=20190629030824", "Spike Slash", firstOwner, id);
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
    victim.atk = Math.round((victim.atk/100)*70);
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
	.setTitle(`[${acted.username}] Gaia Dragoon used **Spike Slash**.`)
	.setDescription(`Gaia Dragoon used the free spinning blades on it's layer to block 30% of incoming damage before striking back, the force bolstered by the ball bearings on it's Around disc to deal ${diff} damage.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = GaiaDragoon;
//Made by Draconicspeaker and MrShadow
//Congrats, You know know how to make a Bey!
