---
layout: post
title: 如何强行弹出窗口
---

## 如何强行弹出窗口

真是道高一尺魔高一丈。有各种工具来强行拦截弹出窗口，就有别的方法来强行弹出。





一个可以不被广告拦截器拦截的弹出窗口，参见地址：http://www.iecn.net/forum/showthread.php?s=&threadid=14903

　　ForceWindow.iclass.js代码如下（使用、讲解、相关说明全部在注释中）：



------------------------------------------------------------------------------------

/**

* =========================================================================

* 本程序可自由复制、修改、传播，不得删除以下信息。如用于商业用途须经原作者同意方可使用。

* =========================================================================

* 程序名称：ForceWindow(@iClass.JS)

* 描　　述：“冲破”广告拦截软件，强制弹出窗口。

* 版　　本：1.0.0

* 创建时间：2004年1月19日

* 修改时间：2004年1月19日

* 文件名称：ForceWindow.iclass.js

* 作　　者：钟钟

* 邮箱地址：zz@iecn.net zz315@163.com

* 版权声明：本程序属于iClass.JS，版权归作者所有。

* 有关iClass计划详见：http://www.iecn.net/forum/showthread.php?threadid=14811

* =========================================================================

*/



/**

* 定义ForceWindow类构造函数

* 无参数

* 无返回值

*/

function ForceWindow ()

{

    this.r = document.documentElement;

    this.f = document.createElement("FORM");

    this.f.target = "_blank";

    this.f.method = "post";

    this.r.insertBefore(this.f, this.r.childNodes[0]);

}



/**

* 定义open方法

* 参数sUrl：字符串，要打开窗口的URL。

* 无返回值

*/

ForceWindow.prototype.open = function (sUrl)

{

    this.f.action = sUrl;

    this.f.submit();

}



/**

* 实例化一个ForceWindow对象并做为window对象的一个子对象以方便调用

* 定义后可以这样来使用：window.force.open("URL");

*/

window.force = new ForceWindow();



/**

* 用本程序弹出的窗口将不会被广告拦截软件拦截，但有一个缺点：你无法象对window.open弹出的窗口那样对外观进行定制。

* 你当然也可以在使用前实例化一个ForceWindow对象：

* var myWindow = new ForceWindow();

* 这样来使用：

* myWindow.open("URL");

* 本程序测试通过的浏览器：IE 5+、Firefox 1.0、Mozilla 1.7.5、Netscape 7.2、Opera 7.23

* 友情提示：如果你将本程序用于强制弹出广告，请更多的想想浏览者的感受！

*/

------------------------------------------------------------------------------------

