
module.exports = function() {

  return {
    activatedCampaignCount: function(callback) {
      process.nextTick(function() {
        callback(null, [ { activatedCampaignCount: 1300 } ]);
      });
    },
    registeredCampaignCount: function(callback) {
      process.nextTick(function() {
        callback(null, [ { registeredCampaignCount: 2500 } ]);
      });

    }
  };
};
