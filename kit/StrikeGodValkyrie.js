//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class StrikeGodValkyrie extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Strike God Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/7/77/Strike_god_valkyrie.png/revision/latest?cb=20181210105204", "Passive: Ultimate Reboot, God Slash ", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    if (acted.stamina > Math.round((acted.maxstamina/100)*20)) {
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
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Strike God Valkyrie used **God Slash**.`)
	.setDescription (`Valkyrie utilized the three locked blades on it's layer as a single, long blade that's bolstered by it's high spin velocity to slash across the enemy's layer for ${diff} damage.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.stamina <= Math.round((acted.maxstamina/100)*30)) {
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Strike God Valkyrie failed to use **God Slash**.`)
	.setDescription (`Valkyrie's spin velocity isn't high enough to use God Slash properly.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }}
  check(acted, victim, message, player){
    let bool;
    if (acted.stamina <= Math.round((acted.maxstamina/100)*80) && acted.hp > Math.round((acted.maxhp/100)*80)) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
    victim.hp = victim.hp - (acted.atk * 2.5)
	acted.stamina = acted.stamina - 1;
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] God Valkyrie activated **Ultimate Reboot**.`)
  .setDescription(`Valkyrie's Ultimate Reboot driver's tabs retract in, causing the rubber of the driver to make contact with the stadium floor and grant Valkyrie a massive boost in spin velocity, allowing it to move faster than ever as it smashed into the opponent for X2.5 it's basic attack damage! The rubber surface of Ultimate Reboot causes stamina to drop faster, reducing stamina by 1.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = StrikeGodValkyrie;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
