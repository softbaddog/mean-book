var Config = require("./config");
var Mongoose = require("mongoose");

module.exports = function() {
	var db = Mongoose.connect(Config.db);

	require("../app/models/user.server.model");

	return db;
};