const fs = require("fs");
const Discord = require("discord.js");
let list = new Discord.Collection();

async function check(){
return new Promise((resolve, reject) => {
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
resolve(true);
});
}

check();

console.log("Basic check passed! Advanced check beginning.")
  let dummy = {
    hp: 1000000,
    atk: 1000000,
    stamina: 1000000,
    bey: {
      name: "Epic Bey for Testing Purposes",
      type: "Balance",
      firstOwner: "1",
      id: "1",
      image: "https://vignette.wikia.nocookie.net/unanything/images/9/9a/638771CC-8977-4AA9-96BE-741D96CDF3E1.jpeg/revision/latest?cb=20190825143621",
      move: "Malaysia of Smash",
      level: 100,
      xp: 1000000,
      sd: "Right",
      bbname: "Yes",
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
      image: "https://vignette.wikia.nocookie.net/unanything/images/9/9a/638771CC-8977-4AA9-96BE-741D96CDF3E1.jpeg/revision/latest?cb=20190825143621",
      move: "Merdeka of Smash",
      level: 100,
      xp: 1000000,
      sd: "Left",
      bbname: "No"
    }
  }
function fakesend(content){return true}
let biomessage = {
    channel: {
        createMessage: fakesend,
        sendMessage: fakesend,
        send: fakesend
    }
}
fs.readdir("./kit/beys/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js" && f !== "template.js");
  if (jsfile.length <= 0) {
    throw "No Bey found. Please make a Bey first."
  }

  jsfile.forEach((f, i) => {
    let props = require(`./kit/beys/${f}`);
    let bey = new props("123", 1);
    try {
    let passed = bey.check(player, dummy, biomessage, {}) || false;
    }catch(err){throw err}
    if(passed === true) try{bey.passed(player, dummy, biomessage, {})}catch(err){throw err}
    try{bey.special(player, dummy, biomessage, {})}catch(err){throw err}
    console.log(`${f} passed!`);
  });
});
console.log("Advanced check gone through! Please fix the errors if any and the Beys should be ready for submission!");
