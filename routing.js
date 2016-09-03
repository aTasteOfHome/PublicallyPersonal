/**
* Dependencies
*/
var mailer=require('./_server/sendMail.js');
var sendgridMailer=require('./_server/sendMail_sendGrid.js');
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

    router.route('/sendMail').post(mailer.sendMail);
    router.route('/sendMail_sendGrid').post(sendgridMailer.sendMail);

    return router;
};
