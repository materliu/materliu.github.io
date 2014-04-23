---
layout: post
title: 2014-04-15-QQ客户端rich化.md
---

## QQ客户端rich化

什么叫做客户端rich化？

当我们把一条链接粘贴到聊天窗口中，聊天窗口中链接下方生成更丰富的预览信息

客户端rich化的条件？

1. url是安全的  安全是从电脑管家拉的信息

2. url位于白名单内  白名单是产品配置的

3. 具备rich化的必须字段

rich化的展现？

1. 客户端本身存在多套展现模板， 这个需要相关开发在后台配置，接口人是：cgi: mapleliang  客户端: liuweiliu  shujianyuan

tencent串是否直接支持rich化？

tencent串并不支持rich化， 现在的做法是tencent串转url, 跟maple约定一个短链地址， 比如： http://find.qq.com/tencent-protocol.html?tencent=tencent://***

客户端聊天窗遇到这个url的时候，会去cgi那里拉取相关信息， cgi会告诉客户端 这条url是打开tencent串的，tencent串的地址是啥，rich的展示应该用什么模板

但要考虑如果客户端rich化失败，那么用户点击这条链接就是直接打开打开url所指向的url地址，http://find.qq.com/tencent-protocol.html?tencent=***

所以一定注意兼容这种情况， 就是直接在浏览器中打开上述地址也要能正常的跳转tencent串。兼容方案就是实现一个中转页。中转页进行302跳转到相应tencent串。


2. 群课程的rich化url http://qun.qq.com/rich/?groupcode=388980287&courseid=4171

3. QQ新闻rich话url http://view.inews.qq.com/q/WXN20140418005761071?refer=mobileqq


