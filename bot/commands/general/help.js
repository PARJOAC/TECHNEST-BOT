const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const boton = require("../../../extras/boton.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Comando de ayuda"),
  category: "general",
  usage: "Obtener ayuda para los comandos",
  n: "</help:1276173928368181355>",
  async execute(interaction, client) {

    const commandsByCategory = {
      general: client.commands.filter((cmd) => cmd.category === "general")
    };

    const indexEmbed = new EmbedBuilder()
      .setTitle("MENÚ DE INICIO")
      .setDescription("🌎 = **GENERAL**")
      .setColor("Green")
      .setURL("https://discord.gg/Np6wM5ArdT")
      .setTimestamp()
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

    const GENERAL = new EmbedBuilder()
      .setTitle("GENERAL")
      .setDescription(commandsByCategory.general.map(withAliases).join("\n") || "No hay comandos.")
      .setColor("Green")
      .setURL("https://discord.gg/Np6wM5ArdT")
      .setTimestamp()
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });


    const m = await interaction.reply({ embeds: [indexEmbed], components: [boton.botones_ayuda()], ephemeral: false });

    const buttonEmbedMap = {
      GENERAL: GENERAL
    };

    const filter = (buttonMessage) => buttonMessage.clicker.id === interaction.user.id;
    const collector = m.createMessageComponentCollector(filter, { time: 20000 });

    collector.on('collect', async (x) => {
      if (x.member.id !== interaction.user.id) return;
      const { customId } = x;
      await m.edit({ embeds: [buttonEmbedMap[customId]], components: [boton.botones_ayuda()], ephemeral: false });
      await x.deferUpdate();
    });
    collector.on('end', () => {
      m.edit({ components: [] });
    });
  }
};

function withAliases(cmd) {
  return `${cmd.n}\nUso: ${cmd.usage}.\n`;
}
