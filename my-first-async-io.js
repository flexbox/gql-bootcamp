const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, function doneReading(error, fileContent) {
  if (error) {
    return console.log(error);
  }
  const result = fileContent.toString().split('\n').length - 1;
  console.log(result);
});
