var Users = require("../controllers/users.server.controller"),
	Passport = require('passport');

module.exports = function(app) {
	app.route('/signup')
		.get(Users.renderSignup)
		.post(Users.signup);

	app.route('/signin')
		.get(Users.renderSignin)
		.post(Passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));

	app.route('/sigout', Users.signout);

	app.route('/users')
		.post(Users.create)
		.get(Users.list);

	app.route('/users/:userId')
		.get(Users.read)
		.put(Users.update)
		.delete(Users.delete);

	app.param('userId', Users.userById);
};