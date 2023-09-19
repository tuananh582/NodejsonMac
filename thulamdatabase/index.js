const express = require("express");
const app = express();

const connectDb = require("./config/connectDb");

connectDb();
const testTour = new Tour({
  name: "The Parker",
  price: 999,
});
testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("ERROR", err);
  }); // Save to database

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Sever is running");
});
