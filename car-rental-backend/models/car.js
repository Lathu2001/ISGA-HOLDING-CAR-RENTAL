const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: String,
    model: String,
    rentalPrice: Number,
    available: Boolean
});

module.exports = mongoose.model('Car', CarSchema);
