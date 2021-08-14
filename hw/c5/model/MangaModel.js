const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangaScheme = new Schema({
    name:String,
    manufacture:String,
    price:Number
});

module.exports = mongoose.model('manga', MangaScheme);