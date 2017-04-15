var concatStream = require('concat-stream');
var http = require('http');
var url = process.argv[2];

http.get(url, (res) => {
  res.pipe(concatStream(data => {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
