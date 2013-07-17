var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());
var contents = fs.readFileSync('index.html');
buffer = new Buffer();

app.get('/', function(request, response) {
  response.send(buffer.toString('utc-8', contents));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
