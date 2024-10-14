const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const boton = require("../../../extras/boton.js")
const embed = require("../../../extras/embeds.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("roles")
      .setDescription("Enviar mensaje de autoroles"),
    category: "mod",
    usage: "Enviar mensaje de autoroles",
    n: "</roles:1295292737184333864>",
    async execute(interaction, client) {
        try {
            if(interaction.member.id !== "714376484139040809") return interaction.reply({ content: "No tienes permisos para ejecutar este comando.", ephemeral: true });

        await interaction.channel.send({ embeds: [embed.categorias_imagen()], components: [boton.botones_categorias()], ephemeral: false });
        await interaction.channel.send({ embeds: [embed.general_3()], components: [boton.botones_curso()], ephemeral: false });
        await interaction.channel.send({ embeds: [embed.general_3()], components: [boton.botones_comunidad()], ephemeral: false });
        await interaction.channel.send({ embeds: [embed.general_3()], components: [boton.botones_genero()], ephemeral: false });
        await interaction.channel.send({ embeds: [embed.minecraft()], components: [boton.botones_minecraft()], ephemeral: false });
        } catch(e) {
            console.log(e);
        }

        
    }
}
