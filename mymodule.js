const fs = require('fs');
const path = require('path');

module.exports = function(folder, filter, callback) {
  fs.readdir(folder, function(err, list) {
    if (err) {
      return callback(err);
    }

    list = list.filter(function(file) {
      return path.extname(file) === `.${filter}`;
    });

    callback(null, list);
  });
};
