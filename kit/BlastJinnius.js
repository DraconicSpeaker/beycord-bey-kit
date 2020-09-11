//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BlastJinnius extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Blast Jinnius", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/e/ed/Beyblade_Jinnius.png/revision/latest?cb=20180716235324", "Cyclone Wall, Cyclone Counter", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		 acted.hp = acted.hp + 40;
		 acted.stamina = acted.stamina + 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Blast Jinnius used **Cyclone Wall**.`)
	.setDescription(`Jinnius' outer layer slid up from centrifugal force, exposing a smooth surface that reduces knockback from incoming attacks greatly, healing 40 hp and increasing stamina by 1.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 let before = victim.hp;
    let base = 45;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	 acted.atk = victim.atk;
	 victim.atk = Math.round((victim.atk/100)*75);
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Blast Jinnius used **Cyclone Counter**.`)
	.setDescription(`Jinnius' outer layer fell back down into place as the opponent struck the smooth exposed surface, interfering with their attack and reducing the damage from it by 25%. As Jinnius' layer fell back down, it smashed the opponent into the stadium floor for ${diff} damage + the opponent's attack damage.`)
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
module.exports = BlastJinnius;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
