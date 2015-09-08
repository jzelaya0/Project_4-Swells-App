//./controllers/surf_sessions.js
var surfSession = require('../models/surf_session.js');
var User         = require('../models/user');
var mongoose     = require('mongoose');

// GET ALL SURF SESIONS
// ===================================
function getSurfSessions(req, res) {
  //Finds a surf session with specific user with that username
  surfSession.find({}).lean().exec(function(err, sessions) {
    if(err) return res.send('Something went wrong');
    console.log('GET request for all Surf Sessions');

    var counter = 0;
    var sesh = sessions.length;
    //Get access to the surf session
    var closure = function(sessions){
      return function(err, user){
        counter ++ ;
        if(err) res.send(err);

        sessions.username = user.username;

        if(counter === sesh) return res.json(sessions);
      };
    };//End Closure

    //Iterate through all locations to get username
    for (var i = 0; i < sesh; i++) {
      User.findById(locations[i].userId, closure(sessions[i]));
    }

  });//End SurfSession find
}

// GET ONE SURF SESSION
// ===================================
function getOneSurfSession(req, res) {
  console.log(req.user._id);
  surfSession.find({
    userId: req.user._id,
    _id: req.params.location_id
  },function(err,surfSession){
    if(err) return res.send(err);
    res.json(surfSession);
  });
}

// POST A SURF SESSION
// ===================================
function postSurfSession(req, res) {
  //Create a new instance of the SurfSession model
  var surfSession          = new surfSession();

  surfSession.tile         = req.body.title;
  surfSession.longitude    = req.body.longitude;
  surfSession.latitude     = req.body.latitude;
  surfSession.surfHeight   = req.body.surfHeight;
  surfSession.weather      = req.body.weather;
  surfSession.temperature  = req.body.temperature;
  surfSession.waterQuality = req.body.waterQuality;
  surfSession.crowd        = req.body.crowd;
  surfSession.comment      = req.body.comment;
  SurfSession.userId       = req.user._id;

  //Save the surfSession and check for errors
  surfSession.save(function(err){
    if(err) return res.send(err);
    res.json({message: "Session added", data: surfSession});
  });

}

// UPDATE A SESSION
// ===================================
function updateSurfSession(req, res) {
  surfSession.update({
    userId: req.user._id,
    _id: req.params.surfSession._id
  },
  function(err,num){
    if(err) return res.send(err);
    res.json({message: 'Update Successful'});
  });
}

// DELETE A SESSION
// ===================================
function deleteSurfSession(req, res) {
  surfSession.remove({
    userId: req.user._id,
    _id: req.params.surfSession._id
  },
  function(err){
    if(err) return res.send(err);
    res.json({message: 'Successful deletion'});
  });
}


//Export controller
module.exports = {
  getAll  : getSurfSessions,
  getOne  : getOneSurfSession,
  new     : postSurfSession,
  edit    : updateSurfSession,
  delete  : deleteSurfSession
};
