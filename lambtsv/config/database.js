const mongoose= require('mongoose')
const connectDb= async function(){
    try{
       await mongoose.connect('mongodb://localhost:27017/studentin')
       console.log('Success to connect db')
    }catch(err){
        console.log('Have Some Bugs',err)
    }
}
module.exports= connectDb