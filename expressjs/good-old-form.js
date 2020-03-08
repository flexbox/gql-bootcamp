const express = require('express');
const bodyParser = require('body-parser');
const port = process.argv[2];
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', function(req, res) {
  res.send(
    req.body.str
      .split('')
      .reverse()
      .join('')
  );
});

app.listen(port, () =>
  console.log(`\nExample app listening on http://localhost:${port}`)
);
