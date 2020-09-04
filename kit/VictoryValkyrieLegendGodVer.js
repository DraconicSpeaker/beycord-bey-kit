//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("./Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class VictoryValkyrieLegendGodVer extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Legend God Victory Valkyrie", "Attack", "https://i.imgur.com/3pPqVQs.png", "Legend Flash Assault\nPassive: Legendary Shield", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	  
	  let before = victim.hp;
    let base = 60;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.6; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage
	acted.stamina = acted.stamina - 2;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] (`Legend God Victory Valkyrie used **Legendary Flash Assault**.`)
        .setDescription (`${diff} damage dealt from the immense speed boost of Assault!\n-2 stamina from the friction.`) 
    .setColor("#551a8b");
    
    message.channel.send(embed);
  }
   check(acted, victim, message, player){
    let bool;
    if (acted.stamina >= Math.round((acted.maxstamina/100)50) && acted.hp <= Math.round((acted.maxhp/100)50)) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
	  victim.hp = victim.hp - Math.round((victim.atk/100*60))
	  victim.atk = Math.round((victim.atk/100*40))
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] Legend God Victory Valkyrie activated **Legendary Shield**.`)
  .setDescription(`60% of incoming damage blocked and reflected by the Bumper disc!`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = LegendGodVictoryValkyrie;

//Congrats, You know know how to make a Bey!
