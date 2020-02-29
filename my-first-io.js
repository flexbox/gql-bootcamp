const fs = require('fs');

const file = process.argv[2];
const buffer = fs.readFileSync(file);
const str = buffer.toString();
const result = str.split('\n');

console.log(result.length - 1);
