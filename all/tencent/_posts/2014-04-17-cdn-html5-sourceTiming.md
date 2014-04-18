---
layout: post
title: 【CDN支持HTML5-resourceTiming】增加静态资源的返回头Timing-Allow-Origin
---

## 【CDN支持HTML5-resourceTiming】增加静态资源的返回头Timing-Allow-Origin

Web性能优化再填利器！
轻松获得用户端JS、Css、图片等资源的网络请求时间 — 没错，包含DNS，TCP，request、response等等消耗，就如在用户端安排了httpwatch！
 
目前只有chrome25+、ie10支持（约4%左右用户），我们一起先用起来，完善我们的监控！
 
感谢CDN同学的大力支持，另外存储平台、qz服务器都会在最新的迭代版本中支持Timing-Allow-Origin，预计4月份8点20分发！

灰度覆盖范围：广东电信用户
 
覆盖的主要域名：user.qzone.qq.com   *.qzs.qq.com  *.pengyou.com  *.photo.qq.com   (分别对应空间主框架，相册，朋友网，新photo几个业务)
 
已添加返回头的静态资源域名：*.qzonestyle.gtimg.cn  *.qzs.qq.com   以及相册大图b域名已经支持(3.11的邮件里)

chrome或IE10下打开控制台，输入performance.webkitGetEntries() 然后回车可见（IE10的话去掉webkit前缀）一系列resouceTiming对象，可逐个点开查看内容，如下图，我们可以看到这个CSS文件的tcp connect时间，dns时间等很细致的数据：

假如没有设置Timing-Allow-Origin的话，我们是无法拿到不同域的静态资源的tcp时间，dns时间等数据的（根据http://www.w3.org/TR/resource-timing/#cross-origin-resources的规定，跨域资源需要添加这个返回头），如下图是属于broadcast.qq.com下面的资源，几个关键点时间都是0：