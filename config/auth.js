// //.config/auth.js
// var passport      = require('passport');
// var BasicStrategy = require('passport-http').BasicStrategy;
// var User          = require('../models/user.js');
//
//
// passport.use(new BasicStrategy(
//   function(username, password, next) {
//     User.findOne({username: username}, function(err, user){
//       if(err) {
//         return next(err);
//       }
//       //No user was found with that username
//       if(!user) {
//       return next(null,false);
//       }
//       user.verifyPassword(password, function(err, isMatch){
//         //Error
//         if (err) {
//           return next(err);
//         }
//         //No password match
//         if (!isMatch) {
//           return next(null, false);
//         }
//         //Success, return user with the next middleware
//         return next(null, user);
//       });//End password verify
//     });//End findOne
//   }//End BasicStrategy
// ));//End passport use
//
//
// exports.isAuthenticated = passport.authenticate('basic', { session : false });
