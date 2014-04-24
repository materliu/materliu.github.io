---
layout: post
title: postgresql配置时如果用户名是中文的解决方案
---

## postgresql配置时如果用户名是中文的解决方案

新建一个用户，在命令行窗口输入runas /user:postgres cmd（postgres是新建的用户名）



然后再进行数据库的初始化就行了！！





初始化成功以后用管理员登记服务！



登记服务的时候pg_ctl register -N postgres -D c:/pgsql/data 加上-U postgres -P （密码）





在服务中右键点击属性，重新输入一遍密码。应用，启动





开始以后输入encoding gbk





win7 注意以管理员的身份注册服务！