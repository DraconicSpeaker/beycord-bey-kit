const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class ShelterRegulus extends Beyblade {
  constructor(firstOwner, id){
    super("Shelter Regulus", "Balance", "https://vignette.wikia.nocookie.net/beyblade/images/b/b9/Beyblade_Shelter_Regulus.png/revision/latest?cb=20180716235739", "Shelter Defense", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.atk = 0;
    acted.stamina = acted.stamina + 2;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Shelter Regulus used **Shelter Defense**. It is now immune to all attacks in this round and stamina increased by 1.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = ShelterRegulus;