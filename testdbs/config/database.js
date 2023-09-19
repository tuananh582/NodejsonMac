const mongoose= require('mongoose')

const connectdbs= async function(){
    try{
        await mongoose.connect("mongodb://localhost:27017/test",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully')
    }catch(err){
        console.log('Has a bug',err)
    }
}
module.exports= connectdbs