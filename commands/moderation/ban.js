module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them (but not really).',
	guildOnly: true,
	permissions: 'BAN_MEMBERS',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to ban them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to ban: ${taggedUser.username}`);
		// not going to turn this part on until I can limit access to see it
		// member.ban(taggedUser.username);
	},
};

