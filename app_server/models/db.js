var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
	dbURI = process.env.MONGODB_URI; 
}
mongoose.connect(dbURI);


//Monitor mongoose connection events
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});



// Monitor Node process events so that we can close the Mongoose connection when the application ends

var gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function (){
		//Run an anonymous function when closed
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// Event listeners:

process.once('SIGUSR2', function() {
	/** When nodemon restarts the application due to changes in the source
		files, the application closes the current Mongoose connection first
	**/
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGINT', function() {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});

process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});


require('./locations');




