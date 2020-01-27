const Discord = require("discord.js");
const fs = require("fs")

class Beyblade {
  constructor(name, type, image, special, firstOwner, id){
    this.name = name;
    this.type = type;
    this.image = image;
    this.firstOwner = firstOwner;
    this.move = special;
    this.level = 1;
    this.xp = 0;
    this.id;
    if(id){
    this.id = id;
      return;
    }
    let ids = JSON.parse(fs.readFileSync("./beyids.json", "utf8"));
    if(!ids[this.name]){
      ids[this.name] = {
        latest: 0
      };
    }
    let iid = ids[this.name].latest + 1;
    this.id = iid;
    ids[this.name].latest = iid;
    fs.writeFile("./beyids.json", JSON.stringify(ids), err => {
    if (err) console.log(err);
  });
    let beyid = this.id
  }
  special(acted, victim, message, player){
    acted.energy = 0;
  }
  displayInfo(message){
    let embed = new Discord.RichEmbed()
    .setColor("#7f7fff")
    .setTitle(`**${this.name}**'s Information`)
    .setThumbnail(this.image)
    .addField("Level", this.level)
    .addField("EXPs", this.xp)
    .addField("Type", this.type)
    .addField("Special Move", this.move)
    .addField("ID", this.id)
    .addField("Original Blader ID",  this.firstOwner);
    
    message.channel.send(embed);
  }
}

module.exports = Beyblade;
