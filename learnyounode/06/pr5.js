var getDirectoryFiles = require('./getDirectoryFiles');

var logger = function (err, data) {
  if (err) {
    console.log(err);
  }

  data.forEach(function (item) {
    console.log(item);
  });
};

getDirectoryFiles(process.argv[2], process.argv[3], logger);
