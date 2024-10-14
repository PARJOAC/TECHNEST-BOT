const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  once: false,
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);

    if (!command) {
      console.log(`No se ha encontrado el comando ${interaction.commandName}.`);
      return;
    }

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.log(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "¡Hubo un error al ejecutar este comando!",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "¡Hubo un error al ejecutar este comando!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "SMR") {
      const rol = interaction.guild.roles.cache.get("1107572341644480562");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "TELECO") {
      const rol = interaction.guild.roles.cache.get("1107572397588107294");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ASIR") {
      const rol = interaction.guild.roles.cache.get("1107572531122155520");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "DAW") {
      const rol = interaction.guild.roles.cache.get("1107572594552619038");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "DAM") {
      const rol = interaction.guild.roles.cache.get("1107572573052600390");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CIBERSEGURIDAD") {
      const rol = interaction.guild.roles.cache.get("1107658851420999832");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "IABG") {
      const rol = interaction.guild.roles.cache.get("1249719462731452506");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "VR") {
      const rol = interaction.guild.roles.cache.get("1249720896386502689");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "AUDIOVISUALES") {
      const rol = interaction.guild.roles.cache.get("1107573065832992798");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "PRESENCIAL") {
      const rol = interaction.guild.roles.cache.get("1268294556558819561");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "SEMIPRESENCIAL") {
      const rol = interaction.guild.roles.cache.get("1268294590528622755");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ONLINE") {
      const rol = interaction.guild.roles.cache.get("1268294630500466860");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
/*
    if (interaction.isButton() && interaction.customId == "ANDALUCIA") {
      const rol = interaction.guild.roles.cache.get("1267939687436255297");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CANARIAS") {
      const rol = interaction.guild.roles.cache.get("1267939748748460101");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CANTABRIA") {
      const rol = interaction.guild.roles.cache.get("1267939783569576001");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CATALUNA") {
      const rol = interaction.guild.roles.cache.get("1267939818235629578");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "COMUNIDAD_VALENCIANA") {
      const rol = interaction.guild.roles.cache.get("1267940230984368290");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "GALICIA") {
      const rol = interaction.guild.roles.cache.get("1267939847058882661");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ISLAS_BALEARES") {
      const rol = interaction.guild.roles.cache.get("1267939875294937139");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "LA_RIOJA") {
      const rol = interaction.guild.roles.cache.get("1267939917905002642");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "NAVARRA") {
      const rol = interaction.guild.roles.cache.get("1267939952994549780");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "PAIS_VASCO") {
      const rol = interaction.guild.roles.cache.get("1267939988398669877");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ARAGON") {
      const rol = interaction.guild.roles.cache.get("1267940074562260992");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CASTILLA_LA_MANCHA") {
      const rol = interaction.guild.roles.cache.get("1267940126122573874");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CASTILLA_LEON") {
      const rol = interaction.guild.roles.cache.get("1267940186164301854");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MADRID") {
      const rol = interaction.guild.roles.cache.get("1267940326979403776");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "EXTREMADURA") {
      const rol = interaction.guild.roles.cache.get("1267940277973422111");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CEUTA") {
      const rol = interaction.guild.roles.cache.get("1267940354750025832");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MELILLA") {
      const rol = interaction.guild.roles.cache.get("1267940385703985154");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MURCIA") {
      const rol = interaction.guild.roles.cache.get("1267940414892015746");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ASTURIAS") {
      const rol = interaction.guild.roles.cache.get("1267940446328459354");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
*/
    if (interaction.isButton() && interaction.customId == "HOMBRE") {
      const rol = interaction.guild.roles.cache.get("1277609733884477460");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MUJER") {
      const rol = interaction.guild.roles.cache.get("1277609779535151239");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "MINECRAFT") {
      const rol = interaction.guild.roles.cache.get("1280265326168244255");
      if (interaction.member.roles.cache.has(rol)) {
        interaction.member.roles.remove(rol);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
  },
};
