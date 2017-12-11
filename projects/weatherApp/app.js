// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });



//b2c064bfef2c1fe063451aeff5aa2fc5


const request = require('request');

const apiKey = 'b2c064bfef2c1fe063451aeff5aa2fc5';

request({
  url: `https://api.darksky.net/forecast/${apiKey}/38.613499,-90.202443`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log('The current temperature is : ', body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
});
