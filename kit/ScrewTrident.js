//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class ScrewTrident extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Screw Trident", "Stamina", "https://i.ibb.co/qnq4y25/trident.png", "Screw Counter", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Screw Trident failed to use **Screw Counter**`)
	.setDescription(`but has failed sense the opponent didn't deliver a basic attack to steal spin power from!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 let before = victim.hp;
    let base = 30;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	 acted.atk = victim.atk;
	 acted.stamina = acted.stamina + 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Screw Trident used **Screw Counter**.`)
	.setDescription(`Trident used the rebounding rubber on it's layer to absorb the opponent's attack, the increase in spin velocity granting Trident 2 stamina and speed boost as it dashed around the stadium perimeter before smashing head on into the opponent for ${diff} damage + the opponent's attack damage."`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = ScrewTrident;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
