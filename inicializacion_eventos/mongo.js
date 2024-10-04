const mongoose = require("mongoose");

module.exports = async () => {
  
  await mongoose.connect(process.env.MONGO);

  console.log(`Servicio de MongoDB iniciado.`);
};