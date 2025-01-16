const {
  ActivityType,
  EmbedBuilder,
  Events,
  AttachmentBuilder,
} = require("discord.js");
const Recordatorio = require("../../mongoDB/recordatorios");
const Ofertas = require("../../mongoDB/ofertas");
const Huelgas = require("../../mongoDB/huelgas");
const {
  busquedaMensaje,
  telegramClientInit,
} = require("../../initMain/handlerTelegram");
const axios = require("axios");
const cheerio = require("cheerio");
const moment = require("moment-timezone");
const fs = require("fs");

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {

    let telegram = await telegramClientInit();

    setInterval(async () => {
      try {
        const mensaje = await busquedaMensaje(telegram);

        if (!mensaje) {
          return; // No hay mensaje nuevo
        }

        const lastOfert = await Ofertas.findOne({}); // Busca la última oferta guardada
        const lastOfertId = mensaje.id;

        if (lastOfert && lastOfert.oferta == lastOfertId) {
          return; // Ya se procesó este mensaje
        }

        if (lastOfert) {
          lastOfert.oferta = lastOfertId; // Actualiza el último ID procesado
          await lastOfert.save();
        } else {
          await new Ofertas({ oferta: lastOfertId }).save(); // Crea nueva oferta si no existe
        }

        const timestamp = mensaje.date * 1000;
        const timestampAjustado = moment(timestamp).add(5, 'hours');

        const fecha = timestampAjustado.format("DD/MM/YYYY");
        const hora = timestampAjustado.format("HH:mm");

        const channel = client.channels.cache.get(process.env.OFERTAS_CANAL);

        if (mensaje.media && mensaje.media.photo) {
          try {
            const archivoBytes = await telegram.downloadMedia(mensaje.media);
            const imagePath = "./inicializacion_eventos/imagenes/imagenOferta.jpg";
            await fs.promises.writeFile(imagePath, archivoBytes);

            const attachment = new AttachmentBuilder(imagePath);
            await channel.send({
              embeds: [
                new EmbedBuilder()
                  .setTitle("🔥 ¡Nueva oferta disponible! 🔥")
                  .setDescription(`${mensaje.message}`)
                  .setColor("Red")
                  .setImage('attachment://imagenOferta.jpg')
                  .setTimestamp()
                  .setFooter({
                    text: "Oferta del día " + fecha + " a las " + hora,
                    iconURL: client.user.displayAvatarURL(),
                  }),
              ],
              files: [attachment],
            });
          } catch (err) {
            console.error("Error al descargar la imagen:", err);
          }
        } else {
          await channel.send({
            embeds: [
              new EmbedBuilder()
                .setTitle("🔥 ¡Nueva oferta disponible! 🔥")
                .setDescription(`${mensaje.message}`)
                .setColor("Red")
                .setTimestamp()
                .setFooter({
                  text: "Oferta del día " + fecha + " a las " + hora,
                  iconURL: client.user.displayAvatarURL(),
                }),
            ],
          });
        }
      } catch (error) {
        console.error("Error en la verificación/envío de ofertas:", error);
      }
    }, 5000);

    client.user.setActivity("Escribe /help para ver los comandos", { type: ActivityType.Custom });

    setInterval(async () => {
      try {
        const response = await axios.get(
          "https://www.sindicatodeestudiantes.net/index.php/noticias/movimiento-estudiantil"
        );
        const $ = cheerio.load(response.data);

        const huelga_texto = $(".card-body .card-title a").first();
        const titulo = huelga_texto.text().trim();
        const enlace = huelga_texto.attr("href");
        const huelga_imagen = $(".card a img").first();
        const imagen = huelga_imagen.attr("src");

        const huelga_p = $(".card-body .article-index-wrap p").eq(1);
        const p = huelga_p.text().trim();

        let lastHuelga = await Huelgas.findOne({}).exec();

        if (!lastHuelga) {
          lastHuelga = new Huelgas({
            titulo_ult: "",
          });
          await lastHuelga.save();
        }

        if (lastHuelga.titulo_ult !== titulo) {
          const trimmedUrl = imagen.split(".jpg")[0] + ".jpg";

          const channel = client.channels.cache.get(process.env.HUELGA_CANAL);
          await channel.send({
            embeds: [
              new EmbedBuilder()
                .setTitle(
                  "📩 ¡Sindicato de estudiantes ha enviado un mensaje! 📩"
                )
                .setDescription(`**${titulo}**\n\n${p}\n`)
                .setColor("Red")
                .setAuthor({
                  name: "Sindicato de estudiantes",
                  iconURL:
                    "https://www.sindicatodeestudiantes.net//favicon-32x32.png",
                  url: "https://www.sindicatodeestudiantes.net",
                })
                .setTimestamp()
                .setFooter({
                  text: "Bot realizado por ACPARJO",
                  iconURL: client.user.displayAvatarURL(),
                })
                .setThumbnail(
                  `https://www.sindicatodeestudiantes.net//favicon-32x32.png`
                )
                .setURL(`https://www.sindicatodeestudiantes.net${enlace}`)
                .setImage(`https://www.sindicatodeestudiantes.net/${trimmedUrl}`),
            ],
          });

          lastHuelga.titulo_ult = titulo;
          await lastHuelga.save();
        }
      } catch (error) {
        console.error("Error en la función de intervalo:", error);
      }
    }, 10000);

    const now = moment().tz("Europe/Madrid").toDate();
    const reminders = await Recordatorio.find({ time: { $gt: now } });

    reminders.forEach((reminder) => {
      const reminderTime = moment(reminder.time).tz("Europe/Madrid").toDate();
      const delay = reminderTime.getTime() - Date.now();
      const recordatorio_usuario = new EmbedBuilder()
        .setTitle("⏰ ¡Has recibido un Nuevo Recordatorio!")
        .setDescription(`Vengo a recordarte lo siguiente:\n ${reminder.message}`)
        .setColor("Green")
        .setTimestamp()
        .setFooter({
          text: "Bot realizado por ACPARJO",
          iconURL: client.user.displayAvatarURL(),
        });
      if (delay > 0) {
        setTimeout(async () => {
          try {
            const user = await client.users.fetch(reminder.userId);
            if (user) {
              await user.send({ embeds: [recordatorio_usuario] });
              await Recordatorio.deleteOne({ userId: user.id });
            }
          } catch (error) {
            console.error(
              "Error enviando el recordatorio al usuario ${reminder.userId}:, error"
            );
          }
        }, delay);
      }
    });
    
  },
};