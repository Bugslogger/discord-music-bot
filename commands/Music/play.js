const { EmbedBuilder } = require("discord.js");
const { isVoiceChannel } = require("../../utils/function");

// but we need to check if user is in voice channel or not before playing song.
module.exports.run = async (bot, interaction) => {
  console.log(bot);
  try {
    console.log("1");
    if (!isVoiceChannel(interaction)) return; // it will check if user is in voice channel or not
    console.log("2");

    const embed = new EmbedBuilder()
      .setTitle("Reading your request")
      .setColor("DarkButNotBlack");

    await interaction.reply({ embeds: [embed] });

    //    voice channel where member is join in.
    let voice = interaction.member.voice.channel;
    // get the song name from user
    let message = interaction.options.get("song").value;

    await bot.distube.play(voice, message, {
      textChannel: interaction.channel,
      member: interaction.member,
      interaction,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "play",
  aliases: ["p"],
  description: "play commmand play's song.",
  options: [
    {
      name: "song",
      description: "Enter song name",
      type: 3,
      required: true,
    },
  ],
};
