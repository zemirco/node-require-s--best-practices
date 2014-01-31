
// what do you think is required?
// data.js or data/index.js?
var data = require('./data');
console.log(data.text); // logs 'some text from data.js file'

// we've learned [NAME].js > [NAME]/index.js

/**
 * Let's make it clear
 */

// put slash at the end to require the folder
data = require('./data/');
console.log(data.text); // logs 'some text from data/index.js file'