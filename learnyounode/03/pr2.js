var fs = require('fs');
var filePath = process.argv[2];

var data = fs.readFileSync(filePath).toString();
var newLinesCount = data.split('\n').length - 1;
console.log(newLinesCount);
