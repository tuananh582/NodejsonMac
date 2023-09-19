const mongoose = require('mongoose')
const connectDb = async  ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/restaurant',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect succesfully')
    }catch(error){
        console.error(error);
    }

}
module.exports =  connectDb;

