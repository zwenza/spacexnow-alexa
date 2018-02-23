var alexa = require('alexa-app');

var app = new alexa.app();
app.launch(function(request, response) {
  response.say('OK').send();
});

// connect to lambda
exports.handler = app.lambda();
