//.config/auth.js
var passport      = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User          = require('../models/user.js');


passport.use(new BasicStrategy(
  function(username, password, next) {
    User.findOne({username: username}, function(err, user){
      if(err) return next(err);
      if(!user) return next(null,false);

      user.varifyPassword(password, function(err, isMatch){
        if (err) return next(err);
        if (!isMatch) return next(null, false);
        return next(null, user);
      });//End password verify
    });//End findOne
  }//End BasicStrategy
));//End passport use


exports.isAuthenticated = passport.authenticate('basic', { session : false });
