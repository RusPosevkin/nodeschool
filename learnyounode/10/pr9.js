const net = require('net');
var portNumber= process.argv[2];

const server = net.createServer((socket) => {
  var date = new Date();
  var month = date.getMonth()+1;
  var output = [
    date.getFullYear(),
    '-',
    month,
    '-',
    date.getDate(),
    ' ',
    date.getHours(),
    ':',
    date.getMinutes()
  ].map((item) => (typeof item === 'number' && item < 10) ? ('0' + item) : item)
  .join('');

  socket.write(output + '\r\n');
  socket.pipe(socket);
  socket.end();
});

server.on('error', (err) => {
  throw err;
});

server.listen(portNumber);
