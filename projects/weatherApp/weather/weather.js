const request = require('request');

const apiKey = 'b2c064bfef2c1fe063451aeff5aa2fc5';

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined,  {
        currentTemperature: body.currently.temperature,
        currentFeelsLike: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
