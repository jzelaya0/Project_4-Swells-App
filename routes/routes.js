// routes.js
var express = require('express');
var Router  = express.Router();
var jwt        = require('jsonwebtoken');
var config     = require('../config');


//CONTROLLERS
// ================================================================
authController         = require('../config/auth.js');
usersController        = require('../controllers/users.js');
surfSessionsController = require('../controllers/surf_sessions.js');

//Authenticate Routes
// ====================================
Router.route('/authenticate')
  .post(usersController.authenticate);


//User Routes
// ====================================
Router.route('/users')
  .post(usersController.newUser)
  .get(authController.isAuthenticated, usersController.getAllUsers);


//Surf Sessions Routes
// ====================================
Router.route('/surf_sessions')
  .get(surfSessionsController.getAll)
  .post(authController.isAuthenticated, surfSessionsController.new);

Router.route('/surf_sessions/:surf_sessions_id')
  .get(authController.isAuthenticated, surfSessionsController.getOne)
  .put(authController.isAuthenticated, surfSessionsController.edit)
  .delete(authController.isAuthenticated, surfSessionsController.delete);


// Route middleware to verify a token
Router.use(function(req, res, next) {
	// do logging
	console.log('A visitor has arrived');
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if(token){
    // Verify secret and check expiration date
    jwt.verify(token, superSecret, function(err, decoded) {
      if (err) {
        res.status(403).send({
        	success: false,
        	message: 'Failed to authenticate token.'
    	});
      } else {
        // If token is valid, save to request for use in other routes
        req.decoded = decoded;
        next(); // Procceed to the next routes
      }
    });
  } else {
    //If no token not present
    // return an HTTP response of 403 (access forbidden) and an error message
 	 	res.status(403).send({
 	 		success: false,
 	 		message: 'No token provided.'
 	 	});
  }
});//end middleware


module.exports = Router;
