// routes.js
var express = require('express');
var Router  = express.Router();



Router.get('/', function(req,res){
  res.json({message:"Hello"})
})


module.exports = Router;
