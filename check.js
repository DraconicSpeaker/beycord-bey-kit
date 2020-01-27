const fs = require("fs");
const Discord = require("discord.js");

fs.readdir("./kit/beys/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js" && f !== "template.js");
  if (jsfile.length <= 0) {
    console.log("No Bey found. Please make a Bey first.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./kit/beys/${f}`);
    let bey = new prop("123", 1);
    if(!bey.name) return console.log(`${f} incomplete. No name found.`);
    if(!bey.type) return console.log(`${f} incomplete. No type found.`);
    if(!bey.move) return console.log(`${f} incomplete. No special move name found.`);
    if(!bey.image) return console.log(`${f} incomplete. No image found.`);
    console.log(`${f} checked!`);
  });
});
console.log(`All Beys checked and are ready to be submitted.`);
