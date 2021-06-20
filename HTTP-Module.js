// HTTP : Hyper text transfer protocol
const http = require('http')

// For creating a server using http
// Takes two simple parameters req(request) and res(response)
const server  = http.createServer((req,res)=>{
    res.write('Welcome to my server bruh!');
    res.end();
})

// We can also navigate here there 
const server2 = http.createServer((req,res)=>{
    // Gives all info about rewq server
    console.log(req);
    if(req.url ==='/'){
        res.end('Home Page Buddy');
    }
    if(req.url === '/about'){
        res.end('About page buddy');
    }
    if(req.url === '/go'){
        res.end(`<h1>Hello World</h1>`)
    }
})

// Listen event and port 5000
server2.listen(5000);
