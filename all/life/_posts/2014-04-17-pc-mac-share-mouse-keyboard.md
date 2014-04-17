---
layout: post
title: 同一网段下pc与pc，pc与mac之间共享键盘鼠标
---

## 同一网段下pc与pc，pc与mac之间共享键盘鼠标

如果是同一网段内， 或者机器之间能相互ping通，事情就非常好办了， 只需要安装一个软件：

[Synergy](http://synergy-foss.org/download/) 这么好的软件居然还是免费的, 当然有能力一定要在其官网上捐助一下

[2014-04-17-win-64](/attachments/2014-04-17-synergy-1.4.17-r2055-Windows-x64.msi)

[2014-04-17-ox](/attachments/2014-04-17-synergy-1.4.17-r2055-MacOSX109-x86_64.dmg)

在有鼠标，键盘的那台机器上启动server模式，注意这里的ip地址，等下要用到

在没有鼠标，键盘的那台机器上启动client模式，填入上边获取到的server的ip地址，注意这里的屏幕名，等下要用到

在server端点击- 设置服务端 - 拖一个屏幕下来 - 双击拖下来的这个屏幕 - 填入上边client获取的屏幕名

两边双双启动，就发现成功连接了

FAQ:
Why do I see the "ipc connection error, connection refused" error?

The problem is that the GUI can't connect to the service, most likely because it's not running. Old versions of the service are sometimes not removed (this is a bug). To workaround this problem, run the following command as administrator:

`sc delete synergy`

Then reinstall the latest version of Synergy.
