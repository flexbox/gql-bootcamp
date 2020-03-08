const express = require('express');
const stylus = require('stylus');
const port = process.argv[2];
const file = process.argv[3];

const app = express();

app.use(stylus.middleware(file));
app.use(express.static(file));

app.listen(port, () =>
  console.log(`\nExample app listening on http://localhost:${port}`)
);
