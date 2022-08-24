const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')


const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database connection successful'); 
}).catch((err)=>{console.log(err)});


app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use(express.json());

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend Server listening')
})
