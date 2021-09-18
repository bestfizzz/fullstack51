const FruitModel = require('../models/fruitModel');
const { validateFruit, changeListToObject } = require('../utils/util');

class HomeController {

    // [GET]  /home
    async show (req, res) {
        try {
            const data = await FruitModel.find({});
            const fruits = changeListToObject(data);
            res.render('home/home', { fruits });
        }
       catch(err) {
           console.log(err);
       }
    }

    // [POST] /home
    async addFruit (req, res) {
        const { err, value } = validateFruit(req.body);
        if(err) {
            res.send(err);
        }
        else {
            const newFruit = new FruitModel(value);
            try {
                const fruit = await newFruit.save();
                res.send(fruit);
            }
            catch(err){
                res.send(err);
            }
        }
    }


}


module.exports = new HomeController;