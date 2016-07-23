/**
 * Dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');

/**
 * setup database
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://basic:basic@ds027175.mlab.com:27175/heroku_mfg4kvt2');


/**
* Express.js setup
*/
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

/**
* Backend routing setup
* routing.js will be run for every request sent to this app.
*/
var routing = require('./routing.js')();
app.use('/', routing);

module.exports = app;