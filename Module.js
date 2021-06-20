// To import variable and function from file using require function
const name = require('./Module-names')
const sayhi = require('./Module-utils')
const data =  require('./Alt-Exp')
// Use it 
console.log(data);
sayhi(name.name1);
sayhi(name.name2);
sayhi(name.name3);