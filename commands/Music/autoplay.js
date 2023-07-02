const { isVoiceChannel } = require("../../utils/function");

// but we need to check if user is in voice channel or not before playing song.
module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return; // it will check if user is in voice channel or not
    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      interaction.reply("Queue is empty");
      return;
    }

    if (queue.playing) {
      const autoplay = queue.toggleAutoplay(interaction);
      interaction.reply("Autoplay is " + autoplay);
    } else {
      interaction.reply("Nothing is playing!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "autoplay",
  aliases: ["ap"],
  description: "autoplay",
};
