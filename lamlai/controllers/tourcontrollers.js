// exports. tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
//   );
const Tour = require("./../models/tourModel");
exports.getAllTours = (req, res) => {

  Tour.find()

  
  res.status(200).json({
    status: "Success",
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};
exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  // if (id > tours.length) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     message: "Try to do again 😍",
  //   });
  // }

  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: "Success",
  //   results: tours.length,
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  // console.log(req.body);
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: "Success",
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   }
  // );
  // res.send("Done");

  //create Db
  try {
    const newTour = await Tour.create(req.body); //return a promise

    res.status(201).json({
      status: "Success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.upDateTour = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      tour: "<Updated tour here ...>",
    },
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "Success",
    data: null,
  });
};
