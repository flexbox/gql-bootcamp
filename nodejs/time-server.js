const net = require('net');
const param = process.argv[2];

function addZero(i) {
  return (i < 10 ? '0' : '') + i;
}

function now() {
  const d = new Date();
  const date = `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(
    d.getDate()
  )}`;
  const time = ` ${addZero(d.getHours())}:${addZero(d.getMinutes())}\n`;
  const result = date + time;

  return result;
}

const server = net.createServer(function(socket) {
  socket.end(now());
});

server.listen(Number(param));
console.log(`\nready on http://localhost:${param}`);
