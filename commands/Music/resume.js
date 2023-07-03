const { isVoiceChannel, TextEmbed } = require("../../utils/function");

module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return; // this will check if user is in voice or not.
    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (!queue.playing) {
      queue.resume(interaction);
      TextEmbed(interaction, { title: "You resumed song!", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Already playing!", desc: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "resume",
  aliases: ["r"],
  description: "Resumes current playing song.",
};
