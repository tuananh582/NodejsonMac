const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify= require('slugify')
const TourSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
      trim: true,
    },
    slug:String,
    duration: {
      type: Number,
      required: [true, "A tour must have a duaration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have a group size"],
    },
    difficulty: {
      type: String,
      required: [true, "A tour must have a difficulty"],
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
    },
    ratinsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "A price must have a price "],
    },
    priceDiscount: Number,
    summary: {
      type: String,
      trim: true,
      required: [true, "A tour must have a description"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTour:{
      type:Boolean,
      default:false,
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

TourSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7;
});

//Document Middleware: run before .save() and .create()
TourSchema.pre("save", function (next) {
  // console.log(this);
  this.slug=slugify(this.name,{lower:true})
  next();
});





// TourSchema.pre('save',function(next){
//   console.log('Will save document')
//   next();
// })

// TourSchema.post('save',function(doc,next){
//   console.log(doc)
//   next()
// })

//Querry MiddleWare
TourSchema.pre('find',function(next){
  this.find({secretTour:{$ne:true}})
  
  next();
})

const Tour = model("Tour", TourSchema);
module.exports = Tour;
