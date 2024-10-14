const { EmbedBuilder } = require("discord.js");

function createMessage(title, description) {
  return new EmbedBuilder()
    .setDescription(description)
    .setColor("Blue")
    .setTimestamp()
    .setTitle(title);
}

function createMessageImage(title, description, image) {
  return new EmbedBuilder()
    .setImage(image)
    .setColor("Purple")
    .setTimestamp()
    .setDescription(description)
    .setTitle(title);
}

module.exports = {
  categorias_imagen: () => createMessageImage(
    "¡Reacciona para obtener tus roles!", "Reacciona al botón correspondiente para obtener o eliminar los roles pertinentes. ¡Buen curso!", "https://cdn.discordapp.com/attachments/1107574606379880459/1250048048944648334/Banner_de_perfil_para_Discord_arte_pixelado_magenta_violeta.png?ex=670da837&is=670c56b7&hm=29662067399cf7d3925db2d1148f832ca844e6dcc9d9a4a7f05d61f477befa3c&"
  ),
  general_3: () => createMessage("¡Reacciona para obtener tus roles!", "Reacciona al botón correspondiente para obtener o eliminar los roles pertinentes. ¡Buen curso!"),
  minecraft: () => createMessage("¡Reacciona para obtener tus roles!", "Reacciona al botón correspondiente para acceder al servidor de Minecraft.")
};
