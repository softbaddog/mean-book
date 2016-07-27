var mogoose = require("mongoose"),
	Schema = mogoose.Schema;

var postSchema = new Schema({
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