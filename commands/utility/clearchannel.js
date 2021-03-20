module.exports = {
	name: 'clearchannel',
	cooldown: 10,
	aliases: ['cc'],
	description: 'This will clear all the messages in the current channel',
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	execute(message) {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			message.channel.messages.fetch().then((results) => {
				console.log(results);
				message.channel.bulkDelete(results);
			});
		}
	},
};