//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class NightmareLonginus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Nightmare Longinus", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/a/a5/Beyblade_Nightmare_Longinus.png/revision/latest?cb=20200218030950", "Metal Dragon Destructor, Metal Dragon Crush", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.hp > Math.round((acted.maxhp/100)*90)) {
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

		 acted.hp = acted.hp - 25;
		 acted.stamina = acted.stamina + 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Nightmare Longinus used **Metal Dragon Destructor**.`)
	.setDescription(`Longinus recoiled off a wall to gain speed at the cost of 25 hp, before slamming into the opponent for ${diff}! Longinus used the free spinning ring on it's Destroy driver to negate stamina loss this turn!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp <= Math.round((acted.maxhp/100)*90)) {
		 let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.5; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Nightmare Longinus used **Metal Dragon Crush**.`)
	.setDescription(`The metal dragon heads on Longinus' layer shifted behind the wings as it got closer to bursting point, putting weight into the two contact points as it gained a huge increase in strength as a result. Longinus crashed into the enemy with a fierce, heavyweight attack for ${diff} damage, the weight distribution throwing off balance and dropping stamina by 1`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = NightmareLonginus;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
