const mongoose = require("mongoose");

const connectDb = async function () {
  await mongoose.connect("mongodb://localhost:27017/natours", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect Succesfully"))
    .catch((err) => console.log("Has Bug", err));
};
module.exports = connectDb;
