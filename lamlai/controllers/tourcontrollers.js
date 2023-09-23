// exports. tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
//   );
const Tour = require("./../models/tourModel");
exports.getAllTours = async (req, res) => {
  try {

    const queryObj={...req.query};
    const excludedFields=['page','sort','limit','fields'];
    excludedFields.forEach(el=>delete queryObj[el]);

    //2) Advanced filtering
    //Param
    let queryStr= JSON.stringify(queryObj)
    queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`)
    console.log(JSON.parse(queryStr))
    let query = Tour.find(JSON.parse(queryStr))


    //2)Sorting
    if(req.query.sort){
      query=query.sort(req.query.sort);
      //sort=price increasing
      //sort=-price decreasing 
    }
    //3)Field limiting
    if(req.query.fields){
      const fields=req.query.fields.split(',').join(' ');
      query= query.select(fields)
    }else{
      query= query.select('-__v')
    }



    const tours=await query

    console.log(req.query);
    // const tours = await Tour.find({
    //   duration:5,
    //   difficulty:'easy'
    // }) //Reading
    // const tours = await Tour.find()
    //   .where("duration")
    //   .equals(5)
    //   .where("difficulty")
    //   .equals("easy");

    res.status(200).json({
      status: "Success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      satus: "Failed",
      message: "Bug",
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      satus: "Failed",
      message: "Bug",
    });
  }
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
exports.upDateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
