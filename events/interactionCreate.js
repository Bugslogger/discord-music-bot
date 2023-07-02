/**
 * when user types any command in server this code will be executes first.
 *
 *
 */

const { permissions } = require("../configuration/config.json");
const { BotInfo, Music, Other } = require("../configuration/help");

module.exports = async (bot, interaction) => {
  try {
    if (interaction.isSelectMenu) {
      // here i'm addding menu from which user can select
      if (interaction.customId === "help") {
        switch (interaction.values[0]) {
          case "music":
            await interaction.reply({
              embeds: [Music(bot)],
              ephemeral: true,
            });
            break;
          case "botinfo":
            await interaction.reply({
              embeds: [BotInfo(bot)],
              ephemeral: true,
            });
            break;
          case "other":
            await interaction.reply({
              embeds: [Other(bot)],
              ephemeral: true,
            });
            break;
        }
      }
    }
    if (!interaction.isChatInputCommand()) return;

    const { SendMessage, VoiceJoin } = permissions; // for checking permissions

    const messageSendPerms = interaction.member.permissions.has(SendMessage); // if user/bot has send message permission
    // if user has permission to voice chaannels
    // const joinVoicePerms = interaction.member.permissions.has(VoiceJoin);

    if (!messageSendPerms) {
      console.log("no permission");
      await interaction.reply("You don't have permission to send message.");
      return;
    }

    const commandFile = bot.commands.get(interaction.commandName); // get command user has requested.
    console.log(bot.commands.get("play"));
    // console.log(bot);

    if (!commandFile) return;

    // if commmand found then run it.
    commandFile.run(bot, interaction); // here the run() method is called from commands file to execute code
  } catch (error) {
    console.log(error);
  }
};
