---
layout: post
title: chrome地址栏直接打开tencent串
---

## 在chrome地址栏中直接打开tencent串

chrome的默认行为是当你在地址栏中输入一个非http https ftp chrome等开头的信息的时候， chrome会使用默认的搜索引擎发起一个搜索行为， 而腾讯广泛使用的调起客户端的tencent串协议就没办法直接在地址栏中调试了

Tencent串是一种URL Protocol Handler，也可以理解成用户自定义协议或伪Http协议。实现从web端调用本地客户端的功能，并根据约定携带自定义的数据。

URL Protocol Handler 可以从运行窗口、dos命令行、浏览器地址栏运行。

使用URL Protocol Handler需要有三步：

1. 注册协议

    通过写windows注册表实现，在HKEY_CLASSES_ROOT下建立Tencent的注册表项

    Tencent下：

    DefaultIcon下：

    Command下：

    都需要生成一定的键值 d:\programe files\tencent\qq\bin\timwp.exe

2. 实现协议处理程序

    即上面注册的Timwp.exe，它接受命令行参数，处理该协议。

3. 协议发起

    在浏览器或运行窗口中输入tencent://123，windows会从注册表中查找匹配的协议名，如果找到，则调用它注册的协议处理程序，并将参数传入，这样就实现了从web端调用本地客户端的能力。

    QQ程序安装时以及每次QQ启动时都会重新注册自己目录下的timwp.exe作为处理tencent协议的程序。

chrome解决方法：

1. 打开chrome的setting

2. 找到 search 一项

3. manage

4. 在other search engines 添加一个

    * add a new search engine  输入 no search
    * keyword                  输入 null
    * url with %s in           输入http://%s

5. 把新添加的项设为默认search engine即可
