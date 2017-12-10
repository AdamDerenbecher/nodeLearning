console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Adam', 1, 'Adam', 1, 2, 3, 4]);
console.log(filteredArray);

// var res = notes.add(9, -2);
// console.log(res);
//
// var resArrow = notes.addArrow(9, -2);
// console.log(resArrow);

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
