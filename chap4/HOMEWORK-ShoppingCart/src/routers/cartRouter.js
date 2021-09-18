const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

cartRouter.get('/', cartController.show);
cartRouter.post('/:id_fruit', cartController.add);
cartRouter.put('/:id_fruit', cartController.updateFruitCart);
cartRouter.delete('/:id_fruit', cartController.deleteFruitCart);


module.exports = cartRouter;