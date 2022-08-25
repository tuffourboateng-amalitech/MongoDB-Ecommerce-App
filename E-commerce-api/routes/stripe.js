const stripeRouter = require('express').Router();
const {paymentStripe} = require('../controllers/stripe.controllers')



stripeRouter.post('/payment', paymentStripe)


module.exports = stripeRouter;