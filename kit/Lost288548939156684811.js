const Beyblade = require("./Beyblade.js");
const Discord = require("discord.js");

class Lost288548939156684811 extends Beyblade {
  constructor(firstOwner, id){
    super("Lost 288548939156684811", "Balance", "https://media.discordapp.net/attachments/653723586816638996/661377209180880897/orbeas.png", "Almighty Orb", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    victim.hp = victim.hp - 32;
    let embed = new Discord.MessageEmbed()
    .setColor("#551a8b")
    .setTitle(`[${acted.username}] Lost 288548939156684811 used **Almighty Orb**. 32 damage dealt.`);
    message.channel.send(embed);
  }
  displayInfo(message){
    super.displayInfo(message);
}
}

module.exports = Lost288548939156684811;