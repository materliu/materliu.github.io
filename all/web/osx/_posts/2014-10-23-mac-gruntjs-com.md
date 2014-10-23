---
layout: post
title: 在mac本地部署gruntjs.com, 并设置自启动
---
    
# 在mac本地部署gruntjs.com, 并设置自启动

gruntjs.com 如何在本地起起来可以按照gruntjs.com github 上项目的README执行即可。

重要的是如何设置mac的自启动， 可以参考文章： [Mac OS X添加开机自动执行指令](http://www.2cto.com/os/201305/207672.html),  脚本执行命令填写为： nohup npm start &, 让npm任务在后台已守护进程的形式运行。




