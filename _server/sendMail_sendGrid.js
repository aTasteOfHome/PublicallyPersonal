var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

exports.sendMail= function(req, res) {
  var data = req.body;

  var mailOptions = {
    from: new helper.Email(data.contactEmail),
    to: new helper.Email(process.env.PERSONAL_EMAIL),
    subject: 'Website message from ' + data.contactName,
    content: new helper.Content('text/plain', data.contactMsg)
  }
  var mail = new helper.Mail(mailOptions.from, mailOptions.subject, mailOptions.to, mailOptions.content);

  var pingMailOptions = {
    from: new helper.Email('noreply@andrewtsai-publicallypersonal.herokuapp.com'),
    to: new helper.Email(data.contactEmail),
    subject: 'Thank you for contacting me!',
    contact: new helper.Content('text/plain', 'Hi ' + data.contactName + ', \n\n' +
      'Thank you for checking out my website, "andrewtsai-publicallypersonal.herokuapp.com"! Feel free to check out my linkedin, or if ' +
      'you are more musically inclined, my musician page at "www.facebook.com/Tsaiguymusic". \n\n' +
      'Have a good one, \nAndrew Tsai' +
      '\n\n= = Copy of message sent = = \n\n\n' + data.contactMsg)
  }
  var pingMail = new helper.Mail(pingMailOptions.from, pingMailOptions.subject, pingMailOptions.to, pingMailOptions.text);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  var pingRequest = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: pingMail.toJSON(),
  });

  sg.API(pingRequest, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    
    if(error){
      res.json({
        Status: false,
        message: 'Send failed; unable to connect to ' + data.contactEmail
        data: {
          status: response.statusCode,
          body: response.body,
          headers: response.headers
        }
      });
    }else{
      sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
        if(error){
          res.json({
            Status: false,
            message: 'Send failed; unable to establish contact with website owner\'s mailing address, ' + process.env.PERSONAL_EMAIL,
            data: error
          });
        }else{
          res.json({
            Status: true,
            message: 'Message successfully sent!'
          });
        }
      });
    }
  });
}