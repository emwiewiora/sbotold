module.exports = {
	name: 'coin',
	cooldown: 2,
	description: 'Simple coin flip for heads or tails',
	execute(message, args) {
		// since Math.random picks a number between 0 and 1, no fancy formula needed.
		const flip = Math.random();

		if (flip >= 0.5) {
			message.channel.send('Heads');
		} else {
			message.channel.send('Tails');
		}
	},
};