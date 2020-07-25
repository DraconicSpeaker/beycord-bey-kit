//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class ArcBahamut extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Arc Bahamut", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/e/ea/Beyblade_Arc_Bahamut.png/revision/latest?cb=20180717000037", "Passive: Final Guard, Final Crash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	if (acted.hp > Math.round((acted.maxhp/100)*70)) {
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Arc Bahamut failed to use **Final Crash**.`)
	.setDescription (`Final Guard must be active to use this special move.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp <= Math.round((acted.maxhp/100)*65)) {
		 let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Arc Bahamut used **Final Crash**.`)
	.setDescription(`Bahamut used the momentum of the opponent's attack to ride up the stadium slope, before it came back down and crashed into the opponent with it's low recoil layer to smash the opponent away, dealing ${diff} damage. losing 1 stamina`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
    
  }}
  check(acted, victim, message, player){
    let bool;
    if (acted.hp <= Math.round((acted.maxhp/100)*70)) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
    victim.atk = Math.round((victim.atk/100)*50);
	victim.hp = victim.hp - (victim.atk / 2);
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] Arc Bahamut activated **Final Guard**.`)
  .setDescription(`Bahamut utilized the shifted sublayer that filled in the gaps between it's contact points like a barrier. Granting Bahamut the defensive power to block 50% of incoming damage, and deal it back to the opponent.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = ArcBahamut;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
