//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("../class/Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class KaiserKerbeus extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Kaiser Kerbeus", "Defense", "https://vignette.wikia.nocookie.net/beyblade/images/8/88/Beyblade_Kerbeus.png/revision/latest?cb=20181219001015", "Chain Launch", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
   if (victim.atk = 0) {
	   victim.stamina = victim.stamina - 3;
	   acted.stamina = acted.stamina + 2;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Kaiser Kerbeus used **Chain Launch**. Kerbeus went on the offense, using it's defensive, chain-like layer to attack the opponent as the chains shredded away at the opponent's stamina, draining it by 3 while increasing it's own by 2!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed});
	 } else if (victim.atk > 0) {
	 victim.atk = Math.round((victim.atk/100)*50);
	 acted.stamina = acted.stamina + 2;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Kaiser Kerbeus used **Chain Launch**. Kerbeus used it's defensive, chain-like layer to parry the enemy attacks and reduce incoming damage by 50%, reducing recoil enough to preserve stamina and increase it by 2!`)
    .setColor("#551a8b");
	message.channel.sendMessage({embed: embed2});
  }}
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
    super.displayInfo(message);
  }
}

//Make this file represents the Bey.
module.exports = KaiserKerbeus;
//Made by MrShadow and Draconicspeaker
//Congrats, You know know how to make a Bey!
