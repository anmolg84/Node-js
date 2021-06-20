// File system built in module
const fs =  require('fs');

// For Synchronized -> Blocking (it halts the program until all the resources are available)

// Read file
const text = fs.readFileSync('./test.txt','utf-8');
console.log(text);

// Write file
fs.writeFileSync('./test.txt','Now this is overwritten');