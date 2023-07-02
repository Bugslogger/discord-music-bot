// discord.js imports
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations } =
  GatewayIntentBits;

// distube import
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");

const { client_id } = require("./configuration/config.json");
const loadcommands = require("./utils/loadcommands");

// to access bot token from .env
require("dotenv").config();

const bot = new Client({
  intents: [Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations],
});

bot.commands = new Collection(); // creates commands collection
bot.aliases = new Collection(); // aliases is a shortcut of commands

// distube setup
bot.distube = new DisTube(bot, {
  leaveOnEmpty: false,
  leaveOnFinish: false,
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  nsfw: true, // depends on you if you want to play nsfw content or not. if you don't want to play set it to false
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true,
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin({
      update: false,
    }),
  ],
});

//  load discord.js events
require("./utils/loadEvents")(bot);
//  load distube events
require("./utils/loadDistubeEvents")(bot);
loadcommands(bot);
// register slash commands
require("./utils/RegisterSlash")(bot, client_id, process.env.TOKEN);

bot.login(process.env.TOKEN);
