const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistoryModel = new Schema({
    time: Number,
    cart: Array,
    totals: Number
})

module.exports = mongoose.model('history', HistoryModel);
