const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name !"],
  },
  email: {
    type: String,
    required: [true, "Please provide us your email !"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide us your password !"],
    minlength: 8,
   select:false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password !"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not the same",
    },
  },
});
userSchema.pre("save", async function (next) {
  //Only run this function if password was actually modified
  if (!this.isModified("password")) return next();
  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // not to be persited in the database
  next();
});

const user = model("user", userSchema);
module.exports = user;
