var fs = require('fs');
var filePath = process.argv[2];

(function () {
  var result = fs.readFile(filePath, function newLinesCounter(err, content) {
    try {
      var count = content.toString().split('\n').length - 1;
      logger(count);
    } catch (err) {
      logger('ERROR -> ' + err);
    }
  });
})(logger);

var logger = function (data) {
  console.log(data);
};
