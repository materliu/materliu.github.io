---
layout: post
title: 2014-04-03-grunt_connect指定path.md
---

需求是这样的： 我们的页面是部署在域名 qun.qq.com/search/mobileqq/ 路径下的

而通过 yeoman 默认生成的项目是通过把 app 目录中的内容部署到 localhost/ 根目录下来进行server部署的。

那么如何把项目内容， app下的内容部署到 localhost/search/mobileqq/ 目录下呢？

我搜了一下 grunt connect 似乎没有提供类似的配置接口， 懒得去修改它的代码， 所以用了一种变通的方式：

无非就是生成一个临时的mountserver目录， ./mountserver/search/mobileqq

然后把 app 目录中的内容拷贝到 这个临时目录中

connect 映射 .mountserver 目录

[这是我在 stackoverflow 上的回答](http://stackoverflow.com/questions/21400675/using-grunt-contrib-connect-open-page-url-with-added-context-path/22827103#22827103)

[项目Gruntfile.js下载](/attachments/2014-04-03-Gruntfile.js)

