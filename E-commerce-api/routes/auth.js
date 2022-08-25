const authRouter = require('express').Router();
const {registerUser, loginUser} = require('../controllers/auth.controller')


// REGISTER
authRouter.post('/register', registerUser);


// LOGIN

authRouter.post('/login', loginUser)


module.exports = {authRouter};