---
layout: post
title: 2014-03-30-web无障碍化整理贴.md
---

国内读屏软件[争渡](/attachments/2014-03-30-zdsr_pw_setup_1.4.7.6.exe)

国外读屏软件[NVDA](http://www.topcss.org/demo/nvda-2011.2-user-guide.html)

[360浏览器插件开发页面提供的无障碍知识](http://open.chrome.360.cn/extension_dev/a11y.html)

[alloyteam博客文章1](http://www.alloyteam.com/2012/10/web-accessibility-nvda-screen-reader-software-user-guide/)

[alloyteam博客文章2](http://www.alloyteam.com/2012/10/how-to-develop-accessible-web-site-application/)

[朋友网的经验小结](http://isux.tencent.com/pengyou-accessibility-practice.html)

[讲解很多无障碍化实践的博客](http://www.topcss.org/?cat=1)

[QQ空间、腾讯网无障碍化的一些规范1](http://qzs.qq.com/qzone/v6/accessibility/help.html)

[QQ空间、腾讯网无障碍化的一些规范2](http://www.qq.com/accessibility/)

[QQ空间、腾讯网无障碍化的一些规范3](http://km.oa.com/group/18188/articles/show/127512?kmref=search)

无障碍化的坑

    * 在chrome32中，设置title属性的按钮读屏软件会读出，但到了客户端里面就不行！此时必须设置dom节点的文本，没法设置的话考虑用aria-label属性（争渡读屏）

### 个人经验总结
以下都是QQ5.3客户端内的表现，使用的chrome29同样的webkit内核
* 争渡 对于a 标签 都能通过tab聚焦上去，读法是： a内容 + href里边的内容 如果href是### 那么读屏软件读的就是当前网页地址

* 争渡 对于 button 标签， 都能通过tab聚焦上去， 读法是：aria-label + “按下按钮" + title
没有aria-label的情况： button内内容 + "按下按钮" + title


