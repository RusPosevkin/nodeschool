var fs = require('fs');
var path = require('path');

module.exports = function (dir, extensions, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }

    if (extensions !== void 0) {
      var filteredList = list.filter(function (item) {
        return path.extname(item).slice(1) === extensions;
      });

      callback(null, filteredList);
    } else {
      callback(null, list);
    }
  });
};
