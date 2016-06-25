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

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			//handle the error
			return console.log(error);
		}
		console.log('Message sent: ' + info.response)
	});

	res.json(data);
};