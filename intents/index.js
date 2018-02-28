var LaunchIntent = require('./Launch');

module.exports = function(app) {
  console.log('Register Intents');
  app.intent('LaunchIntent', null, LaunchIntent);
};
