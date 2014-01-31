
// what do you think is required?
// .json or .js file?
var data = require('./data');
console.log(data.text); // logs 'some text from .js file'

// we've learned .js > .json

/**
 * Let's make it clear 
 */

data = require('./data.json');
console.log(data.text); // logs 'some text from .json file'