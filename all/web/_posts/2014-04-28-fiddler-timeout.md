---
layout: post
title: 用fiddler模拟网络请求超时
---
    
# 用fiddler模拟网络请求超时

用fiddler模拟网络请求超时

最近要测试程序对cgi 请求超时的兼容，所以就需要模拟超时，第一个想到的就是fiddler工具，说一下具体的做法：

Rules -> Customize Rules

搜索内容 "oSession["response-trickle-delay"]" ，修改一下这里就行了. 把它的值设为10000，这样就一定能够引起超时了，保存文件。这里的值本来是150.

Rules -> Performance -> Simulate Modem Speeds 勾选

直接在fiddler命令行输入 bpafter http://needstopurl  直接阻塞对应url的返回也可。
