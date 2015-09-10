//server.js
//BASE SETUP
// ========================================================
var path = require('path');
var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var passport   = require('passport');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port       = process.env.PORT || 3000;


//CONNTECT TO DATABASE
// ==============================
mongoose.connect('mongodb://jesse:iration@ds035653.mongolab.com:35653/swellsdb');
//Test Database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not establish database connection'));
db.once('open', function(data){
  console.log("Succesfull database connection");
});

//EXPRESS CONFIGURATION
// ==============================
app.use(morgan('dev'));//Log all requests to the console
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());// Grab information from html forms

//change static folder
//app.use(express.static(__dirname + '/public/'));
app.use(express.static('public'));
//app.use('/css', express.static(__dirname + '/public/css'));
//Use passport in app
// app.use(passport.initialize());


//Require Routes.js
routes = require('./routes/routes.js');//load routes
app.use('/api', routes);

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});


//LAUNCH PORT
// ==============================
app.listen(port,function(err){
  if(err) return console.log(err);
  console.log('Listening on port', port);
});
