var concatStream = require('concat-stream');
var async = require('async');
var http = require('http');
var urlList = process.argv.slice(2);

var q = async.queue((url, callback) => {
  http.get(url, (res) => {
    res.pipe(concatStream(data => {
      callback(data.toString());
    }));
  });
});

q.push(urlList, console.log);
