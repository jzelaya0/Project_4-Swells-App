//./controllers/surf_sessions.js
var SurfSession = require('../models/surf_session.js');
var User         = require('../models/user');
var mongoose     = require('mongoose');

// GET ALL SURF SESIONS /api/surfSession for GET
// ===================================
function getSurfSessions(req, res) {
  //Finds a surf session with specific user with that username
  SurfSession.find({}).lean().exec(function(err, sessions) {
    if(err) {
      console.log('GET request for all Surf Sessions');
      return res.send('Something went wrong');
    }

    var counter = 0;
    var sesh = sessions.length;
    //Get access to the surf session
    var closure = function(sessions){
      return function(err, user){
        counter ++ ;
        if(err) res.send(err);

        sessions.username = user.username;

        if(counter === sesh) {
          return res.json(sessions);
        }
      };
    };//End Closure

    //Iterate through all sessions to get username
    for (var i = 0; i < sesh; i++) {
      User.findById(sessions[i].userId, closure(sessions[i]));
    }

  });//End SurfSession find
}

// GET ONE SURF SESSION /api/surfSession/:surfSession_id for GET
// ===================================
function getOneSurfSession(req, res) {
  console.log(req.user._id);
  SurfSession.find({
    userId: req.user._id,
    _id: req.params.surfSession_id
  },function(err,surfSession){
    if(err) {
      res.send(err);
    }
    res.json(surfSession);
  });
}

// POST A SURF SESSION /api/surfSession for GET
// ===================================
function postSurfSession(req, res) {
  //Create a new instance of the SurfSession model
  var surfSession = new SurfSession();

  surfSession.title        = req.body.title;
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
    if(err) {
      return res.send(err);
    }
    res.json({message: "Session added", data: surfSession});
  });

}

// UPDATE A SESSION /api/surfSession/surfSession_id for GET
// ===================================
function updateSurfSession(req, res) {
  SurfSession.update({
    userId: req.user._id,
    _id: req.params.surfSession._id
  }, {
    title: req.body.title
  },
  function(err){
    if(err) {
       res.send(err);
    }
    res.json({message: 'Update Successful'});
  });
}

// DELETE A SESSION /api/surfSession/:surfSession_id for DELETE
// ===================================
function deleteSurfSession(req, res) {
  SurfSession.remove({
    userId: req.user._id,
    _id: req.params.surfSession._id
  },
  function(err){
    if(err) {
      res.send(err);
    }
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
