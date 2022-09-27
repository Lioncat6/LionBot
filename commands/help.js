const {
    SlashCommandBuilder,
    EmbedBuilder,
    SelectMenuBuilder,
    ActionRowBuilder,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('See all bot commands!')
	.addStringOption(option =>
		option.setName('menu').setDescription('The menu page to display').addChoices(
				{ name: 'General', value: 'General Bot Commands' },
				{ name: 'Moderation', value: 'Moderation Commands' },
				{ name: 'Fun', value: 'Fun Commands' },
		        { name: 'Configuration', value: 'Bot Configuration Commands' },
			)
    ),
    async execute(interaction) {
        const mainHelp = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('Main Help Menu')
            .addFields({
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'General',
                value: 'General Bot Commands'
            }, {
                name: 'Moderation',
                value: 'Moderation Commands'
            }, {
                name: 'Fun',
                value: 'Fun Commands'
            }, {
                name: 'Configuration',
                value: 'Bot Configuration Commands'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, )
            .setFooter({
                text: 'Select the desired menu with the dropdown menu below'
            });
        const mainHelpRow = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                .setCustomId('helpMenuSelect')
                .setPlaceholder('Select Menu')
                .addOptions([{
                    label: 'General',
                    description: 'General Bot Commands',
                    value: 'general',
                }, {
                    label: 'Moderation',
                    description: 'Moderation Commands',
                    value: 'moderation',
                }, {
                    label: 'Fun',
                    description: 'Fun Commands',
                    value: 'fun',
                }, {
                    label: 'Configuration',
                    description: 'Bot Configuration Commands',
                    value: 'configuration',
                }, ])
            );
        const generalHelp = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('General Commands Help Menu')
            .addFields({
                name: '\u200B',
                value: '\u200B'
            }, {
                name: '/ping',
                value: 'Test the bot latency'
            }, {
                name: '/help <help menu>',
                value: 'See all bot commands!'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, )
            .setFooter({
                text: 'Select the desired menu with the dropdown menu below'
            });
        const generalHelpRow = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                .setCustomId('helpMenuSelect')
                .setPlaceholder('General')
                .addOptions([{
                    label: 'General',
                    description: 'General Bot Commands',
                    value: 'general',
                }, {
                    label: 'Moderation',
                    description: 'Moderation Commands',
                    value: 'moderation',
                }, {
                    label: 'Fun',
                    description: 'Fun Commands',
                    value: 'fun',
                }, {
                    label: 'Configuration',
                    description: 'Bot Configuration Commands',
                    value: 'configuration',
                }, {
                    label: 'Main Menu',
                    description: 'Return to Main Menu',
                    value: 'main',
                }, ])
            );
        const moderationHelp = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('Moderation Commands Help Menu')
            .addFields({
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'Coming Soon!',
                value: 'Moderation commands coming soon!'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, )
            .setFooter({
                text: 'Select the desired menu with the dropdown menu below'
            });
        const moderationHelpRow = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                .setCustomId('helpMenuSelect')
                .setPlaceholder('Moderation')
                .addOptions([{
                    label: 'General',
                    description: 'General Bot Commands',
                    value: 'general',
                }, {
                    label: 'Moderation',
                    description: 'Moderation Commands',
                    value: 'moderation',
                }, {
                    label: 'Fun',
                    description: 'Fun Commands',
                    value: 'fun',
                }, {
                    label: 'Configuration',
                    description: 'Bot Configuration Commands',
                    value: 'configuration',
                }, {
                    label: 'Main Menu',
                    description: 'Return to Main Menu',
                    value: 'main',
                }, ])
            );
        const funHelp = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('Fun Commands Help Menu')
            .addFields({
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'Coming Soon!',
                value: 'Fun commands coming soon!'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, )
            .setFooter({
                text: 'Select the desired menu with the dropdown menu below'
            });
        const funHelpRow = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                .setCustomId('helpMenuSelect')
                .setPlaceholder('Fun')
                .addOptions([{
                    label: 'General',
                    description: 'General Bot Commands',
                    value: 'general',
                }, {
                    label: 'Moderation',
                    description: 'Moderation Commands',
                    value: 'moderation',
                }, {
                    label: 'Fun',
                    description: 'Fun Commands',
                    value: 'fun',
                }, {
                    label: 'Configuration',
                    description: 'Bot Configuration Commands',
                    value: 'configuration',
                }, {
                    label: 'Main Menu',
                    description: 'Return to Main Menu',
                    value: 'main',
                }, ])
            );
        const configurationHelp = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('Configuration Commands Help Menu')
            .addFields({
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'Coming Soon!',
                value: 'Configuration commands coming soon!'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, )
            .setFooter({
                text: 'Select the desired menu with the dropdown menu below'
            });
        const configurationHelpRow = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                .setCustomId('helpMenuSelect')
                .setPlaceholder('Configuration')
                .addOptions([{
                    label: 'General',
                    description: 'General Bot Commands',
                    value: 'general',
                }, {
                    label: 'Moderation',
                    description: 'Moderation Commands',
                    value: 'moderation',
                }, {
                    label: 'Fun',
                    description: 'Fun Commands',
                    value: 'fun',
                }, {
                    label: 'Configuration',
                    description: 'Bot Configuration Commands',
                    value: 'configuration',
                }, {
                    label: 'Main Menu',
                    description: 'Return to Main Menu',
                    value: 'main',
                }, ])
            );
        const helpMenu = interaction.options.getString('menu')
        if (helpMenu === 'General') {
        await interaction.reply({
            content: '',
            emmbeds: [generalHelp],
            components: [generalHelpRow]    
        })} else {
        await interaction.reply({
            content: '',
            embeds: [mainHelp],
            components: [mainHelpRow]
        })};
    }
}
