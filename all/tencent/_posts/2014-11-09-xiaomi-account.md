---
layout: post
title: 小米账号登陆控制
---

## 小米账号登陆控制

闲来无事试验了一把小米的账号登陆，整个cookie的控制流程：

清空浏览器跟小米相关所有域名的cookie， 进入dev.xiaomi.com 发现种了两个cookie 一个是 xiaomi.com 的 _ga, google analytics的cookie， 另一个 dev.xiaomi.com JSESSIONID（看来没做分布式处理？）

点击登陆跳转到 https://account.xiaomi.com/pass/serviceLogin?callback=http%3A%2F%2Fdev.xiaomi.com%2Fsts%3Fsign%3DAvBYgOcCk%252BoGUoNZkjHLAVM2CuY%253D%26followup%3Dhttp%253A%252F%252Fdev.xiaomi.com%252Fhome&sid=developer

然后多了几个cookie：
account.preview.n.xiaomi.net    明眼人一看就知道这是个小米的内部域名，属于乱入，我们不管
account.xiaomi.com   没有跟登陆相关的信息
xiaomi.net  没有跟登陆相关的信息

点击登陆按钮：
页面跳转进相关业务页面：
xiaomi.com 下多了 userId(Session) 字段， 用来标识用户。

dev.xiaomi.com  下多了 serviceToken(Session) 字段， 用来调用相关的cgi接口， 验证登录态？

account.xiaomi.com 多了passToken(Session), pwdToken(host only 说明js无法读取,Session）, userId(Session)

（注意浏览器必须彻底退出，而不是窗口关闭，才算是关闭页面）关闭页面, 再次进入：dev.xiaomi.com  发现之前Session的cookie全部没有了。重新登陆，点击注销， 发现

account.xiaomi.com passToken没有了，pwdToken还在，所以说passToken对于登陆来说至关重要。
dev.xiaomi.com serviceToken 还在，就是说如果dev.xiaomi.com没有校验登陆态，只是校验serviceToken的话，dev.xiaomi.com的服务这时候依然可用。明显不合理。
