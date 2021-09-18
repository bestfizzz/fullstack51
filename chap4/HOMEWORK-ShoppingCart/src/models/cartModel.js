const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartModel = new Schema({
    id_fruit: String,
    name: String,
    origin: String,
    price: Number,
    image: String,
    amount: Number
})

module.exports = mongoose.model('cart', CartModel);

// const cart = []

// module.exports = cart;