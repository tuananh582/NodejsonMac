const express = require("express");
const TourController = require("./../controllers/tourController");
const router = express.Router();
router.route("/")
  .get(TourController.getAlltour)
  .post(TourController.createTour);

module.exports= router  
