// this current randomly picks a number between 2 user input numbers.
// If no args are entered, it will default to nim = 1 & max = 10.

// does not work if you want the min something other than 1 and the min, max are close together
module.exports = {
	name: 'rnum',
	cooldown: 2,
	aliases: ['random'],
	description: 'Random number between your minimum and your maximum number',
	// args: true,
	execute(message, args) {
		// this will randomly pick a number >= args[0] and <=args[1]
		// if no args are included, default to random number between 1 & 10
		if (!args.length) {
			const rPick = Math.floor(Math.random() * 10);
			message.channel.send(rPick);
		} else if (args.length != 2) {
			message.channel.send('Please include the min and max number or use the default by not including any numbers');
		} else {
			const rPick = Math.floor(Math.random() * (args[1] - args[0] + 1) + args[0]);
			message.channel.send(rPick);
		}

	},
};