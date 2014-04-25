---
layout: post
title: alloyteam.oa.com_md使用说明
---

## alloyteam.oa.com_md使用说明

因为tapd的wiki系统不支持markdown语法，我们项目中使用markdown编写的README.MD文件直接粘贴过去就会存在样式问题，所以在内网搭建了一个stackedit。

直接查看效果，点击： http://alloyteam.oa.com/md/viewer.html?url=http://alloyteam.oa.com/readme/qqfindmobile.md

使用方法：

1. http://alloyteam.oa.com/md/index.html   打开markdown在线编辑器

1. 将自己项目的readme文件发布到内网环境

Svn checkout： http://tc-svn.tencent.com/bapp/bapp_connect_rep/connect_proj/trunk/site/alloyteam_oa_com

将readme文件放到readme目录中， 命名不要重复

运行mod命令， 部署readme文件

3. 直接录入wiki系统，传播： http://alloyteam.oa.com/md/viewer.html?url=http://alloyteam.oa.com/readme/{name}  name处为2中部署的readme文件。

