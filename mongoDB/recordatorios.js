const mongoose = require('mongoose');

const Recordatorio = new mongoose.Schema({
    userId: { type: String },
    message: { type: String },
    time: { type: Date },
});

module.exports = mongoose.model('Recordatorio', Recordatorio);