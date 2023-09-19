const express = require("express");
const app = express();
const connectdb = require("./config/database");
const TourRoute = require("./routes/tourRoute");

const mongoose= require('mongoose')
app.use(express.json());
// const TourControllers= require('./controllers/tourController')
// app.use('/api/v1/tours')

app.get("/", (req, res) => {
  res.status(200).json({
    status: "succesfull",
  });
});
mongoose.connect("mongodb://localhost:27017/test").then(console.log('connected'))
// connectdb();
app.use("/ap0/v1/tours",TourRoute);
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Sever is running");
});
