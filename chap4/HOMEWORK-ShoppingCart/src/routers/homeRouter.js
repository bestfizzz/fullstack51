const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeController')

homeRouter.get('/home', homeController.show);
homeRouter.post('/home', homeController.addFruit);

module.exports = homeRouter;