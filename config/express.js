var config = require('./config');
var	http = require('http');
var	socketio = require('socket.io');
var	express = require('express');
var	morgan = require('morgan');
var	compress = require('compression');
var	bodyParser = require('body-parser');
var	methodOverride = require('method-override');
var	session = require('express-session');
var	MongoStore = require('connect-mongo')(session);
var	flash = require('connect-flash');
var	passport = require('passport');

module.exports = function(db) {
	var app = express();
	var server = http.createServer(app);
	var io = socketio.listen(server);

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	var mongoStore = new MongoStore({
		mongooseConnection: db.connection
		// db: db.connection.db
		// url: config.db
	});

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: mongoStore
	}));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	app.use(flash());

	app.use(passport.initialize());
	app.use(passport.session());

	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/articles.server.routes.js')(app);

	app.use(express.static('./public'));
	require('./socketio')(server, io, mongoStore);

	return server;
};