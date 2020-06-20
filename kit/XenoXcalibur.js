//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class XenoXcalibur extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Xeno Xcalibur", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/2/28/Beyblade_Xcalibur.png/revision/latest?cb=20181219003322", "One Impact /n Double Impact", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.hp > 60) {
		 victim.hp = victim.hp - 60;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xeno Xcalibur used **One Impact**. Xcalibur used the saber on it's layer to slash away at the opponent with incredible force, dealing 60 damage!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (acted.hp <= 60) {
	 victim.hp = victim.hp - 80;
	 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xeno Xcalibur used **Double Impact**. Xcalibur's Magnum disc aligned with the saber on it's layer, allowing it to slash away at the opponent with incredible weight behind the attack, dealing 80 damage! The imbalance this causes reduced stamina by 1.`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = XenoXcalibur;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
