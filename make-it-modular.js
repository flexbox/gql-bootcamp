const filterFolder = require('./mymodule');

const folder = process.argv[2];
const filter = process.argv[3];

filterFolder(folder, filter, function(err, list) {
  if (err) {
    return console.error('There was an error:', err);
  }

  list.map(file => {
    console.log(file);
  });
});
