const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
app.use(express.json());
const tourRoutes = require("./routes/tourRoutes");
const connectDb = require("./config/database");
connectDb()
// const mongoose =require('mongoose')
// mongoose.connect("mongodb://localhost:27017/natours", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("Connect Succesfully"))
//     .catch((err) => console.log("Has Bug", err));
// app.use(morgan("dev"));
//MiddleWare
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋 ");
  next();
});
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server side !",
    app: "Natours",
  });
});

app.use("/api/v1/tours", tourRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Sever is running");
});
