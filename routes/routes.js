// routes.js
var express = require('express');
var Router  = express.Router();

//CONTROLLERS
// ================================================================
// authController         = require('../config/auth.js');
usersController        = require('../controllers/users.js');
surfSessionsController = require('../controllers/surf_sessions.js');

//Authenticate Routes
// ====================================
// Router.route('/authenticate')
//   .post(usersController.authenticate);


//User Routes
// ====================================
Router.route('/users')
//   .post(usersController.newUser)
//   .get(authController.isAuthenticated, usersController.getAllUsers);
  .post(usersController.newUser)
  .get(usersController.getAllUsers);


//Surf Sessions Routes
// ====================================
Router.route('/surfSession')
  // .post(authController.isAuthenticated, surfSessionsController.new)
  // .get(surfSessionsController.getAll)
  .post(surfSessionsController.new)
  .get(surfSessionsController.getAll)

Router.route('/surfSession/:surfSession_id')
  // .get(authController.isAuthenticated, surfSessionsController.getOne)
  // .put(authController.isAuthenticated, surfSessionsController.edit)
  // .delete(authController.isAuthenticated, surfSessionsController.delete);
  .get(surfSessionsController.getOne)
  .put(surfSessionsController.edit)
  .delete(surfSessionsController.delete);


module.exports = Router;
