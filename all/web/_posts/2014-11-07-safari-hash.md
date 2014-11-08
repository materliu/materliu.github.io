---
layout: post
title: Safari 302跳转丢失URL中的hash
---

### Safari 302跳转丢失URL中的hash

试验了以下URL地址： http://materliu.test.org/index.html#appname=test  这个请求返回一个302跳转， 跳转到 http://materliu.test.org/index.html?userid=2342

在chrome下试验， console.log(location.href); console.log(location.hash)
http://materliu.test.org/index.html?userid=2342#appname=test
\#appname=test

在Safari下试验， console.log(location.href); console.log(location.hash)
http://materliu.test.org/index.html?userid=2342
""

Safari在302跳转的时候将hash信息丢掉了， 如果302跳转的是一个不同的页面呢？