//./models/user.js
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var bcrypt 		= require('bcrypt-nodejs');

//UserSchema
// ==============================
var UserSchema = new Schema({
	name: String,
	username: { type: String, required: true, index: { unique: true }},
	password: { type: String, required: true, select: false }
});

// Hash before saving
UserSchema.pre('save', function(next) {
	var user = this;
  // hash the password for new users or changes
	if (!user.isModified('password')) return next();

	// Hash
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if (err) return next(err);

		// change the password to the hashed version
		user.password = hash;
		next();
	});
});

//Method to compare given password with the database hash
UserSchema.methods.comparePassword = function(password) {
	var user = this;
	return bcrypt.compareSync(password, user.password);
};


//Create User model out of UserSchema
var User = mongoose.model('User', UserSchema);

module.exports = User;
