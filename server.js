//server.js
//BASE SETUP
// ========================================================
var express    = require('express');
var mongoose   = require('mongoose');
var passport   = require('passport');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port       = process.env.PORT || 3000;

// Create Express App
var app = express();

//CONNTECT TO DATABASE
// ==============================
mongoose.connect('mongodb://jesse:iration@ds035653.mongolab.com:35653/swellsdb',
  function(err) {
    if(err) return err;
    return "Connected to Mongo";
});

//EXPRESS CONFIGURATION
// ==============================
app.use(morgan('dev'));//Log all requests to the console
app.use(bodyParser.json());// Grab information from html forms

//Require Routes.js
routes = require('./routes/routes.js');//load routes
app.use(routes)


//LAUNCH PORT
// ==============================
app.listen(port,function(err){
  if(err) return console.log(err);
  console.log('Listening on port', port);
});
