// first we need to load distube events
const fs = require("fs");
//  this will be similar as loadEvent.js
module.exports = (bot) => {
  try {
    fs.readdir("distube/", (err, files) => {
      files.forEach((file) => {
        if (!file.endsWith(".js")) return; // if file is not a js file then terminate code execution (loop will nnot terminate).
        const event = require("../distube/" + file); // get all file from distube folder
        let eventname = file.split(".")[0];

        bot.distube.on(eventname, event.bind(bot));
        delete require.cache[require.resolve(`../distube/${file}`)];
      });
    });
  } catch (error) {
    console.log(error);
  }
};
