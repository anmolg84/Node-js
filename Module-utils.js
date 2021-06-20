// Shared function
const sayhi = (name) =>{
    console.log(`Hello ${name}`);
}
module.exports = sayhi;

// Alternative ways to export
module.exports.items = ['item1','item2'];
const person ={
    name:'Anmol'
}
module.exports.obj = person;