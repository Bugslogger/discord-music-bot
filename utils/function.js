const { EmbedBuilder, time } = require("discord.js");
const embed = new EmbedBuilder();

function DistubeEmbedMessage(interaction, object) {
  object?.title && embed.setTitle(object?.title);
  object?.desc && embed.setDescription(object?.desc);
  object?.time && embed.setTimestamp(object?.time);
  object?.image && embed.setImage(object?.image);
  object?.author && embed.setAuthor(object?.author);
  object?.thumbnail && embed.setThumbnail(object?.thumbnail);
  object?.url && embed.setURL(object?.url);
  embed.setColor("DarkButNotBlack");

  interaction.textChannel.send({ embeds: [embed] });
}

function isVoiceChannel(interaction) {
  try {
    const member = interaction.member.voice.channel; //user voice channel

    if (member === null) {
      // user is not in voice channel
      interaction.reply("You need to join voice channel");
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { DistubeEmbedMessage, isVoiceChannel };
