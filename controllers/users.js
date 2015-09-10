//./controllers/users.js
var User = require('../models/user.js');

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
  // if(!req.body.username || !req.body.password){
    // return res.json({message: 'Error on request'});
  // }
  //Create a new instance of User model
  var user = new User({
    username: req.body.username,
    // password: req.body.password
  });
  //Save User if no errors
  user.save(function(err){
    if(err) {
      res.json({message:"username already exists"})
    }
    res.json({success: 'User created!'});
  });
}

// AUTHENTICATE USER
// ===================================
//
// function authenticateUser(req, res) {
//   //Check for errors upon request
//   if(!req.body.username || !req.body.password){
//     return res.json({message: 'Error on request'});
//   }
//   //Query database to find an existing username
//   User.findOne({username: req.body.username},
//   function(err, user){
//     if(!user) return res.json({message: 'User does not exist'});
//     //If user name exists then verify password
//     user.verifyPassword(req.body.password, function(err, isMatch){
//       if(err) return res.json({message: err});
//       if(!isMatch) return res.json({message: "Invalid Password"});
//       res.json({success: "Successfully Authenticated"});
//     });
//   });
// }

//Export User Controller
module.exports = {
    getAllUsers : getUsers,
    newUser     : createNewUser
    // authenticate : authenticateUser
};
