module.exports = {
	name: '8ball',
	cooldown: 2,
	description: 'Shake the magic 8ball to answer your question.',
	execute(message, args) {
		const casepick = Math.floor(Math.random() * Math.floor(20));

		switch (casepick) {
		case 0:
			message.channel.send('It is certain');
			break;
		case 1:
			message.channel.send('It is decidedly so');
			break;
		case 2:
			message.channel.send('Without a doubt');
			break;
		case 3:
			message.channel.send('Yes – definitely');
			break;
		case 4:
			message.channel.send('You may rely on it');
			break;
		case 5:
			message.channel.send('As I see it');
			break;
		case 6:
			message.channel.send('Yes');
			break;
		case 7:
			message.channel.send('Most Likely');
			break;
		case 8:
			message.channel.send('Outlook good');
			break;
		case 9:
			message.channel.send('Signs point to yes');
			break;
		case 10:
			message.channel.send('Don’t count on it');
			break;
		case 11:
			message.channel.send('My reply is no');
			break;
		case 12:
			message.channel.send('My sources say no');
			break;
		case 13:
			message.channel.send('Outlook not so good');
			break;
		case 14:
			message.channel.send('very doubtful');
			break;
		case 15:
			message.channel.send('Reply hazy');
			break;
		case 16:
			message.channel.send('try again');
			break;
		case 17:
			message.channel.send('Ask again later');
			break;
		case 18:
			message.channel.send('Better not tell you now');
			break;
		case 19:
			message.channel.send('Cannot predict now');
			break;
		case 20:
			message.channel.send('Concentrate and ask again');
			break;
		}
	},
};