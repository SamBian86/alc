var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	msg: '顾晓倩我好爱你哦!!!',
  	copyright : '苏ICP备17050016号',
  	copyrightLink : 'http://www.miitbeian.gov.cn/'
  });
});

module.exports = router;
