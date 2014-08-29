---
layout: post
title: ruby安装gem的时候报错
---

### ruby安装gem的时候报错 报错信息：

ERROR:  Could not find a valid gem 'bundler' (>= 0) in any repository

解决方法：

1. 排查本地sources

    $ gem sources
    *** CURRENT SOURCES ***

    http://rubygems.org/

If not, you should be able to add it with

    $ gem sources --add http://rubygems.org/
    http://rubygems.org/ added to sources

2. 安装需要资源， 内网的话记住添加代理：  `gem install xxx --http-proxy=http://user:password@server`