const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment-timezone');
const Recordatorio = require('../../../schemas/recordatorios.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('recordatorio')
        .setDescription('Establece un recordatorio para una fecha y hora especificadas.')
        .addStringOption(option =>
            option.setName('fecha')
                .setDescription('Fecha y hora del recordatorio (Formato: DD-MM-YYYY HH:mm)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('mensaje')
                .setDescription('El mensaje del recordatorio')
                .setRequired(true)),
    category: "general",
    usage: "Crear un recordatorio",
    n: "</recordatorio:1286692468292718706>",
    async execute(interaction, client) {
        const fecha = interaction.options.getString('fecha');
        const mensaje = interaction.options.getString('mensaje');

        const recordatorioFecha = moment.tz(fecha, 'DD-MM-YYYY HH:mm', 'Europe/Madrid');

        if (!recordatorioFecha.isValid()) {
            return interaction.reply({ content: 'Formato de fecha incorrecto. Usa "DD-MM-YYYY HH:mm"', ephemeral: true });
        }

        const delay = recordatorioFecha.diff(moment());
        if (delay <= 0) {
            return interaction.reply({ content: 'Escribe una fecha futura..', ephemeral: true });
        }

        const newReminder = new Recordatorio({
            userId: interaction.user.id,
            message: mensaje,
            time: recordatorioFecha.toDate(),
        });

        await newReminder.save();

        const recordatorio_exito = new EmbedBuilder()
            .setTitle("⏰ ¡Se ha creado un nuevo recordatorio!")
            .setDescription(`✅ Recordatorio establecido para el ${recordatorioFecha.format('DD-MM-YYYY HH:mm')} (hora de España) con el mensaje:\n "${mensaje}"`)
            .setColor("Green")
            .setTimestamp()
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

        await interaction.reply({ embeds: [recordatorio_exito], ephemeral: false });

        const recordatorio_usuario = new EmbedBuilder()
            .setTitle("⏰ ¡Has recibido un Nuevo Recordatorio!")
            .setDescription(`Vengo a recordarte lo siguiente:\n "${mensaje}"`)
            .setColor("Green")
            .setTimestamp()
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

        setTimeout(async () => {
            try {
                await interaction.user.send({ embeds: [recordatorio_usuario] });
                await Recordatorio.deleteOne({ userId: interaction.user.id, time: recordatorioFecha.toDate() });
            } catch (error) {
                console.error(`Error enviando el recordatorio al usuario ${interaction.user.id}:`, error);
            }
        }, delay);
    }
};
