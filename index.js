var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    res.end('顾晓倩我好爱你哦!!!\n');
}).listen(80,"0.0.0.0");

console.log('NodeJS Server running at http://127.0.0.1:80');