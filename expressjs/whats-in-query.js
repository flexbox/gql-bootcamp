const express = require('express');
const port = process.argv[2];

const app = express();

app.get('/search', function(request, response) {
  const query = request.query;
  response.send(query);
});

app.listen(port, () =>
  console.log(
    `\nExample app listening on http://localhost:${port}/search?results=recent&include_tabs=true`
  )
);
