const _ = require('lodash');
const arr = [1,[2,3,4,[5,6,7,[8,9]]]];
const newarr = _.flattenDeep(arr);
console.log(newarr);