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
  .post(usersController.newUser)
  .get( usersController.getAllUsers);


//Surf Sessions Routes
// ====================================
Router.route('/surf_sessions')
  .get(surfSessionsController.getAll)
  .post( surfSessionsController.new);

Router.route('/surf_sessions/:surf_sessions_id')
  .get( surfSessionsController.getOne)
  .put( surfSessionsController.edit)
  .delete( surfSessionsController.delete);


module.exports = Router;
