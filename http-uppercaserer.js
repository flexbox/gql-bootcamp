const http = require('http');
const param = process.argv[2];
const map = require('through2-map');

http
  .createServer(function(request, response) {
    if (request.method === 'POST') {
      request
        .pipe(
          map(function(chunk) {
            return chunk.toString().toUpperCase();
          })
        )
        .pipe(response);
    } else {
      response.end(`\nYou need to send a POST`);
    }
  })
  .listen(param);

console.log(`\nServer running at http://127.0.0.1:${param}/`);
