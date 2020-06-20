const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class FlamingHotCheeto extends Beyblade {
    constructor(firstOwner, id){
        super("Flaming Hot Cheeto", "Stamina", "https://cdn.discordapp.com/attachments/698014789850365992/698058848602161152/FlamingHotCheeto.png", "Cheeto Stain Tornado", firstOwner, id);
    }
    special(acted, victim, message, player){
        super.special(acted, victim, message, player);

        victim.hp = victim.hp - 58;
        acted.stamina = acted.stamina + 1;
        victim.stamina = victim.stamina - 1;

        let embed = new Discord.MessageEmbed()
        .setTitle(`[${acted.username}] Flaming Hot Cheeto used **Cheeto Stain Tornado**. 58 damage dealt and 1 stamina absorbed.`)
        .setColor("#551a8b");
    
        message.channel.send(embed);
    }
    displayInfo(message){
        super.displayInfo(message);
    }
}

module.exports = FlamingHotCheeto;