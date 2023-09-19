const express = require("express");
const app = express();
const connectdb =  require('./config/connectdb')
const mongoose = require("mongoose");
const restaurant = require('./module/restaur')

connectdb()
const restaur =  new restaurant({
    address: {
        building: "93",
        coord: [ -62.856077, 30.848463 ],
    street: "Blaker",
        zipcode: "10400"
     },
     borough: "Bronx",
     cuisine: "Bakery",
     rates: [
        { date: { "$date": 1393804800000 }, rate: "A", score: 3 },
        { date: { "$date": 1378857600000 }, rate: "B", score: 2 },
        { date: { "$date": 1358985600000 }, rate: "A", score: 4.5 },
        { date: { "$date": 1322006400000 }, rate: "A", score: 5 },
        { date: { "$date": 1299715200000 }, rate: "B", score: 1 }
     ],
     name: "HotFire Bake Shop",
     restaurant_id: "30078342"
})


restaur
  .save()
  .then((user) => {
    console.log('User saved:', user);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    // Close the MongoDB connection
    mongoose.connection.close();
  });
 //ADD
 
const PORT = 3000;
app.use(PORT, () => {
  console.log("Sever is running ");
});
