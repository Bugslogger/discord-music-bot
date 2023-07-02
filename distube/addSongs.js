const { DistubeEmbedMessage } = require("../utils/function");

module.exports = (bot, queue, song) => {
  let songs = {
    title: "Added To Queue",
    desc: `${queue.name}`,
  };

  try {
    DistubeEmbedMessage(bot, songs);
  } catch (error) {
    console.log("Distube Error: ", error);
  }
};

//  Distube events done.