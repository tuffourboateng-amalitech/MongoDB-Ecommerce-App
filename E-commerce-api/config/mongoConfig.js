const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoConnect = () => mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database connection successful'); 
}).catch((err)=>{console.log(err)});


module.exports = mongoConnect;