const express = require('express');
const app = express();
const port = process.argv[2];
const file = process.argv[3];
const date = new Date().toDateString();

app.set('view engine', 'pug');
app.set('views', file);
app.get('/home', (request, response) => response.render('index', { date }));

app.listen(port, () =>
  console.log(`\nExample app listening on http://localhost:${port}`)
);
