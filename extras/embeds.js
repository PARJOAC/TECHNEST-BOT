const { EmbedBuilder } = require("discord.js");

function createMessage(description, title) {
  return new EmbedBuilder()
    .setDescription(description)
    .setColor("Blue")
    .setTimestamp()
    .setTitle(title);
}

function createMessageImage(title, image) {
  return new EmbedBuilder()
    .setImage(image)
    .setColor("Blue")
    .setTimestamp()
    .setTitle(title);
}

module.exports = {
  embed1: () => createMessage()
};