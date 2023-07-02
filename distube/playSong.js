/**
 * when distube starts playing new songs
 */

const { DistubeEmbedMessage } = require("../utils/function");

module.exports = (bot, queue, song) => {
  const songs = {
    title: "Now Playing",
    desc: `${queue.name}`,
  };

  try {
    DistubeEmbedMessage(bot, songs);
  } catch (error) {
    console.log(error);
  }
};
