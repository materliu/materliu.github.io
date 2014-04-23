---
layout: post
title: html entity html 实体 转义
---

## html entity html 实体 转义

[html实体表在线查询](http://www.ascii.cl/htmlcodes.htm)

    var escapeEntityMap = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'    // 这里可能会颠覆你的三观，我们理解的html entity不都是&# + 数值吗？ 为什么这里会有一个x呢

        // 呈上注释， x是表示后边跟的数值是16进制的表示方法， / 的 html entity的真实值是 &#47, 转化成16进制不刚好是 x24吗。
    };

曾经看过上边这样一段代码， 不明白为啥实体会写成 &#x27的形式， 后来明白了， 看代码中注释。 特此记录！

