/**
 * Dependencies
 */
var express = require('express');


/**
* Express.js setup
*/
var app = express();

/**
* Backend routing setup
* routing.js will be run for every request sent to this app.
*/
var routing = require('./routing.js')();
app.use('/', routing);

module.exports = app;