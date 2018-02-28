var express = require('express');
var alexa = require('alexa-app');
var fetch = require('node-fetch');
var datefns = require('date-fns');

var PORT = process.env.PORT || 5000;
var app = express();

var registerIntents = require('./intents');

var alexaApp = new alexa.app('alexa');

alexaApp.express({
  expressApp: app,
  checkCert: false,
  debug: true
});

alexaApp.launch(function(request, response) {
  response.say('You launched the app!');
});

registerIntents(alexaApp);

app.listen(PORT, () =>
  console.log(
    'Listening on port ' + PORT + ', try http://localhost:' + PORT + '/test'
  )
);
