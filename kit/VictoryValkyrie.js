//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class VictoryValkyrie extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Victory Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/2/2b/Beyblade_Valkyrie.png/revision/latest?cb=20181218234925", "Rush Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	let before = victim.hp;
    let base = 40;
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
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Victory Valkyrie used **Rush Launch**.`)
	.setDescription (`Valkyrie began to move in a flower pattern around the stadium, using the slope to pick up momentum as it unleashed a lightning fast barrage of attacks upon it's opponent, dealing ${diff} damage!`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed2});
	}
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = VictoryValkyrie;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
