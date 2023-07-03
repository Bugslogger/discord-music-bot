const { isVoiceChannel, TextEmbed } = require("../../utils/function");

// this command will repeat your songs/makes loop for your songs in queue.
module.exports.run = (bot, interaction) => {
  if (!isVoiceChannel(interaction)) return; // this will check if user is in voice or not.

  let message = interaction.options.get("loop").value;
  const queue = bot.distube.getQueue(interaction);

  if (!queue) {
    TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
    return;
  }

  if (queue.playing) {
    mode = queue.setRepeatMode(parseInt(message) || 0);
    mode = mode ? (mode === 2 ? "Repeat queue" : "Repeat song") : "Off";
    TextEmbed(interaction, { title: `${mode}`, desc: "" });
  } else {
    TextEmbed(interaction, { title: "Nothing playing!", desc: "" });
  }
};

module.exports.config = {
  name: "loop",
  aliases: ["loop"],
  description: "Repeats songs.",
};
