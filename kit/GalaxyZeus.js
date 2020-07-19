//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GalaxyZeus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Galaxy Zeus", "Stamina", "https://i.ibb.co/Q9B3csx/zeus.png", "Galaxy Launch, Starlight Barrage", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.stamina > Math.round((acted.maxstamina/100)*50)) {
		acted.stamina = acted.stamina + 2;
		victim.atk = Math.round((victim.atk/100)*65);
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Galaxy Zeus used **Galaxy Launch**.`)
	.setDescription(`The four metal balls within Zeus' layer moved to the four corners of the layer, increasingly outward weight distribution and stamina via flywheel effect, increasing stamina by 2! The strong outward weight blocked 35% of damage from incoming basic attacks.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.stamina <= Math.round((acted.maxstamina/100)*50)) {
		 let before = victim.hp;
    let base = 55;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
		 acted.stamina = acted.stamina + 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Galaxy Zeus used **Starlight Barrage**.`)
	.setDescription(`The four metal balls within Zeus' layer moved closer to the center as stamina dropped, increasing centralized weight distribution and conserving stamina as well as spin velocity. Zeus utilized the increase in spin velocity to barrage attack the opponent with it's low recoil design, dealing ${diff} damage while increasing it's own stamina by 2`)
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
module.exports = GalaxyZeus;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
