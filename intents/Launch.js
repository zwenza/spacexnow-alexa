module.exports = function(request, response) {
  console.log('Got LaunchIntent');
  return fetch('https://api.spacexdata.com/v2/launches/upcoming')
    .then(res => res.json())
    .then(json => {
      var firstLaunch = json[0];
      var next = datefns.distanceInWords(
        firstLaunch.launch_date_utc,
        new Date()
      );

      console.log('Response: ' + next);
      response.say('The next launch will be in ' + next);
      response.send();
    });
};
