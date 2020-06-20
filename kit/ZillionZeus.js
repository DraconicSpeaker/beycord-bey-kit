//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class ZillionZeus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Zillion Zeus", "Stamina", "https://i.ibb.co/NYmmFdy/zeus.png", "Infinity Launch /n Iron Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.stamina > Math.round((acted.maxstamina/100)*50)) {
		acted.stamina = acted.stamina + 3;
		victim.hp = victim.hp - 45;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Zillion Zeus used **Infinity Launch**. The iron balls within Zeus moved to the outer part of the layer, increasing outward weight distribution and increasing stamina by 3. The weight distribution allowed Zeus to counter enemy attacks and deal 45 damage!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (acted.stamina <= Math.round((acted.maxstamina/100)*50)) {
		 acted.stamina = acted.stamina + 1;
		 victim.atk = Math.round((victim.atk/100)*20);
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Zillion Zeus used **Iron Launch**. The iron balls within Zeus' layer moved to the center, granting a centralized weight distribution and preventing stamina loss this turn! The shifted weight absorbed some attacks, reducing incoming damage by 80%.`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = ZillionZeus;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
