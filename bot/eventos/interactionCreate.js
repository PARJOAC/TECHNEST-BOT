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
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "TELEC") {
      const rol = interaction.guild.roles.cache.get("1107572397588107294");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ASIR") {
      const rol = interaction.guild.roles.cache.get("1107572531122155520");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "DAW") {
      const rol = interaction.guild.roles.cache.get("1107572594552619038");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "DAM") {
      const rol = interaction.guild.roles.cache.get("1107572573052600390");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CIBE") {
      const rol = interaction.guild.roles.cache.get("1107658851420999832");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "IA") {
      const rol = interaction.guild.roles.cache.get("1249719462731452506");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "VR") {
      const rol = interaction.guild.roles.cache.get("1249720896386502689");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "AUDIO") {
      const rol = interaction.guild.roles.cache.get("1107573065832992798");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "PRES") {
      const rol = interaction.guild.roles.cache.get("1268294556558819561");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "SEMI") {
      const rol = interaction.guild.roles.cache.get("1268294590528622755");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ONL") {
      const rol = interaction.guild.roles.cache.get("1268294630500466860");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "AND") {
      const rol = interaction.guild.roles.cache.get("1267939687436255297");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CAN") {
      const rol = interaction.guild.roles.cache.get("1267939748748460101");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CANT") {
      const rol = interaction.guild.roles.cache.get("1267939783569576001");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CATA") {
      const rol = interaction.guild.roles.cache.get("1267939818235629578");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "VAL") {
      const rol = interaction.guild.roles.cache.get("1267940230984368290");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "GAL") {
      const rol = interaction.guild.roles.cache.get("1267939847058882661");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ISL") {
      const rol = interaction.guild.roles.cache.get("1267939875294937139");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "RIOJA") {
      const rol = interaction.guild.roles.cache.get("1267939917905002642");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "NAVA") {
      const rol = interaction.guild.roles.cache.get("1267939952994549780");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "VASCO") {
      const rol = interaction.guild.roles.cache.get("1267939988398669877");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "ARAG") {
      const rol = interaction.guild.roles.cache.get("1267940074562260992");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MANC") {
      const rol = interaction.guild.roles.cache.get("1267940126122573874");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "LEON") {
      const rol = interaction.guild.roles.cache.get("1267940186164301854");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MAD") {
      const rol = interaction.guild.roles.cache.get("1267940326979403776");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "EXT") {
      const rol = interaction.guild.roles.cache.get("1267940277973422111");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "CEU") {
      const rol = interaction.guild.roles.cache.get("1267940354750025832");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MEL") {
      const rol = interaction.guild.roles.cache.get("1267940385703985154");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MUR") {
      const rol = interaction.guild.roles.cache.get("1267940414892015746");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "AST") {
      const rol = interaction.guild.roles.cache.get("1267940446328459354");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "HOM") {
      const rol = interaction.guild.roles.cache.get("1277609733884477460");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
    if (interaction.isButton() && interaction.customId == "MUJ") {
      const rol = interaction.guild.roles.cache.get("1277609779535151239");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton() && interaction.customId == "MINE") {
      const rol = interaction.guild.roles.cache.get("1280265326168244255");
      if (interaction.member.roles.cache.has(rol.id)) {
        interaction.member.roles.remove(rol.id);
        await interaction.reply({
          content: "¡Se te ha eliminado el rol!",
          ephemeral: true,
        });
      } else {
        const verifyUser = interaction.guild.members.cache.get(
          interaction.user.id
        );
        verifyUser.roles.add(rol.id);
        await interaction.reply({
          content: "¡Rol asignado con éxito!",
          ephemeral: true,
        });
      }
    }
  },
};
