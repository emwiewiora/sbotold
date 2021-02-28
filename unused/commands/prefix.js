module.exports = {
	name: 'avatar',
	cooldown: 2, 
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	guildOnly: true, // this will make a command only usable in a server(guild). will NOT work in DM
	execute(message, args) {
		if (args.length) {
			await prefixes.set(message.guild.id, args[0]);
			return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
		}
	
		return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id) || globalPrefix}\``);
	},
};