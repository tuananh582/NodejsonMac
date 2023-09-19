const express = require('express');
const checktour = require("./../middleware/CheckidTour");
const tourControlle = require("./../controllers/tourcontrollers");
const Router = express.Router();
// Router.param('id',checktour)

Router.route("/")
  .get(tourControlle.getAllTours)
  .post(tourControlle.createTour);
Router.route("/api/v1/tours/:id")
  .get(tourControlle.getTour)
  .patch(tourControlle.upDateTour)
  .delete(tourControlle.deleteTour);

module.exports = Router;
