const { EmbedBuilder } = require("discord.js");
const { readdirSync } = require("fs");

function CommmandsName(folders) {
  const file = readdirSync(`${process.cwd()}/commands/${folders}`); // files from command folder
  const name = file.map((val) => val.split(".")[0]); // this will return files name
}

// this will display all commands for music folder only
function Music(bot) {
  return new EmbedBuilder()
    .setTitle("Music " + CommmandsName("Music").length)
    .setAuthor({
      name: bot.user.username,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(CommmandsName("Music").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack");
}

function BotInfo(bot) {
  return new EmbedBuilder()
    .setTitle("BotInfo " + CommmandsName("BotInfo").length)
    .setAuthor({
      name: bot.user.username,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(CommmandsName("BotInfo").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack");
}

function Other(bot) {
  return new EmbedBuilder()
    .setTitle("Other Commands" + CommmandsName("Other").length)
    .setAuthor({
      name: bot.user.username,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(CommmandsName("Other").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack");
}

module.exports = { Music, BotInfo, Other };
