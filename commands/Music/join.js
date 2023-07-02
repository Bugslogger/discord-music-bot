const { isVoiceChannel } = require("../../utils/function");

// but we need to check if user is in voice channel or not before playing song.
module.exports.run = async (bot, interaction) => {
  try {
    let voice = interaction.member.voice.channel; // user voice channel

    if (isVoiceChannel(interaction)) {
      bot.distube.voice.join(voice);
      interaction.reply(bot.user.username + " Joined Voice Channel"); // make bot join your voice channel
    } else {
      interaction.reply("first you need to voice channel");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "join",
  aliases: ["j"],
  description: "bot will join your voice channel",
};
