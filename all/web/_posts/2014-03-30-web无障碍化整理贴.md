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


### 群系统消息

群系统消息tab， 的访问地址： http://async.qun.qq.com/cgi-bin/sys_msg/getmsg?ver=5311&filter=2

[svn地址](https://tc-svn.tencent.com/basic/basic_imweb_rep/qun_proj/trunk/htdocs/async.qun.qq.com)

怎么在客户端上打开群系统消息：
* 用另一个号码创建一个测试群， 把当前号码加入， 在另一个号码上对当前号码设置管理员身份

* 当前号码收到通知信息， 在客户端闪动， ctrl+alt+z 打开验证消息  自动定位到 群系统消息


### 盲人用户反馈问题待解决

* 您看看收听语音消息有没有什么好的方案呢 现在语音消息不能键盘操作 我想到一个方案是消息列表中上下光标找到一个语音消息,回车播放

* 添加好友的时候按照条件查找，没办法选择省份和地区

* 组合框，一直就不好用，在空间里的修改空间资料那里的组合框虽然能勉强用，但是跑焦点很严重

* 盲人用户-超越  14:23:03 另外,编辑群成员等级头衔的按钮无法用键盘打开,希望帮忙反馈一下

* 另外,文件接完了以后,以前能找到打开文件,打开文件夹之类的,现在这几个版本也没了,不知道是现在这几个版本键盘切不到了,还是完全去掉了呢

* 盲人用户-超越  14:29:31 恩,另外文件助手在往本地下文件的过程中,用键盘无法看到进度,希望帮忙反馈

* 5.4的QQ，ALT家Z调出群的聊天窗口后读的更啰嗦了，以前只是读通知中心，现在还加了一句
  按Enter键发送消息，按Ctrl+Enter键换行
  盲人QQ用户反馈群
  通知中心 文档
   通知中心 文档 只读 http://web.qun.qq.com/notice/index.html#groupuin=95011826

* 还有就是同意拒绝的地方用光标操作的时候还是读的很啰嗦，直接让他按一下光标读一个就可以了，不要每次都读按上下键切换同意、拒绝、忽略、在读同意

