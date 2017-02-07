var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];

(function () {
  var result = fs.readdir(filePath, function (err, list) {
    try {
      var extensionArg = process.argv[3];

      if (extensionArg !== void 0) {
        var filteredList = list.filter(function (item) {
          return path.extname(item).slice(1) === extensionArg;
        });

        logger(filteredList);
      } else {
        logger(list);
      }
    } catch (err) {
      logger('ERROR -> ' + err);
    }
  });
})(logger);

var logger = function (data) {
  if (data.length) {
    data.forEach(function (item) {
      console.log(item);
    });
  } else {
    console.log(data);
  }
};
