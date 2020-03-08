const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/home', (request, response) => response.send('Hello World!'));

app.listen(port, () =>
  console.log(`\nExample app listening on http://localhost:${port}`)
);
