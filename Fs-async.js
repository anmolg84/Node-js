// Asynchronous : non-blocking ( the program continues executing and doesn't wait for external resources (I/O) to be available.)

const fs = require('fs');
// Similar to callback functionality
// Async readfile
fs.readFile('./test.txt','utf8',(err,result)=>{
    if(err){
        return;
    }
    console.log(result);
} )
// Async writefile
fs.writeFile('./test.txt','Nowoverwritten by async file',(err,result)=>{
    if(err){
        return;
    }
    console.log(result);
})