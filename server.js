/**
 * Dependencies
 */
var express = require('express');


/**
* Express.js setup
*/
var app = express();
//include static files in the client dir
app.use(express.static(__dirname+'/_client'));

app.get(/^(.+)$/, function(req, res) {
    res.sendFile(__dirname + req.params[0]);
});

module.exports = app;