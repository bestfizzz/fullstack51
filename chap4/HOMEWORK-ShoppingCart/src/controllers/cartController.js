const CartModel = require('../models/cartModel');
const FruitModel = require('../models/fruitModel');
const { changeToObject, changeListToObject } = require('../utils/util');

class CartController {

    // [GET] /cart
    show (req, res) {
        CartModel.find({}, (err, data) => {
            if(err) { console.log(err) }
            else {
                const cart = changeListToObject(data);
                res.render('cart/cart',  {cart})
            }
        })
    }

    // [POST] /cart/:id_fruit
    add (req, res) {
        const id = req.params.id_fruit;
        CartModel.findOne({ id_fruit: id }, (err, data) => {
            if(err) { console.log(err) }
            else {
                if( data === null) {
                    FruitModel.findById(id, (err, data) => {
                        if(err) { console.log(err) }
                        else {
                            const fruit = changeToObject(data);
                            fruit.amount = req.body.amount;
                            fruit.id_fruit = id;
                            delete fruit._id;
                            const newFruit = new CartModel(fruit);
                            newFruit.save((err) => {
                                if(err) { console.log(err) }
                                else {
                                    res.redirect('/home');
                                }
                            })
                        }
                    })
                }
                else {
                    const fruit = changeToObject(data);
                    fruit.amount += Number(req.body.amount);
                    CartModel.findByIdAndUpdate(fruit._id, fruit, (err) => {
                        if(err) { console.log(err) }
                        else {
                            res.redirect('/home');
                        }
                    })
                }
            }
        })
    }

    // [PUT] /cart/:id_fruit
    updateFruitCart (req, res) {
        const id_fruit  = req.params.id_fruit;
        CartModel.findOneAndUpdate({ id_fruit }, { amount: Number(req.body.amount) }, (err) => {
            if(err) { console.log(err) }
            else {
                res.redirect('/cart');
            }
        })
    }

    // [DELETE] /cart/:id_fruit
    deleteFruitCart (req, res) {
        const id_fruit  = req.params.id_fruit;
        CartModel.findOneAndDelete({ id_fruit }, (err) => {
            if(err) { console.log(err) }
            else {
                res.redirect('/cart');
            }
        })
    }
}

module.exports = new CartController;