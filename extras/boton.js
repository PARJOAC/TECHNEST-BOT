const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

function createButtons(botones) {
  return new ActionRowBuilder().addComponents(
    botones.map(button => (
      new ButtonBuilder()
        .setCustomId(button.id)
        .setLabel(button.label)
        .setStyle(button.style)
    ))
  );
}

function createButtonsEmoji(botones) {
  return new ActionRowBuilder().addComponents(
    botones.map(button => (
      new ButtonBuilder()
        .setCustomId(button.id)
        .setEmoji(button.emoji)
        .setStyle(button.style)
    ))
  );
}

module.exports = {
  botones_ayuda: () => createButtonsEmoji([
    { id: "GENERAL", emoji: "🌎", style: ButtonStyle.Secondary },
  ]),
  botones_categorias: () => createButtons([
    { id: "SMR", label: "💻 SMR", style: ButtonStyle.Secondary },
    { id: "TELECO", label: "📡 TELECO", style: ButtonStyle.Secondary },
    { id: "ASIR", label: "🌐 ASIR", style: ButtonStyle.Secondary },
    { id: "DAW", label: "☕ DAW", style: ButtonStyle.Secondary },
    { id: "DAM", label: "🎲 DAM", style: ButtonStyle.Secondary },
    { id: "CIBERSEGURIDAD", label: "👺 Ciberseguridad", style: ButtonStyle.Secondary },
    { id: "IABG", label: "🤖 IA & BG", style: ButtonStyle.Secondary },
    { id: "VR", label: "🎮 Desarrollo Videojuegos y VR", style: ButtonStyle.Secondary },
    { id: "AUDIOVISUALES", label: "🎥 Audiovisuales", style: ButtonStyle.Secondary },
  ]),
  botones_curso: () => createButtons([
    { id: "PRESENCIAL", label: "Presencial", style: ButtonStyle.Secondary },
    { id: "SEMIPRESENCIAL", label: "Presencial", style: ButtonStyle.Secondary },
    { id: "ONLINE", label: "Online", style: ButtonStyle.Secondary },
  ]),
  botones_comunidad: () => createButtons([
    { id: "ANDALUCIA", label: "Andalucia", style: ButtonStyle.Secondary },
    { id: "CANARIAS", label: "Canarias", style: ButtonStyle.Secondary },
    { id: "CANTABRIA", label: "Cantabria", style: ButtonStyle.Secondary },
    { id: "CATALUNA", label: "Cataluña", style: ButtonStyle.Secondary },
    { id: "COMUNIDAD_VALENCIANA", label: "Comunidad Valenciana", style: ButtonStyle.Secondary },
    { id: "GALICIA", label: "Galicia", style: ButtonStyle.Secondary },
    { id: "ISLAS_BALEARES", label: "Islas Baleares", style: ButtonStyle.Secondary },
    { id: "LA_RIOJA", label: "La Rioja", style: ButtonStyle.Secondary },
    { id: "NAVARRA", label: "Navarra", style: ButtonStyle.Secondary },
    { id: "PAIS_VASCO", label: "País Vasco", style: ButtonStyle.Secondary },
    { id: "ARAGON", label: "Aragón", style: ButtonStyle.Secondary },
    { id: "CASTILLA_LA_MANCHA", label: "Castilla-La Mancha", style: ButtonStyle.Secondary },
    { id: "CASTILLA_LEON", label: "Castilla y León", style: ButtonStyle.Secondary },
    { id: "MADRID", label: "Madrid", style: ButtonStyle.Secondary },
    { id: "EXTREMADURA", label: "Extremadura", style: ButtonStyle.Secondary },
    { id: "CEUTA", label: "Ceuta", style: ButtonStyle.Secondary },
    { id: "MELILLA", label: "Melilla", style: ButtonStyle.Secondary },
    { id: "MURCIA", label: "Murcia", style: ButtonStyle.Secondary },
    { id: "ASTURIAS", label: "Asturias", style: ButtonStyle.Secondary },
  ]),
  botones_genero: () => createButtons([
    { id: "HOMBRE", label: "👦🏻 Hombre", style: ButtonStyle.Secondary },
    { id: "MUJER", label: "👧🏻 Mujer", style: ButtonStyle.Secondary },
  ]),
  botones_minecraft: () => createButtons([
    { id: "MINECRAFT", label: "Minecraft", style: ButtonStyle.Secondary },
  ])
}
