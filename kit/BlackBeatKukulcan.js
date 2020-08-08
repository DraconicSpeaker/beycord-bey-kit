//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BlackBeatKukulcan extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Black Beat Kukulcan", "Attack", "https://ibb.co/YQQ8S0s", "Thunder Attack, Trigger Attack", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.hp > Math.round((acted.maxhp/100)*50)) {
		let before = victim.hp;
    let base = 50;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Beat Kukulcan used **Thunder Attack**.`)
	.setDescription(`Kukulcan utilized the depression in the center of it's Hunter driver, imitating a hollowed tip with a lack of surface area, but using the rubber to create a tight spin path, allowing it to barrage the opponent with swift attacks for ${diff} damage.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp <= Math.round((acted.maxhp/100)*50)) {
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
	
	 victim.stamina = victim.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Black Beat Kukulcan used **Trigger Attack**.`)
	.setDescription(`Kukulcan's sublayer under the main shifted as it took damage and grew closer to bursting, unlocking the yellow claw-like contact points and causing them to extend out from centrifugal force. Kukulcan slammed into the opponent, the exposed contact points dishing out a heavy attack for ${diff} damage. The destabilization that followed dropped the opponent's stamina by 1.`)
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
module.exports = Black BeatKukulcan;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
