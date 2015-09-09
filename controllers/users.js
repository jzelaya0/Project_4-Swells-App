//./controllers/users.js
var User       = require('../models/user.js');
var bodyParser = require('body-parser');
var jwt        = require('jsonwebtoken');
var config     = require('../config');

//Set secret for creating tokens
var superSecret = config.secret;

// GET ALL USERS
// ===================================
function getUsers(req, res) {
  User.find(function(err, users){
    if(err) return res.send(err);
    res.json(users);
  });
}

// POST NEW USER
// ===================================
function createNewUser(req, res) {
  if(!req.body.username || !req.body.password){
    return res.json({message: 'Error on request'});
  }
  //Create a new instance of User model
  var user = new User({
    username: req.body.username,
    email   : req.body.email,
    password: req.body.password
  });
  //Save User if no errors
  user.save(function(err){
    if(err) return res.json({message:"User already exists"});
    res.json({success: 'User created!'});
  });
}

// AUTHENTICATE USER
// ===================================

function authenticateUser(req, res) {
  //Check for errors upon request
  if(!req.body.username || !req.body.password){
    return res.json({message: 'Error on request'});
  }
  User.findOne({
    username: req.body.username
  }).select('Name username password').exec(function(err, user){
      if(err) throw err;

      //No user with that user name was found
      if(!user){
        res.json({
          success: false,
          message: 'Authentication Failed. User was not found'
        });
      }else if(user){
        //Check if password matches
        var validPassword = user.comparePassword(req.body.password);
        if(!validPassword){
          res.json({
            success: false,
            message: 'Authentication Failed. Wrong Password'
          });
        }
      }else {
        //if user is found and password is correct
        var token = jwt.sign({
          username: user.username
        }, superSecret,{
          expiresInMinutes: 1440 //Expires in 24hours
        });

        //Return information including token as json
        res.json({
          success: true,
          message: 'Here is your token!',
          token  : token
        });
      }//end conditional
  });
}//end authenticateUser

//Export User Controller
module.exports = {
    getAllUsers   : getUsers,
    newUser       : createNewUser,
    authenticate  : authenticateUser,
};
