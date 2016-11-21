var mongoose = require( 'mongoose' );

var openingTimesSchema = new mongoose.Schema({
	days: {type: String, required: true},
	opening: String,
	closing: String,
	closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
	author: String,
	rating: {type: Number, "default": 0, min: 0, max: 5}, //deault doesn't have to be in quotes, but it's a reserved word so good idea to do so
	timestamp: String,
	reviewText: String,
	createdOn: {type: Date, "default": Date.now}
});

var locationSchema = new mongoose.Schema({
	name: {type: String, required: true},
	address: String,
	rating: {type: Number, "default": 0, min: 0, max: 5}, //deault doesn't have to be in quotes, but it's a reserved word so good idea to do so
	facilities: [String],
	coords: {type: [Number], index: '2dsphere'},
	openingTimes: [openingTimesSchema],
	reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);

