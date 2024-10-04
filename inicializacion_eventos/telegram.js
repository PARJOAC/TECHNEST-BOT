const { TelegramClient } = require("telegram");
const { StoreSession } = require("telegram/sessions");
const storeSession = new StoreSession("./inicializacion_eventos/telegram/");
const Codigo = require("../schemas/codigo.js");
const Codigo_ant = require("../schemas/codigo_antiguo.js");

// Función para esperar hasta que un nuevo código sea diferente o esté disponible
const waitForNewCode = async () => {
    let nuevoCodigo = null;

    // Bucle que espera hasta que un código esté disponible
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 10000));  // Espera 5 segundos
        nuevoCodigo = await Codigo.findOne({});

        // Si el código existe, rompe el bucle
        if (nuevoCodigo && nuevoCodigo.code) {
            console.log("Nuevo código encontrado:", nuevoCodigo.code);
            break
        }
    }

    return nuevoCodigo;
};

const telegramClientInit = async () => {
    console.log("Iniciando sesión en Telegram, esperando el código de verificación...");

    // Inicializar el cliente de Telegram
    const telegram = new TelegramClient(storeSession, 20285890, process.env.API_HASH_TEL, {
        connectionRetries: 5,
    });

    await telegram.start({
        phoneNumber: async () => process.env.NUM_TEL,
        password: async () => process.env.PASSWORD_TEL,

        // Esta función se llamará cuando Telegram pida el código de verificación
        phoneCode: async () => {
            console.log("Esperando que llegue el nuevo código...");
            // Esperar hasta que el código esté disponible en la base de datos
            const existeCodigo = await waitForNewCode();
            const codeFromUser = String(existeCodigo.code);  // Asegúrate de que sea una cadena

            // Guardar el código anterior en la base de datos Codigo_ant
            const nuevoCodigoAntiguo = new Codigo_ant({
                code_ant: codeFromUser, // Guardar el código actual como "code_ant"
            });
            await nuevoCodigoAntiguo.save();

            // Actualizar el código en la base de datos Codigo con el nuevo código
            await Codigo.findOneAndUpdate(
                { _id: existeCodigo._id }, // Buscar el código actual por su ID
                { $set: { code: codeFromUser } },  // Establecer el nuevo código
                { new: true }
            );

            return codeFromUser;  // Devolver el código de verificación para Telegram
        },


        //phoneCode: async () => input.text("Escribe el código de verificación: "),
        onError: async (e) => console.log(e)
    });

    console.log('Servicio de Telegram iniciado: ' + (await telegram.getMe()).username);

    return telegram;
};

// Función para buscar mensajes en un grupo de Telegram
const busquedaMensaje = async (telegram) => {
    const groupId = '@OfertasSensatas';
    const mensaje = await telegram.getMessages(groupId, { limit: 7 });
    const mensajeFiltrado = mensaje.filter(m => 
        m.className === 'Message' && 
        m.classType === 'constructor' && 
        m.message && m.message.length > 0
    );
    const mensajeMasReciente = mensajeFiltrado.sort((a, b) => b.date - a.date)[0];

    return mensajeMasReciente;
};

module.exports = {
    telegramClientInit,
    busquedaMensaje,
};
