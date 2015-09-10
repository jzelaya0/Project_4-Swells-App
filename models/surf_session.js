var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//UserSchema
// ==============================
var SurfSessionSchema = new Schema({
  title: String,
  longitude: Number,
  latitude: Number,
  surfHeight: Number,
  weather: String,
  temperature: Number,
  waterQuality: String,
  crowd: String,
  comment: String,
  // userId: { type: Schema.Types.ObjectId , ref: 'User' }
  userId: String
});


var surfSession = mongoose.model('SurfSession', SurfSessionSchema);

module.exports = surfSession;
