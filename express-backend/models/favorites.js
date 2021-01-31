const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema ({
    length: { type: Integer, required: true },
    width: { type: Integer, required: true },
    height: { type: Integer, required: true },
    color: { type: String, required: true },
    wireFrame: Boolean
})

module.exports = mongoose.model('Favorite', favoritesSchema);