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
      queue.stop(interaction);
      TextEmbed(interaction, { title: "I stopped playing.", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Nothing is playing!", desc: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "stop",
  aliases: ["st"],
  description: "Stop commmand stop's song.",
};
