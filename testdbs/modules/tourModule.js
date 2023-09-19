const mongoose = require('mongoose')
const {Schema,model}= mongoose;

const newTourSchema= new Schema({
    name:{
        type:String,
        require:[true,'A tour must has a name'],
        unique:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        require:[true, 'A tour must has a price']
    }
})
const Tour = model('Tour',newTourSchema);
module.exports = Tour;