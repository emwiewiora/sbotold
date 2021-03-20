module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
	execute(message, ...args) {
		// if (!message.mentions.users.size) {
		// 	return message.reply('you need to tag a user in order to kick them!');
		// }
		const member = message.guild.members.cache.get(args[0]);
		console.log(args[0]);
		// const member = message.mentions.users.first();
		if (member) {
			member
				.kick()
				.then((member) => message.channel.send(`${member} was kicked.`))
				.catch((err) => message.channel.send('I cannot kick that user :('));
		}
		else {
			message.channel.send('That member was not found');
		}
		// message.channel.send(`You wanted to kick: ${member}`);

		// not going to turn this part on uuntil I can limit access to see it
		// message.mentions.users.kick();
	},
};