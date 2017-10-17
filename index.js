var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end('顾晓倩我好爱你哦!!!\n<a href="iosamap://path?sname=%E6%B1%9F%E8%8B%8F%E7%9C%81%E6%97%A0%E9%94%A1%E5%B8%82&slat=31.56439674249347&slon=120.29885728963085&dname=%E6%B9%98%E6%BD%AD%E5%B8%82%E9%9F%B6%E5%B1%B1%E5%B8%82%E9%9F%B6%E5%B1%B1%E6%9D%91&dlat=27.90337&dlon=112.48065&dev=0&t=1">地图</a><p style="width:100%;position:fixed; bottom:0; text-align:center;"><a href="http://www.miitbeian.gov.cn/">苏ICP备17050016号</a></p>');
}).listen(80,"0.0.0.0");

console.log('NodeJS Server running at http://127.0.0.1:80');