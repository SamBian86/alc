const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    msg: '顾晓倩我好爱你哦!!!',
    copyright: '苏ICP备17050016号',
    copyrightLink: 'http://www.miitbeian.gov.cn/'
  })
})

// f1ccb8
router.get('/birthday', (req, res, next) => {
  res.render('birthday')
})

module.exports = router

