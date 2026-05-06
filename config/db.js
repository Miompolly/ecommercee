const mongoose = require('mongoose');

const connectDB=async()=>{

    await mongoose.connect("mongodb://localhost:27017/ecommerce")
    console.log("DB connected")
        
}

module.exports=connectDB