const {
  Client,
  Collection,
  Partials,
  GatewayIntentBits,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
  ],
  shards: "auto",
  allowedMentions: { repliedUser: true },
});

client.commands = new Collection();

require("dotenv").config();

const {
  ActivityType,
  EmbedBuilder,
  Events,
  AttachmentBuilder,
} = require("discord.js");
const Recordatorio = require("./schemas/recordatorios.js");
const Ofertas = require("./schemas/ofertas.js");
const Huelgas = require("./schemas/huelgas.js");
const {
  busquedaMensaje,
  telegramClientInit,
} = require("./inicializacion_eventos/telegram.js");
const axios = require("axios");
const cheerio = require("cheerio");
const moment = require("moment-timezone");

client.once(Events.ClientReady, async (client) => {
  let telegram = await telegramClientInit();

  setInterval(async () => {
    try {
      // Obtener el mensaje más reciente
      const mensaje = await busquedaMensaje(telegram);

      // Verificar si `mensaje` es válido
      if (!mensaje) {
        return;
      }

      // Buscar la última oferta en la base de datos
      const lastOfert = await Ofertas.findOne({}).exec();
      const lastOfertId = mensaje.id;

      // Si la oferta más reciente ya está registrada, no hacer nada
      if (lastOfert.oferta === lastOfertId) {
        return; // Sale de la función si la oferta ya fue registrada
      }

      // Si la oferta es nueva, procesar la fecha y hora
      const timestamp = mensaje.date * 1000;
      const timestampAjustado = moment(timestamp).add(2, 'hours');  // Sumar 2 horas al timestamp

      const fecha = timestampAjustado.format("DD/MM/YYYY");  // Obtener la fecha ajustada
      const hora = timestampAjustado.format("HH:mm");        // Obtener la hora ajustada


      // Obtener el canal de Discord donde se enviarán las ofertas
      const channel = client.channels.cache.get(process.env.OFERTAS_CANAL);

      // Enviar el mensaje al canal con la oferta más reciente y la imagen adjunta
      if (mensaje.media && mensaje.media.photo) {
        const attachment = new AttachmentBuilder("./inicializacion_eventos/imagenes/imagenOferta.jpg");
        await channel.send({
          embeds: [
            new EmbedBuilder()
              .setTitle("🔥 ¡Nueva oferta disponible! 🔥")
              .setDescription(`${mensaje.message}`)
              .setColor("Red")
              .setImage('attachment://imagenOferta.jpg')
              .setFooter({
                text: "Oferta del día " + fecha + " a las " + hora,
                iconURL: client.user.displayAvatarURL(),
              }),
          ],
          files: [attachment],
        });
      } else {
        await channel.send({
          embeds: [
            new EmbedBuilder()
              .setTitle("🔥 ¡Nueva oferta disponible! 🔥")
              .setDescription(`${mensaje.message}`)
              .setColor("Red")
              .setFooter({
                text: "Oferta del día " + fecha + " a las " + hora,
                iconURL: client.user.displayAvatarURL(),
              }),
          ],
        });
      }

      // Actualizar la base de datos con el nuevo ID de la oferta
      if (lastOfert) {
        lastOfert.oferta = lastOfertId;
        await lastOfert.save();
      } else {
        await Ofertas.create({ oferta: lastOfertId });
      }
    } catch (error) {
      console.error("Error en la verificación/envío de ofertas:", error);
    }
  }, 2000);

  client.user.setPresence({
    activities: [
      {
        name: "ser bueno",
        type: ActivityType.Competing,
      },
    ],
    status: "online",
  });

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
});

const Errores = require("./inicializacion_eventos/errores.js");
const Eventos = require("./inicializacion_eventos/eventos.js");
const Slash = require("./inicializacion_eventos/slashCommands.js");
const Mongo = require("./inicializacion_eventos/mongo.js");
const KeepAlive = require("./inicializacion_eventos/server.js");

async function main(client) {
  await client
    .login(process.env.BOT_TOKEN)
    .then(console.log("Sesión iniciada."));
  await Errores();
  await Mongo();
  await KeepAlive();
  await Eventos(client);
  await Slash(client);
}

main(client);
