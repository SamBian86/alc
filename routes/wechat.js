const wechat = require('wechat')
const express = require('express')
const router = express.Router()
const config = {
  token: 'bxd5812127',
  appid: 'wx09957e6f988b2bd6',
  encodingAESKey: '54GPqyBMPZp15LmXXIvQJZEwLivzV2nqreabWDgaAtc',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
}

// 微信输入信息都在req.weixin上
router.all('/', wechat(config, (req, res, next) => {
  const message = req.weixin

  if (message.Content !== '') {
    res.reply('乱打咩字呀,仆街仔!~')
  } else {
    res.reply('感谢您的关注')
  }
}))

module.exports = router
