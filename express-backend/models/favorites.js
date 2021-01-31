const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema ({
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    color: { type: String, required: true },
    wireFrame: { type: Boolean, required: true }
})

module.exports = mongoose.model('Favorite', favoritesSchema);