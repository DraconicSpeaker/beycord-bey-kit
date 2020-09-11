//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class DrainFafnir extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Drain Fafnir", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/2/21/Beyblade_Drain_Fafnir.png/revision/latest?cb=20180716233052", "Drain Spin, Nothing Breaker", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    switch(true){
      case acted.stamina > Math.round((acted.maxstamina/100)*20):
        let embed = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Drain Fafnir used **Nothing Breaker**.`)
		  .setDescription(`Fafnir's Nothing driver slowly pressed in as a result of the incredible spin velocity generated from it's high stamina. The spring in the Nothing driver fully compressed after a bit, resulting in a flat surface that make contact with the stadium and granted Fafnir a immense boost of speed at the cost of 2 stamina. Fafnir used this boost of speed to smash into the opponent with immense power, dealing ${diff} damage.`)
          .setColor("#551a8b");
		  
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
	
		  acted.stamina = acted.stamina - 2;
        message.channel.createMessage({embed:embed});
        break;
      case victim.atk = 0 && acted.stamina < Math.round((acted.maxstamina/100)*20):
        let embed2 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Drain Fafnir failed use **Drain Spin**.`)
		  .setDescription(`Fafnir cannot use Drain Spin, there is no basic attack to steal stamina from.`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed2});
        break;
		case victim.atk > 0 && acted.stamina < Math.round((acted.maxstamina/100)*20):
        let embed3 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Drain Fafnir used **Drain Spin**.`)
		  .setDescription(`Fafnir used the rubber on it's layer to absorb the stamina of it's opponent upon getting attacked, increasing it's own stamina by 2 and dropping the opponent's by 1.`)
          .setColor("#551a8b");
		  acted.stamina = acted.stamina + 2;
		  victim.stamina = victim.stamina - 1;
        message.channel.createMessage({embed:embed3});
		break;
  }
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = DrainFafnir;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
