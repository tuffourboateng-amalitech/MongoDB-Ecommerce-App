const express = require('express');
const {userRouter} = require('./routes/user')
const {authRouter} = require('./routes/auth')
const {productRouter} = require('./routes/product')
const {cartRouter} = require('./routes/cart')
const {orderRouter} = require('./routes/order')
const mongoConnect = require('./config/mongoConfig')


const app = express();

mongoConnect();

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/orders', orderRouter)
app.use(express.json());

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend Server listening')
})
