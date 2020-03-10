const express = require('express');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

const app = express();

app.get('/books', function(request, response) {
  fs.readFile(file, function doneReading(error, fileContent) {
    if (error) {
      return res.sendStatus(500);
    }
    try {
      books = JSON.parse(fileContent);
    } catch (error) {
      res.sendStatus(500);
    }
    response.json(books);
  });
});

app.listen(port, () =>
  console.log(`\nExample app listening on http://localhost:${port}/books`)
);
