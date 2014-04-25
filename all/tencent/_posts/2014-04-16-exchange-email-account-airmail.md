---
layout: post
title: airmail如何配置exchange账号
---

## airmail如何配置exchange账号

公司的电脑实在是太难用， 所以就把自己的mac入域了， 第一步就是接邮件系统。

一直用airmail客户端， 所以首选用airmail

在账号添加页面， 什么都不输入的情况下点击一下add，会出一个高级选项

在高级选项中，连接方式选择exchange， name都输入 materliu

在server处输入 mail.tencent.com:443

第一次校验通不过，是因为airmail默认的endpoint地址不对， 出错提示出来后，改掉endpoint那里，改成：

https://mail.tencent.com:443/EWS/Exchange.asmx 重新校验即可添加成功。

[airmail 1.3下载](/attachments/2014-04-24-Airmail.app.zip)
[airmail 1.4 beta 239下载](/attachments/2014-04-24-Airmail_Beta.zip)
