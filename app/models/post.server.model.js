var Mogoose = require("mongoose"),
	Schema = Mogoose.Schema;

var PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});