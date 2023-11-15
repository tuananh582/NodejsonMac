const express = require('express');
const userController = require('./../controllers/userController');
const AuthController = require('./../controllers/authController');

const router = express.Router();
router.post('/signup',AuthController.signup)
router.post('/login',AuthController.login)
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;