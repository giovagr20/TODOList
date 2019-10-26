const express = require('express');
const router = express.Router();

const _productsController = require('../controllers/controllers.products');

router.get('/', _productsController.getProducts) //Products in database



module.exports = router;