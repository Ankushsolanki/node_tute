const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    res.end('This is the home page');
    if (req.url==='/about') {
        res.end('This is about page ,It consist of history of user');
    } 
        res.end(`'Oops! This is not valid url'
       <p><a href='/'>Go Back</a></p>`)
    

})

server.listen(5000);