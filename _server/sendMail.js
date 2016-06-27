'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

exports.sendMail = function(req, res){
	var data = req.body;
	var mailOptions = {
		from: data.contactEmail,
		to: 'andrewtsai1994@gmail.com',
		subject: 'Website message from ' + data.contactName,
		text: data.contactMsg
	};

	transporter.sendMail(mailOptions, function(error, response){
		if(error){

			response.json({
				Status: false,
				message: error
			});
			//handle the error
			console.log(error);
			console.log(response);

		}else{
			res.json({ 
				Status : true,
 				message : 'Message sent!'
			});

			console.log('Message sent!');
		}
	});

	res.json(data);
};