---
layout: post
title: 修改npm的镜像地址 
---
    
# 修改npm的镜像地址

有些同学的网络环境可能比较复杂，直接安装或者更新npm官方的包往往不能成功，这时候可以考虑切换镜像地址来实现。

推荐镜像地址： http://registry.npmjs.vitecho.com

几种使用方式：

临时使用

npm --registry "http://registry.npmjs.vitecho.com" install express

长期修改镜像地址

npm config set registry "http://registry.npmjs.vitecho.com"

或者直接打开配置文件手动编辑

npm config edit

在打开的文件中直接添加  registry = http://registry.npmjs.vitecho.com