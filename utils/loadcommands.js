// here we will load all commands from `command folder`
const { readdirSync } = require("fs");

module.exports = function (bot) {
  let commandArray = [];
  try {
    //   here i will use `.cwd()` to access path of files/folders
    //   or simply you can also use `../` or `./` to access the files/folders
    //  use whatever you feel easy

    //   now we will load each .js files from all folders
    // inside commnads folder

    //   this returns array
    //  we will map it.
    readdirSync(`${process.cwd()}/commands`).forEach((folders) => {
      // console.log(folders);
      // getting files from each folders
      const file = readdirSync(`${process.cwd()}/commands/${folders}`).filter(
        (files) => {
          // check if the files ends with .js extension or not
          //  if ends with .js extension then return the file
          // console.log(files);
          return files.endsWith(".js");
        }
      );

      // accessing each js files
      for (let commandName of file) {
        // here we are getting each files from command folders
        const command = require(`${process.cwd()}/commands/${folders}/${commandName}`);

        if (!commandName) return; // if there no command it will terminate
        // adding files config in array
        commandArray.push(command.config);
        bot.commands.set(command.config.name, command);
      }
    });
    bot.command = commandArray;
  } catch (error) {
    console.log(error);
  }
};

/**
 * here it is completed
 * if you have any question ask me in discord server link is in description
 */
