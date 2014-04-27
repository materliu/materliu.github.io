---
layout: post
title: Q+ 应用迁移至 Qzone 方案,VM原有架构，VM新版架构
---

## Q+ 应用迁移至 Qzone 方案


	1. webkit 应用怎么办？（无解）
	2. 当Q+应用和Qzone合并时候，中转页面是否要被移除，或者是迁移到Qzone域下。（可能得移除，当然也要看应用的合并策略）

Conflicting modification on October 30, 2012, 22:11:58:
主要目标：

	1. 在 Qzone 能够直接打开 Q+ App
	2. 应用能够暂时继续使用 Q+ openAPI 接口，自动转接到 fusionAPI

方案概述：
   在qq.com子域名下部署整套qplus相关cgi，vm页面。vm 本身的运行机制和架构不变，有效利用qq.com域名登录态。cgi 迁移如下：
     openid.qplus.com -> openid.qplus.qq.com
     vm.qplus.com -> vm.qplus.qq.com
     cgi.qplus.com -> cgi.qplus.qq.com

具体方案：

	1. 数据库方案
		1. Q+ App 数据库信息单向同步到 Qzone，同步过程需要修改 App 打开信息。比如 App 打开地址等。

	2. 打开APP

          App 打开地址和登陆态
          第一、二方应用需要可以由 VM 负责种一次 Cookie，或者批量修改 ptlogin 地址。
          第三方 App 需要修改 openid.qplus.com 对应修改成 openid.qplus.qq.com，或者直接让 qzone的openid兼容Q+ App。


	1. API的适配

          可选方案1：在 qplus.api.js 通过简单 if else 做平台区分，为 fusion api 定制一套兼容、map映射代码，避免由于qplus.api.js 架构变动所带来的重构、测试人力消耗。VM 架构基本不变，根据不同平台，执行不同平台代码，或发起不同的cgi调用。

          可选方案2：不再加载vm.html，根据平台动态加载api逻辑代码，api.js退化为加载器。加载qplus.api.js后，先使用现有的apiMap并flattern（避免原有逻辑的脚本错误），然后根据平台加载相应版本的逻辑代码，当平台为空间时通过map做接口映射。为了保证代码在动态加载时正常运行，保留api.js的ready队列功能。

          API 适配问题：

          1、简单映射到 fusion，如 app.share  -> sendStory，针对回调的返回参数格式做适当的格式化。
          2、q+实现了，但fusion未提供，如max，直接空实现，返回错误码。
          3、q+通过客户端/cgi实现了，fusion通过cgi实现，保留q+原来的实现和数据返回格式，针对少数客户端提供的数据接口，可以通过cgi方式进行拟补。

          事件适配问题：
          1、大部分事件可以空实现
          2、pushParam事件，由于qzone上没有出现的场景，可以选择不实现，也可以选择通过cgi进行一次拉取，临时解决这种应用场景。

相关业务问题：

	1. webkit 应用，系统应用如何处理？
	2. 当Q+应用和Qzone合并时候，中转页面是否要被移除，或者是迁移到Qzone域下。
	3. 授权页面可以直接拿掉了。

## VM 原有架构

![vm架构图](/attachments/2014-04-19-VM.js.bmp)

[vm架构图相关资料xmind头脑风暴图下载](/attachments/2014-04-27-VM_qplus.api_structrue.xmind)

## VM新版架构

[vm新版架构图相关资料xmind头脑风暴图下载](/attachments/2014-04-27-VM_rebuild.xmind)
