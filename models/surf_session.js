var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//UserSchema
// ==============================
var surfSessionSchema = new Schema({
  title: String,
  location: String,
  surfHeight: Number,
  weather: String,
  temperature: Number,
  waterQuality: String,
  crowd: String,
  comment: String,
  user: { type: Schema.Types.ObjectId , ref: 'User' }
});


var surfSession = mongoose.model('SurfSession', surfSessionSchema);

module.exports = surfSession;
