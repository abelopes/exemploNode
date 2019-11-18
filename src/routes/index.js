'use strict'

const EXPRESS = require ('express');
const ROUTER = EXPRESS.Router();

ROUTER.use('/products', require('../controllers/product-controller').ROUTER);

module.exports = ROUTER;
