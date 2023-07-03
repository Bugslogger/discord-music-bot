const { isVoiceChannel, TextEmbed } = require("../../utils/function");

module.exports.run = (bot, interaction) => {
  if (!isVoiceChannel(interaction)) return; // this will check if user is in voice or not.

  let volume = interaction.options.get("volume").value;

  const queue = bot.distube.getQueue(interaction);

  if (!queue) {
    TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
    return;
  }

  if (queue.playing) {
    queue.setVolume(volume);
    TextEmbed(interaction, { title: `Volume: ${volume}%`, desc: "" });
  }
};

module.exports.config = {
  name: "volume",
  aliases: ["vol"],
  description: "increase or decrease song volume.",
  options: [
    {
      name: "volume",
      description: "Enter value from 0 to 100.",
      type: 4, // type 4 is for number
      min_value: 0, // minimum value
      max_value: 100, // maximum value
      required: true,
    },
  ],
};
