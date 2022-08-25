const userRouter = require('express').Router();
const { updateUser, deleteUser, getUser, getAllUsers, getUserStats } = require('../controllers/user.controller');
const {verifyToken, verifyTokenandAdmin, verifyTokenAuthorization}= require('./verifytoken')


// UPDATE
userRouter.put('/:id', verifyTokenAuthorization, updateUser)


// DELETE
userRouter.delete('/:id', verifyTokenAuthorization, deleteUser)

// GET USER
userRouter.get('/find/:id', verifyTokenandAdmin, getUser)

// GET ALL USER
userRouter.get('/', verifyTokenandAdmin, getAllUsers)


// GET USER STATS

userRouter.get('/stats', verifyTokenandAdmin, getUserStats )

module.exports = {userRouter}