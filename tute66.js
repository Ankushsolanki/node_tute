const http=require('http'); //imported http module in tute66 file
const fs=require('fs');//we have imported fs(fileSystem) module in tute66 file
const fileContent =fs.readFileSync('tute61.html')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log('Listening on port 80');
})