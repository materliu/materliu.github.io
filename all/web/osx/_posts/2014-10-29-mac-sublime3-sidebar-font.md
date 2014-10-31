---
layout: post
title: 修改Sublime Text 3 的侧边栏字体大小
---
    
# 修改Sublime Text 3 的侧边栏字体大小

首先需要确保安装了Package Control
Package Control作为ST必备插件，这里就不多介绍了，没装的话，google一下，各种介绍以及安装教程贴，当然，使用其官网的安装命令是最靠谱的了：https://sublime.wbond.net/installation

然后安装PackageResourceViewer
快捷键 ⌘(command)+⇧(shift)+P 打开 Command Palette
输入 Package Control:Install 回车，等待加载package列表
搜索并安装 PackageResourceViewer 包

最后，使用PackageResourceViewer打开Theme文件进行编辑
快捷键 ⌘(command)+⇧(shift)+P 打开 Command Palette
输入 PackageResourceViewer: Open Resource 回车，打开包列表
选择 Theme - Default，再选择 Default.sublimt-theme
搜索 sidebar_label，在 "class": "sidebar_label" 后边加一行："font.size": 18，将字体大小设置为18，保存。
好啦，大功告成！

如果觉得行间距太小，可以往上找下，有个class:"sidebartree"，调一下里边的`rowpadding`配置即可。

