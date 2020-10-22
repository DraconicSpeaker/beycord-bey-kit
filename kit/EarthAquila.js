//Import required modules
const Discord = require("discord.js");
const Eris = require("eris");
const Beyblade = require("./Beyblade.js");

// Change NewBey to the Bey's name with spaces and special character removed.
class EarthAquila extends Beyblade {
//Set up the Bey's information. Change "Name", "Type", "Image Link" and "Special Move Name" to what they are supposed to be.
  constructor(firstOwner, id){
    super("Earth Aquila", "Defense", "https://i.imgur.com/26bNPbc.png", "Stream Slash\nPassive: Counter Smash", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    
        let before = victim.hp;
    let base = 50;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.5; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    acted.stamina = acted.stamina - 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] (`Earth Aquila used **Stream Slash**.`)
        .setDescription (`${diff} damage dealt!\n-1 stamina penalty.`) 
    .setColor("#551a8b");
    
    message.channel.send(embed);
 }
   check(acted, victim, message, player){
    let chance = Math.floor(math.random()*9);
    let bool;
    if (victim.move === "Fight");
    if (acted.hp >= ((acted.maxhp/100)*50) && chance === 1) bool = true;
    else bool = false;
    return bool;
  }
  passed(acted, victim, message, player){
	  victim.hp = victim.hp - victim.atk
    victim.atk = victim.atk = 0
    acted.stamina = acted.stamina - 1
    let embed = new Discord.MessageEmbed()
  .setTitle(`[${acted.username}] Earth Aquila used **Counter Smash**.`)
  .setDescription(`Incoming damage dodged and countered!\n-1 stamina penalty.`)
   .setColor("#551a8b");
    message.channel.createMessage({embed:embed});
  }
  //The displayInfo function doesn't need to be modified as it updates by itself. :O
  displayInfo(message){
@@ -30,6 +58,6 @@ class EarthAquila extends Beyblade {
}

//Make this file represents the Bey.
module.exports = EarthAquila;
