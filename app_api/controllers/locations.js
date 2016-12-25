var mongoose = require('mongoose');
var Loc = mongoose.model('Location'); //Brings in the 'Location' model so we can interact with it

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.locationsListByDistance = function(req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

module.exports.locationsCreate = function (req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

module.exports.locationsReadOne = function(req, res) {
	// if (req.params && req.params.locationid) { //Check that locationid exists in parameter
	// 	Loc
	// 		.findById(req.param.locationid)
	// 		.exec(function(err, location) { //Provide output function/callback 
	// 			if (!location){ // If Mongoose does not return a location, send 404 message and exit function scope
	// 				sendJsonResponse(res, 404, {"message": "locationid not found"});
	// 				return;
	// 			} else if (err) { // If Mongoose returns an error
	// 				sendJsonResponse(res, 404, err); 
	// 			}
	// 			sendJsonResponse(res, 200, {"status":"success"});
	// 		});
	// } else { // If the params object or locationid is not found
	// 	sendJsonResponse(res, 404, {
	// 		"message": "No locationid in request"
	// 	});
	// }
	Loc
		.find({})
		.exec(function(err,document){
			console.log("meh");
		});
};
/**
module.exports.locationsReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};
**/
module.exports.locationsUpdateOne = function (req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

module.exports.locationsDeleteOne = function (req, res) {
	sendJsonResponse(res, 200, {"status":"success"});
};

