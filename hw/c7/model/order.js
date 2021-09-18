const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderModel = new Schema({
//     // user:{ ref:'User'},
// orderItems: {ref: 'Item', required:true},
shippingAddress1: {type:String,required:true},
shippingAddress2: {type:String,required:true},
city: String,
country: String,
phone: String,
// status:{1:'Đang trong kho', 2: 'Đang ship', 3: 'Thành công', 4: 'Đã hủy'},
totalPrice: Number,
dateCreated: Date,
})

module.exports = mongoose.model('order', OrderModel);