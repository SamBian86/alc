var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end('顾晓倩我好爱你哦!!!\n<a href="baidumap://map/direction?origin=latlng:31.57003745,120.3054559%7Cname:%E6%B1%9F%E8%8B%8F%E7%9C%81%E6%97%A0%E9%94%A1%E5%B8%82&destination=latlng:27.90337,112.48065%7Cname:%E6%B9%98%E6%BD%AD%E5%B8%82%E9%9F%B6%E5%B1%B1%E5%B8%82%E9%9F%B6%E5%B1%B1%E6%9D%91&mode=transit&region=%E6%97%A0%E9%94%A1%E5%B8%82&output=html">地图</a><p style="width:100%;position:fixed; bottom:0; text-align:center;"><a href="http://www.miitbeian.gov.cn/">苏ICP备17050016号</a></p>');
}).listen(80,"0.0.0.0");

console.log('NodeJS Server running at http://127.0.0.1:80');