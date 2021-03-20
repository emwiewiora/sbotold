module.exports = {
	name: '8ball',
	cooldown: 2,
	description: 'Shake the magic 8ball to answer your question.',
	execute(message, args) {
		const casepick = Math.floor(Math.random() * Math.floor(20));
		const sender = message.author;

		switch (casepick) {
		case 0:
			message.channel.send(`:8ball: It is certain, **${sender}**`);
			break;
		case 1:
			message.channel.send(`:8ball: It is decidedly so, **${sender}**`);
			break;
		case 2:
			message.channel.send(`:8ball: Without a doubt, **${sender}**`);
			break;
		case 3:
			message.channel.send(`:8ball: Yes – definitely, **${sender}**`);
			break;
		case 4:
			message.channel.send(`:8ball: You may rely on it, **${sender}**`);
			break;
		case 5:
			message.channel.send(`:8ball: As I see it, **${sender}**`);
			break;
		case 6:
			message.channel.send(`:8ball: Yes, **${sender}**`);
			break;
		case 7:
			message.channel.send(`:8ball: Most Likely, **${sender}**`);
			break;
		case 8:
			message.channel.send(`:8ball: Outlook good, **${sender}**`);
			break;
		case 9:
			message.channel.send(`:8ball: Signs point to yes, **${sender}**`);
			break;
		case 10:
			message.channel.send(`:8ball: Don’t count on it, **${sender}**`);
			break;
		case 11:
			message.channel.send(`:8ball: My reply is no, **${sender}**`);
			break;
		case 12:
			message.channel.send(`:8ball: My sources say no, **${sender}**`);
			break;
		case 13:
			message.channel.send(`:8ball: Outlook not so good, **${sender}**`);
			break;
		case 14:
			message.channel.send(`:8ball: very doubtful, **${sender}**`);
			break;
		case 15:
			message.channel.send(`:8ball: Reply hazy, **${sender}**`);
			break;
		case 16:
			message.channel.send(`:8ball: try again, **${sender}**`);
			break;
		case 17:
			message.channel.send(`:8ball: Ask again later, **${sender}**`);
			break;
		case 18:
			message.channel.send(`:8ball: Better not tell you now, **${sender}**`);
			break;
		case 19:
			message.channel.send(`:8ball: Cannot predict now, **${sender}**`);
			break;
		case 20:
			message.channel.send(`:8ball: Concentrate and ask again, **${sender}**`);
			break;
		}
	},
};