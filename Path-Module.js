const path = require('path')

// Get path seperator
console.log(path.sep);

// Join and return final path
const filePath = path.join('web-dev','node');
console.log(filePath);

// used to resolve a sequence of path-segments to an absolute path
console.log(path.resolve('something'));