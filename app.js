var express = require('express');
var app = express();

var server = app.listen(3000, function(){
  console.log('Listening on port %d', server.address().port);
});

//load modules
var dashboard    = require('./app/dashboard-page');
var donationsApi = require('./app/donations-api');
var campaignsApi = require('./app/campaigns-api');

//attach modules
app.use(express.static(__dirname + '/public'));
app.use(dashboard);
app.use(donationsApi);
app.use(campaignsApi);
