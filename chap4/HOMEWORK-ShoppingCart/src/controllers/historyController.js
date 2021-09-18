const HistoryModel = require('../models/historyModel');
const CartModel = require('../models/cartModel');
const { getTime, changeListToObject, changeToObject } = require('../utils/util');

class HistoryController {

    // [GET] /history
    show (req, res) {
        HistoryModel.find({}, (err, data) => {
            if(err) { console.log(err) }
            else {
                const historyCarts = changeListToObject(data).reverse();
                res.render('history/history', { historyCarts });
            }
        })
    }
    // [GET] /history/:id_cart
    showCart (req, res) {
        HistoryModel.findById(req.params.id_cart, (err, data) => {
            if(err) { console.log(err) }
            else {
                const changeData = changeToObject(data);
                res.render('history/historyCart', { cart: changeData.cart, totals: changeData.totals });
            }
        })
    }

    // [POST] /history
    addCart (req, res) {
        CartModel.find({}, (err, data) => {
            if(err) { console.log(err) }
            else {
                const time = getTime();
                const cart = changeListToObject(data);
                let totals = 0;
                cart.forEach((data) => { totals += data.price * data.amount });
                const newHistory = new HistoryModel({ time, cart: cart, totals });
                newHistory.save((err) => {
                    if(err) { console.log(err) }
                    else {
                        CartModel.deleteMany({}, (err) => {
                            if(err) { console.log(err) }
                            else {
                                res.redirect('/history');
                            }
                        })
                    }
                })
            }
        })
    }
}

module.exports = new HistoryController;