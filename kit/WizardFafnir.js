const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class WizardFafnir extends Beyblade {
  constructor(firstOwner, id){
    super("Wizard Fafnir", "Stamina", "https://vignette.wikia.nocookie.net/beyblade/images/1/1d/BBGT_Wizard_Fafnir_Ratchet_Rise_Sen_Beyblade.png/revision/latest?cb=20190419113639", "Spin Steal", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Wizard Fafnir used **Spin Steal**. 1 stamina stolen from the opponent..`)
    .setColor("#551a8b");
    victim.stamina = victim.stamina -1;
    acted.stamina = acted.stamina + 1;
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = WizardFafnir;