const mongoose = require('mongoose')
const {Schema,model}=mongoose
const restaurantSchema=new Schema({
    address:{
        building:String,
        coord:Array,
        street:String,
        zipcode:String,
    },
    borough:String,
    cuisine:String,
    rates:[{
        date:{$date:Date},
        rate:String,
        score:Number
    }]


})
const restaurant=model('restaurant',restaurantSchema)
module.exports=restaurant;