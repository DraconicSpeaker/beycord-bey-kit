const Discord = require("discord.js");
const Beyblade = require("./Beyblade.js");

class PrimeApocalypse extends Beyblade {
  constructor(firstOwner, id){
    super("Prime Apocalypse", "Attack", "https://vignette.wikia.nocookie.net/beyblade/images/e/ef/BBGT_Prime_Apocalypse_0Dagger_Ultimate_Reboot%27_Beyblade.png/revision/latest/scale-to-width-down/350?cb=20200114025326", "Dark-Flux", firstOwner, id);
  }
  special(acted, victim, message, player){
    super.special(acted, victim, message, player);
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Prime Apocalypse used **${victim.bey.move}**.`)
    .setColor("#551a8b");
    let fakesend = function(content){return true}
    //Fake message object
    let biomessage = {
        //Fake channel object
        channel: {
            //Fake createMessage function
            createMessage: fakesend
        }
    }
    victim.bey.special(acted,victim,biomessage,player);
    message.channel.createMessage({embed:embed});
  }
  displayInfo(message){
    super.displayInfo(message);
  }
}

module.exports = PrimeApocalypse;
