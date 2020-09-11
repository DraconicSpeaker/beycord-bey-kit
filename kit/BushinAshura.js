//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class BushinAshura extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Bushin Ashura", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/0/00/BBGT_Bushin_Ashura_Hurricane_Keep_Ten_Beyblade.png/revision/latest?cb=20191030220638", "Keep Counter, Hurricane Defense", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
	
	 switch(true){
      case victim.atk > 0 && acted.stamina > Math.round((acted.maxstamina/100)*60):
        let embed = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura used **Keep Counter**.`)
		  .setDescription(`Ashura used it's the rubber on it's free-spinning Keep driver to reduce damage from the opponent's attack by 20%, before it quickly changed trajectory and smashed back into the opponent for ${diff} damage.`)
          .setColor("#551a8b");
		  
	let before = victim.hp;
    let base = 20;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	victim.atk = Math.round((victim.atk/100)*80);
        message.channel.createMessage({embed:embed});
        break;
      case victim.atk = 0 && acted.stamina > Math.round((acted.maxstamina/100)*60):
        let embed2 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura failed use **Keep Counter**.`)
		  .setDescription(`Ashura had no incoming basic attacks, so it had no knockback to rely on in order to trigger Keep Counter.`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed2});
        break;
		case victim.atk > 0 && acted.stamina < Math.round((acted.maxstamina/100)*60):
        let embed3 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura used **Hurricane Defense**.`)
		  .setDescription(`Ashura used it's wavering spin from low stamina to it's advantage, by exposing the Hurricane disc and it's free spinning extension, it was able to deflect the opponent away and reduce incoming damage by 40%, causing the opponent to smash into a wall instead. This dropped the opponent's stamina by 1.`)
          .setColor("#551a8b");
		  victim.atk = Math.round((victim.atk/100)*60);
		  victim.stamina = victim.stamina - 1;
        message.channel.createMessage({embed:embed3});
		break;
		case victim.atk = 0 && acted.stamina < Math.round((acted.maxstamina/100)*60):
        let embed4 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura failed use **Hurricane Defense**.`)
		  .setDescription(`Ashura had no incoming basic attacks, so Hurricane Defense has no attack to deflect.`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed4});
        break;
  }
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = BushinAshura;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
