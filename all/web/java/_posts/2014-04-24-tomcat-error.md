---
layout: post
title: tomcat报错的各种情况
---

## tomcat报错的各种情况

1. can't load .... jar文件

一般是因为项目中的lib下的jar包跟tomcat下的lib下的jar包有重复，用lib下的重复或者冲突的jar包代替tomcat下的jar包或者删除项目中lib下重复或者冲突的jar包（如果可以的话）

