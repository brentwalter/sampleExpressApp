var express = require('express');
var app = module.exports = express();
var request = require('request');
var async = require('async');

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){

  var reqRoot = 'http://' + req.headers.host + '/api';

  //DISCLAIMER: this is a really terrible way to get data.
  // You should use the models, rather then requesting
  // your own, external data api. I did it this way to demonstrate
  // making http requests to external apis and aggregating their
  // results.
  async.parallel({
    donations: function(callback) {
      request.get(reqRoot + '/donations', function(err, response, body) {
        if (err) {
          callback(err);
        }
        else if (response.statusCode == 200)  {
          callback(null, JSON.parse(body));
        }
      });
    },
    campaigns: function(callback) {
      request.get(reqRoot + '/campaigns', function(err, response, body) {
        if (err) {
          callback(err);
        }
        else if (response.statusCode == 200) {
          callback(null, JSON.parse(body));
        }
      });
    }
  },
  function(err, result) {
    if (err) throw err;

    console.dir(result);

    //render view with data
    res.render('dash', result);
  });
});
