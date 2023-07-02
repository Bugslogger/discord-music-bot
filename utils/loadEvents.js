//  importing fs module from nodejs

//  fs = file system module is responsible for
//  read/write of directory[file/folder].
const fs = require("fs");

/**
 *
 * @param {any} bot
 *
 * here we will load all the events from `events folder`
 */
module.exports = (bot) => {
  //  here we are reading the files from events folder
  try {
    fs.readdir("events/", (error, files) => {
      files.forEach((file) => {
        if (!file.endsWith(".js")) return; // if file is not a js file then terminate code execution (loop will nnot terminate).
        // if file is a .js file
        const event = require(`../events/${file}`); // here it gets file name from events folder
        /**
         * For Example:
         * from event folder it got
         * ready.js
         * in below code it will split it with dot (.) and returns array
         * returns: ["ready","js"]
         * now the event name is ready
         * so, here i will take the array value from index 0 [which is "ready" and store it to `eventname` variable]
         */
        let eventname = file.split(".")[0];

        /**
         * this `bot` parameter passed from index.js
         *
         */
        bot.on(eventname, event.bind(null, bot));
        delete require.cache[require.resolve(`../events/${file}`)];
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// here we completed load events
