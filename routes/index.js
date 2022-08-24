const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    msg: "缘起性空，人生如梦，道法自然，无心可修，阿赖耶识，知行合一。",
    copyright: "苏ICP备17050016号",
    copyrightLink: "http://www.beian.miit.gov.cn",
  });
});

// f1ccb8
router.get("/birthday", (req, res, next) => {
  res.render("birthday", {
    title: "卞梦玥小朋友百日宴邀请函",
  });
});

module.exports = router;
