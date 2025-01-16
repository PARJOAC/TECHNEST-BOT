const mongoose = require('mongoose');

const Tiempo = new mongoose.Schema({
  userId: { type: String, unique: true},
  valor: { type: Date }
});

module.exports = mongoose.model('Tiempo', Tiempo);