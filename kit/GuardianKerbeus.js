//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GuardianKerbeus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Guardian Kerbeus", "Stamina", "https://i.ibb.co/FHhjdvm/guardian.png", "Underworld Chain Blitz /n Heavy Guardian Barrier", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (victim.atk = 0) {
		let before = victim.hp;
    let base = 35;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
		acted.stamina = acted.stamina + 1;
		victim.stamina = victim.stamina - 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Guardian Kerbeus used **Underworld Chain Blitz**.`)
	.setDescription(`Kerbeus absorbed the opponent's attack through the chain on it's layer, the chain pressing in and rebounding Kerbeus away from the enemy and into a stadium wall. It smacked against the wall and went flying into the air, before Kerbeus came crashing back down atop it's opponent with the chain fully recoiling back before it rebounded the enemy and smashed them into the stadium floor, dealing ${diff} damage and dropping their stamina by 1. Kerbeus negated stamina loss this turn.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
	 victim.atk = Math.round((victim.atk/100)*70);
	 victim.stamina = victim.stamina - 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Guardian Kerbeus used **Heavy Guardian Barrier**.`)
	.setDescription(`Kerbeus used the weight of it's Heavy disc to keep itself steady as the chains pushed in to absorb enemy attacks, reducing incoming basic attack damage by 30% and stalling out the battle to drop the opponent's stamina by 2.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = GuardianKerbeus;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
