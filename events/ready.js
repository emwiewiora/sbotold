const { Guild } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setPresence({ activity: { name: 'w!help' } });
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const gids = client.guilds.cache.map(guild => guild.id);
		const gnames = client.guilds.cache.map(guild => guild.name);

		// This will list all the guilds/servers that the bot is on.  guildId - guild name
		for (let i = 0; i < gids.length; i++) {
			console.log(gids[i], gnames[i]);
		}
	},
};