const { custom, number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: {type: String, required: true },
    email: {type: String, required: true },
    passwordHash: { type:String, required: true },
    phone: { type:String, required: true },
    role: {type:Number,default:3},
    street: {type:String,default:null},
    city: {type:String,default:null},
    country: {type:String,default:null},
    avatar: {type:String,default:null},
})

module.exports = mongoose.model('user', UserModel);