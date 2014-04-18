---
layout: post
title: QQ 互联 - Web项目 - SVN规划、测试环境、发布TAG - 流程知会
---

Hi，ALL：
QQ互联官网，QQ互联登录（包括所有语言版本sdk），其他组件（分享、划词、赞、关注、签名档、转存）都前端部分已经全部交接到我们这边，组件部分因为后台逻辑耦合较多，正在陆续交接。
前端部分经过前后台同学、运维同学讨论后，基本确定svn，测试环境，发布流程等，整理周知一下。
 
域名规划：
web server：connect.qq.com
组件cdn: pub.idqqimg.com/qconn/widget/
官网cdn：pub.idqqimg.com/qconn/site/
sdk cdn：pub.idqqimg.com/qconn/sdk/
cgi: cgi.connect.qq.com
 
路径规划：
    connect.qq.com   -> 官网
    connect.qq.com/widget/ -> 组件
    connect.qq.com/sdk/  -> sdk
 
开发环境相关：
svn路径：
官网：http://tc-svn.tencent.com/bapp/bapp_connect_rep/site_proj/trunk  前端接口人：johnnyguo
组件：http://tc-svn.tencent.com/bapp/bapp_connect_rep/widget_proj/trunk 前端接口人：rehornchen
sdk：http://tc-svn.tencent.com/bapp/bapp_connect_rep/sdk_proj/trunk 接口人：materliu
 
前端统一上报公共组件（公共类库，支持测速系统、伯努利、monitor上报），前端接口人：materliu
 
开发模式：原来互联大多采用 CGI 吐页面的方式进行，后续前后台都将逐步启动重构流程，将改成 Fiddler 本地开发模式
 
测试环境相关：
流程跟 module.qplus.com 的模块部署流程一致。
目前暂时还是由开发自行任选测试机部署 （'172.25.75.169' '172.23.136.84' '172.23.136.86' '172.23.136.97' '172.23.136.100' ）
后续会让运维完善自动化系统，由测试负责维护测试环境，开发只需要给出 svn 地址即可。
测试环境目录规划：
~/connect_widget/    ---->  组件
~/connect_site/     ---->  官网
~/connect_sdk/    ---->  sdk
具体测试环境部署流程，编译脚本配置说明，见之前周知邮件：【周知】【第二版】关于Q+ Web模块开发环境、测试环境初始化以及发布指引 ，有不明白之处，可rtx联系rehornchen
 
发布流程相关：
tag规则：
http://tc-svn.tencent.com/bapp/bapp_connect_rep/(项目分类widget) _proj/tags/(项目分类widget)_(项目名shareqq)_(时间戳20121212)
 
tag demo：
http://tc-svn.tencent.com/bapp/bapp_connect_rep/widget_proj/tags/widget_shareqq_20121212001
http://tc-svn.tencent.com/bapp/bapp_connect_rep/widget_proj/tags/site_release_20121212001
 
注意：tag格式请严格按照运维上述约定给出，不然将发布同步脚本将无法正常处理。
 
改好时间戳，打好TAG后，由测试统一建发布单，走正常发布流程。

