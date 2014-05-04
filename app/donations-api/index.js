
var express = require('express');
var app = module.exports = express();
var async = require('async');

//mock out model if in development mode (default)
var model = (app.get('env') === "development") ? '../models/donations/mock' : '../models/donations';

//initialize model
var donation = require(model)();

app.get('/api/donations', function(req, res) {
  async.parallel([
      donation.totalDonationDollars,
      donation.totalDonationCount,
      donation.donationCountBySource,
      donation.uniqueDonors,
      donation.uniqueRegisteredDonors,
      donation.impressionCountBySource
  ],
  function (err, result) {
    if (err) throw err;
    res.json({
      totalDonationDollars: result[0][0].totalDonationDollars,
      totalDonationCount: result[1][0].totalDonationCount,
      donationCountBySource: {
        EML: result[2][0].donationCount,
        SMS: result[2][1].donationCount,
        WEB: result[2][2].donationCount
      },
      totalDonors: result[3][0].totalDonors,
      totalRegisteredDonors: result[4][0].totalRegisteredDonors,
      impressionCountBySource: {
        EML: result[5][0].impressions,
        WEB: result[5][1].impressions
      }
    });
  });




});
