//server.js
//BASE SETUP
// ========================================================
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');

// Create Express App
var app = express();

//CONNTECT TO DATABASE
// ==============================
mongoose.connect('mongodb://jesse:iration@ds035653.mongolab.com:35653/swellsdb',
  function(err) {
    if(err) return err;
    return "Connected to Mongo";
})
