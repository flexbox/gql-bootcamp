const http = require('http');
const param = process.argv[2];

function getTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function getUnixTime(time) {
  return { unixtime: time.getTime() };
}

http
  .createServer(function(request, response) {
    const parsedUrl = new URL(request.url, 'http://example.com');
    const time = new Date(parsedUrl.searchParams.get('iso'));
    let result = undefined;

    console.log('parsedUrl', parsedUrl);
    console.log('time', time);
    console.log('request.url', request.url);

    if (parsedUrl.pathname === '/api/parsetime') {
      result = getTime(time);
    }
    if (parsedUrl.pathname === '/api/unixtime') {
      result = getUnixTime(time);
    }

    if (result) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
  })
  .listen(Number(param));

console.log(
  `\nServer running at http://127.0.0.1:${param}/api/parsetime?iso=2020-03-08T16:22:44+0000`
);
