module.exports = {
	name: 'status',
	cooldown: 10,
	aliases: ['bs'],
	description: 'Change the bot status',
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	execute(message, args) {
		// This won't work using message. The client parameter is only readable from under message.  Need to pass client to the command to access the .setPresence parameter.
		message.user.setPresence({ activity: { name: args } });



	},
};
