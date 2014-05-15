---
layout: post
title: 使用yeoman创建webapp项目
---
    
# 使用yeoman创建webapp项目

1. 使用前，首先更新自己本地的yeoman and bower, webapp-generator

2. exec yo webapp, if error occurs, try to upgrade your node by brew update && brew upgrade node, here I upgrade to node 0.10.28

3. 运行grunt提示： Warning: PhantomJs timed out, possibly due to a missing Mocha run() call

所以我首先考虑是否本地 PhantomJs 没有安装， 使用 brew update && brew install phantomjs, 提示已安装

查看项目目录发现是yo webapp 没有自动生成 test 测试相关的代码， 从其他项目之前生成的代码拷贝了一个 test 目录放进来就好了
