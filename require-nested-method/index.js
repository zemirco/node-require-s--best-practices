
// don't
var readFile_wrong = require('fs').readFile;

// do
var fs = require('fs');
var readFile = fs.readFile;

// works both
readFile_wrong('./data.txt', 'utf8', function(err, text) {
  if (err) console.log(err);
  console.log(text);
});

readFile('./data.txt', 'utf8', function(err, text) {
  if (err) console.log(err);
  console.log(text);
});