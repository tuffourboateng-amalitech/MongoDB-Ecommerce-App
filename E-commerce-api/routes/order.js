const orderRouter = require('express').Router();
const {verifyToken, verifyTokenandAdmin, verifyTokenAuthorization}= require('./verifytoken')
const {createOrder, updateOrder, deleteOrder, findOrderByUserId, findAllOrders, getMonthlyIncome} = require ('../controllers/order.controllers.js')



// CREATE
orderRouter.post('/', verifyToken, createOrder)

// UPDATE
orderRouter.put('/:id', verifyTokenandAdmin, updateOrder )


// DELETE
orderRouter.delete('/:id', verifyTokenandAdmin, deleteOrder)

// GET USER ORDERS
orderRouter.get('/find/:userId', verifyTokenAuthorization, findOrderByUserId)

// GET ALL 

orderRouter.get('/', verifyTokenandAdmin, findAllOrders)

// GET MONTHLY INCOME
orderRouter.get('/income', verifyTokenandAdmin, getMonthlyIncome)

module.exports = {orderRouter};