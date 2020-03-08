const http = require('http');
const param = process.argv[2];

http
  .get(param, function(response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
  })
  .on('error', console.error);
