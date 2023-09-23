const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TourSchema = new Schema({
 
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim:true
  },
  duration:{
    type:Number,
    required:[true,'A tour must have a duaration']
  },
  maxGroupSize:{
    type:Number,
    required:[true,'A tour must have a group size']
  },
  difficulty:{
    type:String,
    required:[true,'A tour must have a difficulty']
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratinsQuantity:{
    type:Number,
    default:0,
  },
  price: {
    type: Number,
    required: [true, "A price must have a price "],
  },
  priceDiscount:Number,
  summary:{
    type:String,
    trim:true,
    required:[true,'A tour must have a description']
  },
  description:{
    type:String,
    trim:true,
  },
  imageCover:{
    type:String,
    required:[true,'A tour must have a cover image'],
  },
  images:[String],
  createdAt:{
    type:Date,
    default:Date.now(),
    select:false
  },
  startDates:[Date]
},{
toJSON:{virtuals:true},
toObject:{virtuals:true}


});

TourSchema.virtual('durationWeeks').get(function(){
  return this.duration/7
})

const Tour = model("Tour", TourSchema);
module.exports = Tour;
