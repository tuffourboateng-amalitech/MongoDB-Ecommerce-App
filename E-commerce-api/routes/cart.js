const cartRouter = require('express').Router();
const {verifyToken, verifyTokenandAdmin, verifyTokenAuthorization}= require('./verifytoken')
const {addCartItem, updateCartItem,deleteCartItem, findByUserId, allCartItems} = require('../controllers/cart.controllers');
// CREATE
cartRouter.post('/',  verifyToken, addCartItem)

// UPDATE
cartRouter.put('/:id', verifyTokenAuthorization, updateCartItem)


// DELETE
cartRouter.delete('/:id', verifyTokenAuthorization, deleteCartItem)

// GET USER CART
cartRouter.get('/find/:userId', verifyTokenAuthorization, findByUserId)

// GET ALL 

cartRouter.get('/', verifyTokenandAdmin, allCartItems)

module.exports = {cartRouter};