const express = require('express');
const mongoose=require('mongoose')
const OrderModel=require('../model/order')
const orderRouter = express.Router();
orderRouter.get('/', (req, res) => {
    console.log(req.query.name);
    orderModel.find({ name: req.query.name }).exec((err, orders) => {
        if (err) {
            res.send('Khong the lay thong tin order')
        } else {
            console.log('Lay thanh cong orders');
            res.json(orders);
        }
    })
})
orderRouter.put('/:id',(req,res)=>{
    orderModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name }},
        { upsert: true },
        (err, order) => {
            if (err) {
                res.send('Xay ra loi update !!!');
            } else {
                orderRouter.get(`/order/${_id}`)
                // 2. return thanh cong hay that bai
                res.send(200);
            }
        }
    )
})
orderRouter.get('/:id',(req,res)=>{
    orderModel.findOne({
        _id: req.params.id
    }).exec((err, order) => {
        if (err) {
            res.send('Co loi xay ra...');
        } else {
            console.log('get order by ID');
            res.json(order);
        }
    });
})
orderRouter.post('/',(req,res)=>{
    var order =new OrderModel()
    order.name=req.body.name
    order.manufacture=req.body.manufacture
    order.price=req.body.price
    order.save((err,order)=>{
        if(err){
            res.send('Error luu thong tin order')
        }else{
            console.log('luu thanh cong')
            res.send(order)
        }
    })
})
orderRouter.delete('/:id',(req,res)=>{
    orderModel.findOneAndDelete({
        _id: req.params.id
    },(err, order) => {
        if (err) {
            res.send('Xay ra loi xoa !!!');
        } else {
            orderRouter.get(`/order/${_id}`)
            console.log('xoa thanh cong')
            res.send(200);
        }
    }
)
})
module.exports=orderRouter