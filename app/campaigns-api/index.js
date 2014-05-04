
var express = require('express');
var app = module.exports = express();
var async = require('async');

//initialize campaigns models
var campaign = require('../models/campaigns')();

app.get('/api/campaigns', function(req, res) {
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
