const { isVoiceChannel, TextEmbed } = require("../../utils/function");

module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return; // this will check if user is in voice or not.

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.pause(interaction);
      TextEmbed(interaction, { title: "You paused song!", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Nothing is playing!", desc: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "pause",
  aliases: ["p"],
  description: "Pause song.",
};
