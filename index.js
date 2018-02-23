var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Initialize the Alexa SDK
var Alexa = require('alexa-sdk');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.post('/', function(req, res) {
  // Build the context manually, because Amazon Lambda is missing
  var context = {
    succeed: function(result) {
      console.log(result);
      res.json(result);
    },
    fail: function(error) {
      console.log(error);
    }
  };
  // Delegate the request to the Alexa SDK and the declared intent-handlers
  var alexa = Alexa.handler(req.body, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
