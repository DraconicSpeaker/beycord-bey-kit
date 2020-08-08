//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class KreisSatan extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Kreis Satan", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/5/5a/Beyblade_Satomb.png/revision/latest?cb=20180716232711", "Roller Drift, Cyclone Loop", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
    switch(true){
      case victim.atk = 0 && acted.stamina > Math.round((acted.maxstamina/100)*70):
        let embed = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Kreis Satan used **Cyclone Loop**.`)
		  .setDescription(`Satan used the free-spinning wheels on it's Loop tip to catch onto the stadium slope and speed up at the cost of 1 stamina, before smashing into the opponent for ${diff} damage!`)
          .setColor("#551a8b");
		  let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.15; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
		  acted.stamina = acted.stamina - 1;
        message.channel.createMessage({embed:embed});
        break;
      case victim.atk = 0 && acted.stamina < Math.round((acted.maxstamina/100)*70):
        let embed2 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Kreis Satan failed to use **Cyclone Loop**.`)
		  .setDescription(`Satan tried to use Cyclone loop, but it failed due to interference by the opponent or lack of stamina!`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed2});
        break;
		case victim.atk > 0 && acted.stamina > Math.round((acted.maxstamina/100)*70):
		let before = victim.hp;
    let base = 30;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
		  victim.atk = Math.round((victim.atk/100)*40);
        let embed3 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Kreis Satan used **Roller Drift**.`)
		  .setDescription(`Satan was knocked off balance by the enemy's attack, using the free-spinning wheels on it's Loop tip to reduce damage by 60%, and drift around the stadium, smashing into the enemy for ${diff}!`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed3});
		break;
		case victim.atk > 0 && acted.stamina < Math.round((acted.maxstamina/100)*70):
        let embed4 = new Discord.RichEmbed()
          .setTitle(`[${acted.username}] Kreis Satan failed to use **Roller Drift**.`)
		  .setDescription(`Satan tried to use Roller Drift, but it couldn't gather the friction against the wheels to do so due to being unable to tilt from a incoming attack! Or maybe stamina issues?`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed4});
		break;
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = KreisSatan;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
