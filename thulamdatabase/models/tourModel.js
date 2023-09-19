const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TourSchema = new Schema({
  name: {
    type: String,
    required: [true, "A tour must has a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A price must  has a price "],
  },
});

const Tour = model("Tour", TourSchema);
module.exports = Tour;
