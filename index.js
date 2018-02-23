var express = require('express');
var alexa = require('alexa-app');
var fetch = require('node-fetch');

var PORT = process.env.PORT || 5000;
var app = express();

var alexaApp = new alexa.app('alexa');

alexaApp.express({
  expressApp: app,
  checkCert: true,
  debug: false
});

// from here on you can setup any other express routes or middlewares as normal

alexaApp.launch(function(request, response) {
  response.say('You launched the app!');
});

/*
alexaApp.dictionary = {
  names: ['matt', 'joe', 'bob', 'bill', 'mary', 'jane', 'dawn']
};
*/

alexaApp.intent('LaunchIntent', null, function(request, response) {
  fetch('https://api.spacexdata.com/v2/launches/upcoming')
    .then(res => res.json())
    .then(json => {
      response.say(json[0].rocket.rocket_name);
    });
});

app.listen(PORT, () =>
  console.log(
    'Listening on port ' + PORT + ', try http://localhost:' + PORT + '/test'
  )
);
