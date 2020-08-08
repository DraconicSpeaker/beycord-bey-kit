//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BlackSiegXcalibur extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Black Sieg Xcalibur", "Attack", "https://i.ibb.co/LPTcLF2/BlackSX.png", "Passive: Full Metal Surge, Double Impact, Triple Impact", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	  if (acted.hp > 60) {
		 
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
	
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Sieg Xcalibur used **Double Impact**.`)
	.setDescription(`Xcalibur utilized the metal within the sword on it's layer to deliver a fierce and heavy strike to the opponent for ${diff} damage.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp <= 60) {
		 
		 let before = victim.hp;
    let base = 70;
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
    .setTitle(`[${acted.username}] Black Sieg Xcalibur used **Triple Impact**.`)
	.setDescription(`Xcalibur took advantage of the shifted weight from it's 1 disc being aligned with the sword on it's layer, using the extra heavy weight to deliver a heavyweight blow to the opponent for ${diff} damage. The loss in stability from the shifted weight dropped stamina by 1.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
	 }
  }
   check(acted, victim, message, player){
    let bool;
    if (acted.hp <= Math.round((acted.maxhp/100)*50)) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
	  victim.hp = victim.hp - 30;
	  acted.stamina = acted.stamina + 1;
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] Black Sieg Xcalibur activated **Full Metal Surge**.`)
  .setDescription(`Xcalibur utilized the shifted weight from reaching the halfway point to bursting, the 1 disc aligned with the layer created a single concentrated point of contact on the sword to deal a heavyweight 30 damage attack to the opponent. The flat, metal Iron driver compensates for some of the imbalance caused by this, increasing stamina by 1.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = BlackSiegXcalibur;
//Made by Draconicspeaker and MrShadow
//Congrats, You know know how to make a Bey!
