const http = require('http');
const fs = require('fs');
const param = process.argv[2];
const file = process.argv[3];

http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(file).pipe(response);
  })
  .listen(param);

console.log(`\nServer running at http://127.0.0.1:${param}/`);
