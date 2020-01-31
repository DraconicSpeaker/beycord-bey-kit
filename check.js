const fs = require("fs");
const Discord = require("discord.js");
let list = new Discord.Collection();

async function check(){
fs.readdir("./kit/beys/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js" && f !== "template.js");
  if (jsfile.length <= 0) {
    throw "No Bey found. Please make a Bey first."
  }

  jsfile.forEach((f, i) => {
    let props = require(`./kit/beys/${f}`);
    let bey = new props("123", 1);
    if(!bey.name) throw `${f} incomplete. No name found.`;
    if(!bey.type) throw `${f} incomplete. No type found.`;
    if(!bey.move) throw `${f} incomplete. No special move name found.`;
    if(!bey.image) throw `${f} incomplete. No image found.`;
    console.log(`${f} checked!`);
  });
});
}

check();
console.log("All Beys checked, is there anything else you want to do? 1: Quit, 2: Test Special")
let option = prompt("What would you like to do?", "1");
if(option === "1") return console.log("Exited check.js");
if(option === "2"){
  let dummy = {
    hp: 1000000,
    atk: 1000000,
    stamina: 1000000,
    bey: {
      name: "Epic Bey for Testing Purposes",
      type: "Balance",
      firstOwner: "1",
      id: "1",
      image: "",
      move: "Malaysia of Smash",
      level: 100,
      xp: 1000000
    }
  }
  let player = {
    hp: 1000000,
    atk: 1000000,
    stamina: 1000000,
    bey: {
      name: "Epic Bey for Testing Purposes",
      type: "Balance",
      firstOwner: "1",
      id: "1",
      image: "",
      move: "Merdeka of Smash",
      level: 100,
      xp: 1000000
    }
  }
}
if(option !== "1" && option !== "2") throw "Invalid command.";
