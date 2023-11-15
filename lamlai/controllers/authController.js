const user = require("./../models/userModel");
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/catchAsync");
const AppError= require('./../utils/appError');

dotenv.config({ path: './config.env' });
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(201).json({
    status: "Success",
    token,
    data: {
      user: newUser,
    },
  });
});
exports.login =(req,res,next)=>{
  const {email,password}= req.body;
  //Check if email and password exists
  if(!email||!password){
     return next(new AppError('Please provide email and password',400))
  }

  // Check if user exist && password is correct
  // const user= user.findOne({email})
  // If everything ok, send token to client

  const token='';
  res.status(200).json({
    status:'success',
    token
  })
}
