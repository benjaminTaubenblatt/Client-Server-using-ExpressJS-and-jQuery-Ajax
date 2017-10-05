var express = require('express');
var app = express();
var port = process.env.PORT || 9999;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/staticContent'));

// routes will go here
app.get('/', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.post('/users', function(req, res) {
  console.log(req.body);
  res.send(req.body);

});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

