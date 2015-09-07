//./models/user.js
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var bcrypt    = require('bcrypt');

//UserSchema
// ==============================
var userSchema = new Schema({
  name: String,
  email: {type: String, requried: true, unique: true},
  password: {type: String, required: true, select: false}
});

//Hash user password before saving
userSchema.pre('save',function(next){
  var user = this;

  //Hash password for new or changed passwords
  if(!user.isModified('password')) return next();

  //Generate Salt
  bcrypt.genSalt(5, function(err,salt){
    bcrypt.hash(user.password, salt, function(err,hash){
      if(err) return next(err);
      //Change the password to the hashed version
      user.password = hash;
      next();
    });//end hash
  });//end generate salt
});//end save

//Method to compare given password with the database hash
userSchema.methods.authenticate = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
}


//Create User model out of userSchema
var User = mongoose.model('User', userSchema);

module.exports = User;
