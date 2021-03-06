//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DeepChaos extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Deep Chaos", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/4/47/Beyblade_Deep_Chaos.png/revision/latest?cb=20180717000213", "Levitation Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Deep Chaos failed use **Levitation Launch**.`)
		.setDescription(`Chaos cannot use Lift Launch, sense the opponent did not use a basic attack.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 let before = victim.hp;
    let base = 30;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	 victim.atk = Math.round((victim.atk/100)*75);
	 victim.hp = victim.hp - 30;
	 acted.stamina = acted.stamina + 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Deep Chaos used **Levitation Launch**.`)
	.setDescription(`Chaos used the momentum of it's opponent's attack and the Flow frame to glide into the air briefly, landing on it's Bearing driver delicately to reduce stamina loss and the impact of the opponent's attack, granting 2 stamina and 25% damage reduction. Chaos retaliated by using the spring loaded fang-like contact points, striking the opponent with the sharp point to deal ${diff} damage.`)
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
module.exports = DeepChaos;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
