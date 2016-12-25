var mongoose = require('mongoose');
// var Loc = mongoose.model('Reviews'); //Brings in the 'Location' model so we can interact with it

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.reviewsCreate = function(req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

module.exports.reviewsReadOne = function(req, res) {
	if (req.params && req.params.reviewid){ //Check that locationid exists in parameter
		Loc
			.findById(req.param.locationid)
			.select('name reviews')
			.exec(function(err, location){ //Provide output function/callback 
				var response, review;
				if (!location){ // If Mongoose does not return a location, send 404 message and exit function scope
					sendJsonResponse(res, 404, {"message": "locationid not found"});
					return;
				} else if (err){ // If Mongoose returns an error
					sendJsonResponse(res, 404, err); 
				}
				if(location.reviews  && location.reviews.length > 0){ //Check that location has reviews
					review = loca.reviews.id(req.params.reviewid);
					if (!review){
						sendJsonResponse(res, 404, {"message": "reviewid not found"});
					} else {
						response = {
							location: {
								name:  location.name,
								id: req.params.locationid
							},
							review: review
						};
						sendJsonResponse(res, 200, response);
					}	
				} else {
					sendJsonResponse(res, 404, {"message": "No reviews in request"});
				}
				sendJsonResponse(res, 200, {"status":"success"});
			});
	} else { // If the params object or locationid is not found
		sendJsonResponse(res, 404, {
			"message": "Not found, locationId and review are both required"
		});
	}
};

module.exports.reviewsUpdateOne = function(req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

module.exports.reviewsDeleteOne = function(req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

