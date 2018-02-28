var LaunchIntent = require('./Launch');

module.exports = function(app) {
  app.intent('LaunchIntent', null, LaunchIntent);
};
