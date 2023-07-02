const { ActivityType } = require("discord.js");

/**
 *
 * @param {any} client
 *
 * Here client parameter is passed from index.js
 */
module.exports = (client) => {
  client.user.setActivity("Music Bot", {
    type: ActivityType.Playing,
  });

  console.log(`Logged in as ${client.user.tag}`);
};
