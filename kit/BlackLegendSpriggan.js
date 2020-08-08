//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BlackLegendSpriggan extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Black Legend Spriggan", "Balance", "https://i.ibb.co/CvpGFLt/BlackLS.png", "Upper launch, Axe Launch", firstOwner, id);
	this.sdchangable = true;
	this.sd = "Right";
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.bey.sd == "Right") {
		let before = victim.hp;
    let base = 50;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
		 victim.stamina = victim.stamina - 2;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Legend Spriggan used **Upper Launch**.`)
	.setDescription(`Legend Spriggan climbed the slope of the stadium, speeding back down and using the sloped blade on it's layer to strike from under the opponent for ${diff} damage! Destabilization dropped the opponent's stamina by 2!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.bey.sd == "Left") {
		  let before = victim.hp;
    let base = 60;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
		 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Legend Spriggan used **Axe Launch**.`)
	.setDescription(`Spriggan used the spiky rubber on it's Merge driver to increase friction against the stadium, the larger surface area drastically boosting it's speed and power at the cost of 1 stamina. Spriggan swiftly changed it's trajectory as it used the flat contact point on it's layer to smash into the opponent for ${diff} damage.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = BlackLegendSpriggan;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
