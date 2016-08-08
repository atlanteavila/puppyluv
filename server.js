// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// connect our database
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/cbb');


// Espress
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

app.use(express.static(__dirname + '/public'))

var port = process.env.PORT || 3000;
app.set('port', port);


// Start server
app.listen(port, function(){
  console.log('Server is up and running');
});