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
    { id: "SMR", label: "SMR", style: ButtonStyle.Secondary },
    { id: "TELEC", label: "TELEC", style: ButtonStyle.Secondary },
    { id: "ASIR", label: "ASIR", style: ButtonStyle.Secondary },
    { id: "DAW", label: "DAW", style: ButtonStyle.Secondary },
    { id: "DAM", label: "DAM", style: ButtonStyle.Secondary },
    { id: "CIBE", label: "Ciber", style: ButtonStyle.Secondary },
    { id: "IA", label: "IA", style: ButtonStyle.Secondary },
    { id: "VR", label: "VR", style: ButtonStyle.Secondary },
    { id: "AUDIO", label: "Audio", style: ButtonStyle.Secondary },
  ]),
  botones_curso: () => createButtons([
    { id: "PRES", label: "Presencial", style: ButtonStyle.Secondary },
    { id: "SEMI", label: "Presencial", style: ButtonStyle.Secondary },
    { id: "ONL", label: "Online", style: ButtonStyle.Secondary },
  ]),
  botones_comunidad: () => createButtons([
    { id: "AND", label: "Andalucia", style: ButtonStyle.Secondary },
    { id: "CAN", label: "Canarias", style: ButtonStyle.Secondary },
    { id: "CANT", label: "Cantabria", style: ButtonStyle.Secondary },
    { id: "CATA", label: "Cataluña", style: ButtonStyle.Secondary },
    { id: "VAL", label: "Comunidad Valenciana", style: ButtonStyle.Secondary },
    { id: "GAL", label: "Galicia", style: ButtonStyle.Secondary },
    { id: "ISL", label: "Islas Baleares", style: ButtonStyle.Secondary },
    { id: "RIOJA", label: "La Rioja", style: ButtonStyle.Secondary },
    { id: "NAVA", label: "Navarra", style: ButtonStyle.Secondary },
    { id: "VASCO", label: "País Vasco", style: ButtonStyle.Secondary },
    { id: "ARAG", label: "Aragón", style: ButtonStyle.Secondary },
    { id: "MANC", label: "Castilla-La Mancha", style: ButtonStyle.Secondary },
    { id: "LEON", label: "Castilla y León", style: ButtonStyle.Secondary },
    { id: "MAD", label: "Madrid", style: ButtonStyle.Secondary },
    { id: "EXT", label: "Extremadura", style: ButtonStyle.Secondary },
    { id: "CEU", label: "Ceuta", style: ButtonStyle.Secondary },
    { id: "MEL", label: "Melilla", style: ButtonStyle.Secondary },
    { id: "MUR", label: "Murcia", style: ButtonStyle.Secondary },
    { id: "AST", label: "Asturias", style: ButtonStyle.Secondary },
  ]),
  botones_genero: () => createButtons([
    { id: "HOM", label: "👦🏻 Hombre", style: ButtonStyle.Secondary },
    { id: "MUJ", label: "👧🏻 Mujer", style: ButtonStyle.Secondary },
  ]),
  botones_minecraft: () => createButtons([
    { id: "MINE", label: "Minecraft", style: ButtonStyle.Secondary },
  ])
}
