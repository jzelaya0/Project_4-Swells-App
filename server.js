//server.js
//BASE SETUP
// ========================================================
var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var passport   = require('passport');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port       = process.env.PORT || 3000;
var path       = require('path');


//CONNTECT TO DATABASE
// ==============================
mongoose.connect('mongodb://jesse:iration@ds035653.mongolab.com:35653/swellsdb');
//Test Database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not establish database connection'));
db.once('open', function(data){
  console.log("Succesfull database connection");
})



//EXPRESS CONFIGURATION
// ==============================
// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));//Log all requests to the console
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());// Grab information from html forms

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

//Use passport in app
app.use(passport.initialize());

//Require Api Routes.js
routes = require('./routes/routes.js');//load routes
app.use('/api', routes);

// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


//LAUNCH PORT
// ==============================
app.listen(port,function(err){
  if(err) return console.log(err);
  console.log('Listening on port', port);
});
