const fs = require("fs");
const Tour=require('./../../models/tourModel')
const connectDb= require('./../../config/database')
//ReadFile
// connectDb()
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }finally{
      process.exit()
  }
//   }
// try {
//     const transformedTours = tours.map((tour) => {
//       if (typeof tour._id === 'number') {
//         // Convert numeric "_id" to a string in ObjectId format
//         tour._id = String(tour._id).padStart(24, '0');
//       }
//       return tour;
//     });

//     const result = await Tour.create(transformedTours);
//     console.log(`${result.length} tours successfully loaded`);
//   } catch (err) {
//     console.error("Error importing data:", err);
//   } finally {
//     process.exit();
//   }
  };

//Delete all Data From DB
const deleteData = async () => {
  try {
    await Tour.deleteMany(); // Delete all the model dont need to pass
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }finally{
    process.exit();

  }
};
// if(process.argv[2]==='--import'){
//     importData()
// }else if(process.argv[2]==='--delete'){
//     deleteData()
// }
if (process.argv[2] === "--import") {
    importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
else{
    console.log("Usage: node script.js --import or node script.js --delete");

}
console.log(process.argv);
