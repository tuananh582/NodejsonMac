const express = require("express");
const studentControl = require("./../controllers/studentCl");
const Router = express.Router();
Router.route("/")
  .get(studentControl.readStudent)
  .post(studentControl.createStudent);

Router.route("/:id")
  .patch(studentControl.updateStudent)
  .delete(studentControl.delete);

module.exports = Router;
