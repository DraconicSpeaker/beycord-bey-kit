//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class XenoXcalibur extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Xeno Xcalibur", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/2/28/Beyblade_Xcalibur.png/revision/latest?cb=20181219003322", "One Impact, Double Impact", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.hp > Math.round((acted.maxhp/100)*60)) {
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
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Xeno Xcalibur used **One Impact**.`)
	.setDescription (`Xcalibur used the saber on it's layer to slash away at the opponent with incredible force, dealing ${diff} damage!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp =< Math.round((acted.maxhp/100)*60)) {
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
    .setTitle(`[${acted.username}] Xeno Xcalibur used **Double Impact**.`)
	.setDescription (`Xcalibur's Magnum disc aligned with the saber on it's layer, allowing it to slash away at the opponent with incredible weight behind the attack, dealing ${diff} damage! The imbalance this causes reduced stamina by 1.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
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
