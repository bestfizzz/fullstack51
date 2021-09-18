const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FruitModel = new Schema({
    name: String,
    origin: String,
    price: Number,
    image: String
})

module.exports = mongoose.model('fruit', FruitModel);