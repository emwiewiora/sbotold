// let Discord = require('discord.js');
let ms = require('ms');

module.export = async (message, args) => {
	if(!message.member.hasPemission('MANAGE_MESSAGES')) return message.channel.send(':x:***You do not have permissions to run this command!***');

	let user = message.mentions.users.first();
	if(!user) return message.channel.send(':x:***Please mention a user!***');

	let member;

	try {
		member = await message.guild.members.fetch(user);

	} catch(err) {
		member = null;
	}

	if(!member) return message.channel.send(':x:***Please mention a user!***');
	if(member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':x:***You cannot mute that person!***');

	let rawTime = args[1];
	let time = ms(rawTime);
	if(!time) return message.channel.send('You didn\'t specify a time!');

	let reason = args.splice(2).join(' ');
	if(!reason) return message.reply('You need to give a mute reason!');

	let channel = message.guild.channels.catch.find(c => c.name === 'potato');

	let log = new Discord.MessageEmbed()
		.setTitle(':white_check_mark:***This user has been muted.***')
		.addField('User:', user, true)
		.addField('By:', message.author, true)
		.addField('Expires:', rawTime)
		.addField('Reason:', reason);
	channel.send(log);

	let embed = new Discord.MessageEmbed()
		.setTitle('You have been muted!')
		.addField('Expires:', rawTime, true)
		.addField('Reason:', reason, true);

	try {
		user.send(embed);
	} catch(err) {
		console.warn(err);
	}

	let role = msg.guild.roles.cache.find(r => r.name === 'Muted');

	member.roles.add(role);

	setTimeout(async() => {
		member.roles.remove(role);
	}, time);

	message.channel.send(`**${user}** has been muted by **${message.author}** for **${rawTime}**!`);
};