const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const studentSchema = new Schema({
  ID: {
    type: String,
    unique: true,
  },
  Name: {
    type: String,
    required: [true, "A list must have a name"],
  },
  Gender: {
    type: String,
    required: [true, "A list must have a gender"],
  },
  Class: {
    type: String,
    required: [true, "A list must have a Class"],
  },
  Club: {
    type: String,
    required: [true, "A list must have a Club"],
  },
  Persona: {
    type: String,
    required: [true, "A list must have a Persona"],
  },
  Crush: {
    type: String,
    required: [true, "A list must have the number of crush"],
  },
  BreastSize:{
    type:String,
    required: [true, "A list must have a BreastSize"],
  },
  Strength:{
    type:String,
    required: [true, "A list must have a Strength"],
  },
  Hairstyle:{
    type:String,
    required: [true, "A list must have a HairStyle"],
  },
  Color:{
    type:String,
    required: [true, "A list must have a Color of Hair "],
  },
  Stockings:{
    type:String,
    required: [true, "A list must have a Stockings"],
  },
  Accessory:{
    type:String,
    required: [true, "A list must have a Accessory"],
  },
  ScheduleTime:{
    type:String,
    required: [true, "A list must have a ScheduleTime"],
  },
  ScheduleDestination:{
    type:String,
    required: [true, "A list must have a ScheduleDestination"],
  },
  ScheduleAction:{
    type:String,
    required: [true, "A list must have a ScheduleAction"]
  }

});
const student= model('student',studentSchema)
module.exports =student
