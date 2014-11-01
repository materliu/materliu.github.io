---
layout: post
title: 在mac本地部署gruntjs.com, 并设置自启动
---
    
# 在mac本地部署gruntjs.com, 并设置自启动

gruntjs.com 如何在本地起起来可以按照gruntjs.com github 上项目的README执行即可。

重要的是如何设置mac的自启动， 可以参考文章： [Mac OS X添加开机自动执行指令](http://www.2cto.com/os/201305/207672.html),  脚本执行命令填写为： nohup npm start &, 让npm任务在后台已守护进程的形式运行。

为了让脚本能在计算机联网后去执行git pull，需要使用sleep，如果为了保证安全还需要设置一个timeout， mac shell本身不带timeout， 用brew 安装 coreutils 之后shell就会有一个gtimeout的命令， [参见](http://stackoverflow.com/questions/3504945/timeout-command-on-max-os-x)  




