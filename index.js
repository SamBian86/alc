var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end('顾晓倩我好爱你哦!!!\n<p style="width:100%;position:fixed; bottom:0; text-align:center;"><a href="http://www.miitbeian.gov.cn/">苏ICP备17050016号</a></p>');
}).listen(80,"0.0.0.0");

console.log('NodeJS Server running at http://127.0.0.1:80');