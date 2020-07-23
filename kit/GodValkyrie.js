//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class GodValkyrie extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("God Valkyrie", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/f/fb/Beyblade_God_Valkyrie.png/revision/latest?cb=20200126233810", "Passive: God Reboot, Bound Jet Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	 let before = victim.hp;
    let base = 40;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.25; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
	acted.stamina = acted.stamina + 1;
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
	.setTitle(`[${acted.username}] God Valkyrie used **Jet Bound Launch**.`)
	.setDescription(`Valkyrie initiated it's Jet Launch technique, smashing into the stadium walls repeatedly and bouncing off them to increase speed. It combined this with the spring blades in it's layer, allowing it to repel off each one for a increased speed boost and to prevent stamina loss this turn. Valkyrie slashed into the enemy repeatedly with it's immense speed for ${diff} damage.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  }
  check(acted, victim, message, player){
    let bool;
    if (acted.stamina <= Math.round((acted.maxstamina/100)*70) && acted.hp > Math.round((acted.maxhp/100)*80)) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
    victim.hp = victim.hp - (acted.atk * 2)
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] God Valkyrie activated **God Reboot**.`)
  .setDescription(`Valkyrie's spin velocity dropped low enough to cause the spring loaded tabs in it's Reboot driver to pull in, causing the extended plastic tip to pull in and let the plastic base make contact with the stadium, granting Valkyrie a immense boost in spin velocity that strengthened it enough to deal double it's basic attack damage to the opponent.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = GodValkyrie;
//Made by Draconicspeaker and MrShadow
//Congrats, You know know how to make a Bey!
