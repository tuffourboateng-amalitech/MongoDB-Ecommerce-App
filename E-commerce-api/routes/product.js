const productRouter = require('express').Router();
const {verifyToken, verifyTokenandAdmin}= require('./verifytoken');
const {createProduct, updateProduct, deleteProduct, getProduct, getAllProducts} = require('../controllers/product.controllers')



// CREATE
productRouter.post('/', verifyTokenandAdmin, createProduct )

// UPDATE
productRouter.put('/:id', verifyTokenandAdmin, updateProduct)


// DELETE
productRouter.delete('/:id', verifyTokenandAdmin, deleteProduct)

// GET PRODUCT
productRouter.get('/find/:id', getProduct)

// GET ALL PRODUCTS
productRouter.get('/', getAllProducts)


module.exports = {productRouter};