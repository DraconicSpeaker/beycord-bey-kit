//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class UnlockUnicorn extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Unlock Unicorn", "Defense", "https://i.ibb.co/fFqZBQf/Unicorn.png", "Horn Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Unlock Unicorn failed to use **Horn Launch**.`)
	.setDescription (`Unicorn attempted to use Horn Launch, but without any incoming attacks, it failed to do anything!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 
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
	
		 victim.stamina = victim.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Unlock Unicorn used **Horn Launch**.`)
	.setDescription (`Unicorn used the numerous contact points on it's Needle driver to create friction and resist the enemy attack, allowing it to stop knockback as it instead drove it's horn straight into the opponent for ${diff} damage, the destabilization from the attack dropped the opponent's stamina by 1.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = UnlockUnicorn;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
