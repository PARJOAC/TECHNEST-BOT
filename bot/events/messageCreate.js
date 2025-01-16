const { Events } = require('discord.js');
const Tiempo = require('../../mongoDB/tiempo'); // Asegúrate de importar tu modelo correctamente

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message, client) {
        try {
            if (message.content === '/bump' && !message.author.bot) {
                const currentDate = new Date();

                // Actualiza o crea un documento con la fecha actual
                await Tiempo.findOneAndUpdate(
                    { userId: message.author.id },
                    { $set: { valor: currentDate } },
                    { upsert: true, new: true }
                );

                await message.reply("¡Tu comando /bump ha sido registrado! Se te avisará en 2 horas.");

                // Inicia un intervalo para verificar cada 2 horas (7200000 ms)
                setInterval(async () => {
                    try {
                        const fechaActual = new Date();

                        // Busca usuarios cuyo tiempo registrado haya pasado el límite de 2 horas
                        const usuariosParaAvisar = await Tiempo.find({
                            valor: { $lte: new Date(fechaActual.getTime() - 2 * 60 * 60 * 1000) }
                        });

                        for (const usuario of usuariosParaAvisar) {
                            const user = await client.users.fetch(usuario.userId).catch(() => null); // Maneja usuarios inaccesibles
                            if (user) {
                                await user.send("¡Han pasado 2 horas desde tu último /bump! Puedes usarlo nuevamente en el canal <#1107569366045831261>.");
                            }

                            // Actualiza la fecha para reiniciar el contador
                            usuario.valor = fechaActual;
                            await usuario.save();
                        }
                    } catch (error) {
                        console.error("Error en el intervalo de verificación:", error);
                    }
                }, 2 * 60 * 60 * 1000); // Ejecuta cada 2 horas (7200000 ms)
            }
        } catch (error) {
            console.error("Error al registrar el comando /bump:", error);
        }
    }
};
