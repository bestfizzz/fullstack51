const express = require('express');
const historyRouter = express.Router();
const historyController = require('../controllers/historyController');

historyRouter.get('/', historyController.show);
historyRouter.get('/:id_cart', historyController.showCart);
historyRouter.post('/', historyController.addCart);

module.exports = historyRouter;