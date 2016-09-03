'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

exports.sendMail = function(req, res){
	var data = req.body;
	var andrewEmail=process.env.PERSONAL_EMAIL

	var mailOptions = {
		from: data.contactEmail,
		to: andrewEmail,
		subject: 'Website message from ' + data.contactName,
		text: data.contactMsg
	};

	var pingMailOptions = {
		from: andrewEmail,
		to: data.contactEmail,
		subject: 'Thank you for contacting me!',
		text: 'Hi ' + data.contactName + ', \n\n' +
			'Thank you for checking out my website, "andrewtsai-publicallypersonal.herokuapp.com"! Feel free to check out my linkedin, or if ' +
			'you are more musically inclined, my musician page at "www.facebook.com/Tsaiguymusic". \n\n' +
			'Have a good one, \n- Andrew Tsai' +
			'\n\n= = Copy of message sent = = \n' + data.contactMsg
	}

	transporter.sendMail(pingMailOptions, function(errorPing, responsePing){
		if(errorPing){

			//handle the error
			console.log(errorPing);
			console.log(responsePing);
			console.log('ping failed');

			res.json({
				Status: false,
				message: 'Send failed; unable to establish contact with ' + data.contactEmail
			});

		}else{
			transporter.sendMail(mailOptions, function(error, response){
				if(error){

					//handle the error
					console.log(error);
					console.log(response);
					console.log('send failed');

					res.json({
						Status: false,
						message: 'Send failed; unable to establish contact with website owner\'s mailing address, ' + andrewEmail
					});
				}else{
					console.log('Message sent!');
					res.json({
						Status: true,
						message: 'Message successfully sent!'
					});
				}
			});
		}

		transporter.close();
	});
};