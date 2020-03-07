const http = require('http');
const param = process.argv[2];
const bl = require('bl');

http.get(param, function(response) {
  response.pipe(
    bl(function(err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
