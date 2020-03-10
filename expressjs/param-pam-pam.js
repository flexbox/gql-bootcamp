const express = require('express');
const crypto = require('crypto');
const port = process.argv[2];

const app = express();

function encrypt(id) {
  result = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
  return result;
}

app.put('/message/:id', function(request, response) {
  const id = request.params.id;
  const data = encrypt(id);

  response.send(data);
});

app.listen(port, () =>
  console.log(`\nExample app listening on http://localhost:${port}`)
);
