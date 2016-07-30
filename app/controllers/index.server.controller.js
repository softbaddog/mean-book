exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log("Last Visit Datetime: " + req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('index', {
		title: 'Hello World',
		user: JSON.stringify(req.user)
	});
};