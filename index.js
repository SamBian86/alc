var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('欢迎来到我的阿里云服务器!\n');
}).listen(80,"127.0.0.1");

console.log('NodeJS Server running at http://127.0.0.1:80');