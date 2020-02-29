const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const filter = `.${process.argv[3]}`;

fs.readdir(folder, function(err, list) {
  if (err) return console.error(err);

  list.map(item => {
    if (path.extname(item) == filter) {
      console.log(item);
    }
  });
});
