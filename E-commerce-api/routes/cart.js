const router = require('express').Router();
const Product = require('../models/Product');
const {verifyToken, verifyTokenandAdmin, verifyTokenAuthorization}= require('./verifytoken')



// CREATE
router.post('/', verifyToken, async(req, res)=>{
    const newCart = new Product(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE
router.put('/:id', verifyTokenAuthorization, async (req, res)=>{

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true}
        );
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error);
    }
})


// DELETE
router.delete('/:id', verifyTokenAuthorization, async(req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart has been deleted...')
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET USER CART
router.get('/find/:userId', verifyTokenAuthorization, async(req, res)=>{
    try {
      const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET ALL 

router.get('/', verifyTokenandAdmin, async(req, res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;