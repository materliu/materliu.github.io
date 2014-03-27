---
layout: post
title: 2014-03-26-windowonError不是万能的.md
---

window.onError是万能的吗？被设计成捕获一切运行时异常，事实告诉我们捕获是可以的，
但是在webkit内核下存在跨域js资源产生的错误无法定位
高居badJS排行榜的就包括这个问题
Script Error._|_0。

参考这篇文章
http://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox


