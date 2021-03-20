module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
	guildOnly: true,
	permissions: 'BAN_MEMBERS',
	args: true,
	execute(message, args) {
		// the @user = <@!816456423830716416> but you can only ban by userID. so we need to take off the extra characters at the begining and end.
		if (args[0].startsWith("<")) {
			args[0] = args[0].substring(3);
			console.log(args[0]);
			args[0] = args[0].substring(0, (args[0].length - 1));
			console.log(args[0]);
		}
		// bans the userId and grabbs any errors and prints them to the console
		message.guild.members.ban(args[0])
			.catch((err) => console.log(err));

		console.log(args[0] + ' was just banned.');
	},
};