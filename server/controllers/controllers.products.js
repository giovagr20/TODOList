const _productController = {};

const Products = require('../models/models.products');

_productController.getProducts = async (req, res)=>{
    const products = await Products.find();
    res.json(products);
};


module.exports = _productController;