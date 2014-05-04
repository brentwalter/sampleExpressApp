
var express = require('express');
var app = module.exports = express();
var async = require('async');

//mock out model if in development mode (default)
var model = (app.get('env') === "development") ? '../models/campaigns/mock' : '../models/campaigns';

//initialize campaigns models
var campaign = require(model)();

app.get('/api/campaigns', function(req, res) {
  //make database requests and render the JSON
  async.parallel([
    campaign.registeredCampaignCount,
    campaign.activatedCampaignCount
  ],
  function(err, result) {
    if (err) throw err;
    res.json({
      registeredCampaignCount: result[0][0].registeredCampaignCount,
      activatedCampaignCount: result[1][0].activatedCampaignCount
    });
  });

});
