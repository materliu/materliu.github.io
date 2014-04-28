---
layout: post
title: 解释一下webstorm的code style配置项
---
    
# 解释一下webstorm的code style配置项

最近组内在打造统一的代码风格，每个人都自觉的按照规范文档给自己的偏好编辑器配上一配，我一直在用webstorm，ctrl + alt + s 打开webstorm的settings。

Project settings 下边的第一项就是code style。往下看IDE settings却找不到code style，所以就心生纳闷，难道 webstorm不支持global 的code style ？

所以就查了一下资料，发现技巧在这里：


打开code style的选项卡，点击general 有一个scheme的选项，学问就出在这里：

Project- 指的就是project 级别的 code style（ps：我们习惯称： code convention）

如果你想修改project级别的code style，点击manage，直接用其他的scheme 覆盖project即可。

Global- 除project之外的所以其他的scheme 都会是global生效的，默认是预定义的default（ps：这个scheme是不可更改的，当发生更改时，webstorm会生成一个新的scheme）。