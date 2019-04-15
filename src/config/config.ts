/**
 * Discord bot config.
 *
 * Revisions to this file should not be committed to the repository.
 */
export type BotConfig = {
  /** the Discord bot token. */
  token: string,
  /** Prefix used for bot commands. */
  prefix: string,
  /** The name of the role that gives ultimate power over the bot. */
  botOwnerRoleName: string,
  /** The bot will add reactions to the command messages indicating success or failure. */
  enableReactions: boolean,
};

require("dotenv").config();
export let config: BotConfig = {
  token: process.env.DISCORD_TOKEN,
  prefix: process.env.COMMAND_PREFIX || ".",
  botOwnerRoleName: "Mod",
  enableReactions: true,
};
