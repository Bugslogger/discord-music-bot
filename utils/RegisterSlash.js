/**
 * Registering slash commands
 */
const { REST, Routes } = require("discord.js");

module.exports = async (bot, client_id, TOkEN) => {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN); // need bot token

  try {
    const commands = await bot.command;
    if (!commands || commands === undefined) return;
    // console.log(commands);
    // return;

    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(client_id), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

//  Completed Register Slash commands
