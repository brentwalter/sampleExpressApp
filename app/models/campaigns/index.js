//get db connection
var db = require('../../../config/database');

module.exports = function() {

  return {
    activatedCampaignCount: function(callback) {
      db.query('SELECT COUNT(campaign_shortname) AS activatedCampaignCount FROM campaigns WHERE sms != ""', function(err, rows, fields) {
        if (err) callback(err);
        callback(null, rows);
      });
    },
    registeredCampaignCount: function(callback) {
      db.query('SELECT COUNT(campaign_shortname) AS registeredCampaignCount FROM campaigns', function(err, rows, fields) {
        if (err) callback(err);
        callback(null, rows);
      });

    }
  };
};
