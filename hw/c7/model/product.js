const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModel = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    image_thumbnail: String,
    images: [{ String }],
    brand: String,
    price: Number,
    category: String,
    rating: {type:Number,default: 0},
    dateCreated: Date,
    countInStock: {
        type:Number,
        required: true
    },
})

module.exports = mongoose.model('product', ProductModel);