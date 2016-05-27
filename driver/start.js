#!/usr/bin/env node
var app = require('../server.js');

 
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
});