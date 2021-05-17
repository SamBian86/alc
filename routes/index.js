const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    msg: "发散大魔王_个人网站",
    tips: "等我以后视频阶段性结束了，我会来做我这个网站，内容我差不多已经想好了，就是没有时间...因为是工作之余做的，等视频到达一定的量的时候会到斗鱼循环播放。",
    copyright: "苏ICP备17050016号",
    copyrightLink: "http://www.beian.miit.gov.cn",
    bilibili: "我的B站专栏",
    bilibiliLink: "https://www.bilibili.com/video/BV1U64y127mo",
    zhihu: "我的知乎专栏",
    zhihuLink: "https://www.zhihu.com/column/c_1377551059599073280",
  });
});

// f1ccb8
router.get("/birthday", (req, res, next) => {
  res.render("birthday", {
    title: "卞梦玥小朋友百日宴邀请函",
  });
});

module.exports = router;
