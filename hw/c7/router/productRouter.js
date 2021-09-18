const express = require('express');
const productRouter = express.Router();
const mongoose=require('mongoose')
const ProductModel=require('../model/product')
productRouter.get('/', (req, res) => {
    console.log(req.query.name);
    productModel.find({ name: req.query.name }).exec((err, products) => {
        if (err) {
            console.log(err)
            res.send('Khong the lay thong tin product')
        } else {
            console.log('Lay thanh cong products');
            res.json(products);
        }
    })
})
productRouter.put('/:id',(req,res)=>{
    ProductModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name }},
        { upsert: true },
        (err, product) => {
            if (err) {
                res.send('Xay ra loi update !!!');
            } else {
                productRouter.get(`/product/${_id}`)
                // 2. return thanh cong hay that bai
                res.send(200);
            }
        }
    )
})
productRouter.get('/:id',(req,res)=>{
    ProductModel.findOne({
        _id: req.params.id
    }).exec((err, product) => {
        if (err) {
            res.send('Co loi xay ra...');
        } else {
            console.log('get product by ID');
            res.json(product);
        }
    });
})
productRouter.post('/',(req,res)=>{
    var product =new ProductModel()
    product.name=req.body.name
    product.description=req.body.description
    product.brand=req.body.brand
    product.price=req.body.price
    product.save((err,product)=>{
        if(err){
            res.send('Error luu thong tin product')
        }else{
            console.log('luu thanh cong')
            res.send(product)
        }
    })
})
productRouter.delete('/:id',(req,res)=>{
    ProductModel.findOneAndDelete({
        _id: req.params.id
    },(err, product) => {
        if (err) {
            res.send('Xay ra loi xoa !!!');
        } else {
            productRouter.get(`/product/${_id}`)
            console.log('xoa thanh cong')
            res.send(200);
        }
    }
)
})
module.exports=productRouter