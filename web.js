var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());
var contents = fs.readFileSync('index.html');
var buffer = new Buffer(contents);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
