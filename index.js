const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const cooldowns = new Discord.Collection();


client.on('message', message => {
	// bot will ignore any message the does not start with the prefix or is a bot
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// cuts the prefix off the message leaving only the command and args in an array
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	// saves the first item in the args array as the command
	const commandName = args.shift().toLowerCase();

	// this allows the use of command or aliases. the alias is listed in each command file
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	// if it is not a command or alias, do nothing
	if (!command) return;

	// if the command has the paramiter of guildOnly: true. it can not be used in a DM
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	// This will check to see if the user has the server permission to use the command. the required permmision is stored in a paramiter in each command file
	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not use this command!');
		}
	}

	// if the user does not provide any args for the command and the command has the paramater args: true. let them know it need args and what it should look like.
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	// to avoid spam, commands can have a cooldown paramater. if set, the bot will check if the user has used the command in less time that the cooldown timer.
	// onec the cooldown time has passed, the record of it will be deleted.  If a user uses a command and no record is found, the command will attempt to run and a new record of
	// the use will be recorded.  Rince and repeat.
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	// this is just a simple error catch.
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);