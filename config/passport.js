var Passport = require('passport'),
	Mongoose = require('mongoose');

module.exports = function() {
	var User = Mongoose.model('User');

	Passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	Passport.deserializeUser(function(id, done) {
		User.findOne({
			_id: id
		}, '-password -salt', function(err, user) {
			done(err, user);
		});
	});
	require('./strategies/local.js')();
};