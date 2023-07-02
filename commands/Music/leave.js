const { isVoiceChannel } = require("../../utils/function");

// but we need to check if user is in voice channel or not before playing song.
module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return; // it will check if user is in voice channel or not

    bot.distube.voices.leave(interaction);
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "leave",
  aliases: ["l"],
  description: "bot will join your voice channel",
};
