/**
* Dependencies
*/
var express = require('express');
var router= express();

//include static files in the client dir
router.use(express.static(__dirname+'/_client'));

//setup backend routing
module.exports = function(){

	/**
	* All HTTP GET requests get routed to the directory requested in the GET request.
	* By default will load index.html
	*/
	router.get(/^(.+)$/, function(req, res) {
    	res.sendFile(__dirname + req.params[0]);
    });

    return router;
}
