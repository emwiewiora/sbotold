module.exports = {
	name: 'card',
	cooldown: 2,
	description: 'Let me draw your tarot card.',
	execute(message, args) {
		if (message.channel.name != 'card') {
			return message.reply('You need to be in the card room');
		}

		const casepick = Math.floor(Math.random() * Math.floor(77));
		message.channel.send('From the deck I pull... ');
		switch (casepick) {
		case 0:
			message.channel.send('The Fool');
			break;
		case 1:
			message.channel.send('The Magician');
			break;
		case 2:
			message.channel.send('The High Priestess');
			break;
		case 3:
			message.channel.send('The Empress');
			break;
		case 4:
			message.channel.send('The Emperor');
			break;
		case 5:
			message.channel.send('The Hierophant');
			break;
		case 6:
			message.channel.send('The Lovers');
			break;
		case 7:
			message.channel.send('The Chariot');
			break;
		case 8:
			message.channel.send('Strength');
			break;
		case 9:
			message.channel.send('The Hermit');
			break;
		case 10:
			message.channel.send('Wheel of Fortune');
			break;
		case 11:
			message.channel.send('Justice');
			break;
		case 12:
			message.channel.send('The Hanged Man');
			break;
		case 13:
			message.channel.send('Death');
			break;
		case 14:
			message.channel.send('Temperance');
			break;
		case 15:
			message.channel.send('The Devil');
			break;
		case 16:
			message.channel.send('The Tower');
			break;
		case 17:
			message.channel.send('The Star');
			break;
		case 18:
			message.channel.send('The Moon');
			break;
		case 19:
			message.channel.send('The Sun');
			break;
		case 20:
			message.channel.send('Judgment');
			break;
		case 21:
			message.channel.send('The World');
			break;
		case 22:
			message.channel.send('Ace of Wands');
			break;
		case 23:
			message.channel.send('Two of Wands');
			break;
		case 24:
			message.channel.send('Three of Wands');
			break;
		case 25:
			message.channel.send('Four of Wands');
			break;
		case 26:
			message.channel.send('Five of Wands');
			break;
		case 27:
			message.channel.send('Six of Wands');
			break;
		case 28:
			message.channel.send('Seven of Wands');
			break;
		case 29:
			message.channel.send('Eight of Wands');
			break;
		case 30:
			message.channel.send('Nine of Wands');
			break;
		case 31:
			message.channel.send('Ten of Wands');
			break;
		case 32:
			message.channel.send('Page of Wands');
			break;
		case 33:
			message.channel.send('Knight of Wands');
			break;
		case 34:
			message.channel.send('Queen of Wands');
			break;
		case 35:
			message.channel.send('King of Wands');
			break;
		case 36:
			message.channel.send('Ace of Cups');
			break;
		case 37:
			message.channel.send('Two of Cups');
			break;
		case 38:
			message.channel.send('Three of Cups');
			break;
		case 39:
			message.channel.send('Four of Cups');
			break;
		case 40:
			message.channel.send('Five of Cups');
			break;
		case 41:
			message.channel.send('Six of Cups');
			break;
		case 42:
			message.channel.send('Seven of Cups');
			break;
		case 43:
			message.channel.send('Eight of Cups');
			break;
		case 44:
			message.channel.send('Nine of Cups');
			break;
		case 45:
			message.channel.send('Ten of Cups');
			break;
		case 46:
			message.channel.send('Page of Cups');
			break;
		case 47:
			message.channel.send('Knight of Cups');
			break;
		case 48:
			message.channel.send('Queen of Cups');
			break;
		case 49:
			message.channel.send('King of Cups');
			break;
		case 50:
			message.channel.send('Ace of Swords');
			break;
		case 51:
			message.channel.send('Two of Swords');
			break;
		case 52:
			message.channel.send('Three of Swords');
			break;
		case 53:
			message.channel.send('Four of Swords');
			break;
		case 54:
			message.channel.send('Five of Swords');
			break;
		case 55:
			message.channel.send('Six of Swords');
			break;
		case 56:
			message.channel.send('Seven of Swords');
			break;
		case 57:
			message.channel.send('Eight of Swords');
			break;
		case 58:
			message.channel.send('Nine of Swords');
			break;
		case 59:
			message.channel.send('Ten of Swords');
			break;
		case 60:
			message.channel.send('Page of Swords');
			break;
		case 61:
			message.channel.send('Knight of Swords');
			break;
		case 62:
			message.channel.send('Queen of Swords');
			break;
		case 63:
			message.channel.send('King of Swords');
			break;
		case 64:
			message.channel.send('Ace of Pentacles');
			break;
		case 65:
			message.channel.send('Two of Pentacles');
			break;
		case 66:
			message.channel.send('Three of Pentacles');
			break;
		case 67:
			message.channel.send('Four of Pentacles');
			break;
		case 68:
			message.channel.send('Five of Pentacles');
			break;
		case 69:
			message.channel.send('Six of Pentacles');
			break;
		case 70:
			message.channel.send('Seven of Pentacles');
			break;
		case 71:
			message.channel.send('Eight of Pentacles');
			break;
		case 72:
			message.channel.send('Nine of Pentacles');
			break;
		case 73:
			message.channel.send('Ten of Pentacles');
			break;
		case 74:
			message.channel.send('Page of Pentacles');
			break;
		case 75:
			message.channel.send('Knight of Pentacles');
			break;
		case 76:
			message.channel.send('Queen of Pentacles');
			break;
		case 77:
			message.channel.send('King of Pentacles');
			break;
		}
	},
};