---
layout: post
title: 2014-04-11-PC查找README.md
---


# QQ FIND

接口人： rehornchen

## Documentation

[CGI Wiki][1]

[Moniter 视图][2]

[管理后台地址](http://qplus_admin_activity.oa.com)

10.166.131.218 qplus_admin_activity.oa.com

10.136.152.166 qplus1.idqqimg.com qplus2.idqqimg.com qplus3.idqqimg.com qplus4.idqqimg.com qplus5.idqqimg.com qplus6.idqqimg.com qplus7.idqqimg.com qplus8.idqqimg.com qplus9.idqqimg.com

[本地构建工具][3]

* 安装方式：npm install -g grunt-cli
* 安装成功后构建命令： grunt

QQ查找4.0以后已经换用 grunt 编译工具

QQ查找3.0以前使用modjs作为编译工具

dist 对应 Modfile 中定义的 dist 任务队列

mod dist

···

图片压缩服务：
http://www.smushit.com/


测试环境同步：

···sh

1 表示同步到 172.23.136.84 测试机

./p 1

···




## 发布流程

先ARS预编译：
http://pub.qplus.oa.com/html/ars_precompile.php

得到类似地址：

/data/sites/cdn.qplus.com/qqfind/js/find.js

/data/sites/cdn.qplus.com/qqfind/index.html

进入ARS发布系统：

http://ars.isd.com/

1. 类目选择：发布请求-免测版本发布
2. 产品选择：开放平台 模块选择：公共平台 其他如版本号等可任意填写
3. 把预编译得到的地址 粘贴到发布内容
4. 下一部处理人选择： 测试童鞋的rtx，如alanqing
5. 提交后知会测试

## zip包策略
* zip包更新 客户端触发时间：

    1. 登陆后一分钟

    2. 打开查找发一次

    3. 点诊断按钮重发一次

    查找的id为1， 但其实还有一个映射，那就是 111

    截止2014/4/11， 有4个业务会在5.3QQ登陆后1分钟检查是否有zip包更新， 发四次请求

        1-查找

        117-群资料卡

        121-群共享

        157-群AIO通知中心

    5.2QQ登陆后一分钟内检查是否有zip包更新， 发三次请求

        1-查找

        117-群资料卡

        121-群共享

    5.1QQ登陆后一分钟内检查是否有zip包更新，发二次请求

        1-查找

        117-群资料卡

    5.0QQ登陆后一分钟内检查是否有zip包更新，发一次请求

        1-查找

    2.01QQ登陆后一分钟内检查是否有zip包更新，发一次请求  这之后客户端直接从2.0.1 跳到了 5.0

        1-查找

    客户端底层使用的httpdownload 在http error的情况下会去请求重试， 最多重试3次。

## 客户端相关

* 1.95

    强制刷新 和 清理缓存的接口1.95已经实现了

    cleanWebCache 无需参数

    reloadIgnoreCache 无需参数

    缓存清理完成 调用页面的OnCleanCacheDone，等会我把OnCleanCacheDone改成onCleanCacheDone，和以前风格保持一致

    内网访问地址： \\tencent.com\tfs\跨部门项目\cip\发布基线库\01_Hummer\QQ2013UpdateProj\7359_FinalRelease_sign_perf

* 巧遇卡

    支持巧遇卡的版本内网访问地址 \\tencent.com\tfs\跨部门项目\cip\发布基线库\01_Hummer\QQ1.95\7619_FinalRelease_sign_perf

* commonapi

    [下载](/attachments/2014-04-14-commonapi.mht)

## 出过的问题记录

* 4月10日， 下午6:08分， 客户端拉取本地zip包的请求量暴涨，一直维持在2倍左右，zip包的cdn流量暴涨7倍左右。

    后台 客户端拉取zip包cgi的monitor视图地址：[点击](http://monitor.server.com/link/graph/viewid:5751)  id是： 328936

    查看公司各个业务CDN资源出口流量等等各种情况： [内网系统,cdn系统](http://hy.oa.com)

    进去之后点击 首页-静态加速-即时通信产品部-Qplus桌面 就可以看到我们 pub.idqqimg.com 的出流量等信息

    这个系统的权限可以找 echozheng 申请, leader是：seazhou

    前端同一时间点 在 管理后台发布了pc查找的全国版本zip包。

    聊天记录：
    plutoxiong(熊义林) 04-11 17:44:59
    对比晚上六点前后半个小时的数据
    plutoxiong(熊义林) 04-11 17:45:41
    发布一个查找的包 竟然连带了群资料卡和群AIO这两个包的流量上涨
    plutoxiong(熊义林) 04-11 17:46:25
    资料卡的请求量虽然只有查找的一半 但是流量应该是查找的1.5倍
    plutoxiong(熊义林) 04-11 17:47:53
    是不是这里发布系统有什么BUG 导致前两个包实际没有发布成功 然后昨天发查找的ZIP的时候 把三个包同时放出去了？
    所以才导致这么悲剧的后果
    plutoxiong(熊义林) 04-11 19:29:10
    @luckyhu(胡佳) 给你看PCQQ的登录数据
    plutoxiong(熊义林) 04-11 19:29:27
    每秒钟1W+
    spiritcui(崔明哲) 04-12 13:14:09
    从整体来说，串行和并行是没有区别的，按照每秒1W的请求量，一分钟峰值请求量就应该是180W才对，以前的峰值70W，就是属于不合理的

    luckyhu(胡佳) 04-14 12:58:43
    问题原因已定位到：
    客户端1分钟自动更新这里有一个bug：
    一旦某个业务没有更新，会导致后面的业务不更新（中断更新链）

    截止至5.3 有4个业务加入到自动更新列表，它们的排序如下：
    查找 、群资料卡、群共享、群AIO通知中心
    也就是说如果查找没有更新，群资料卡、群共享、群AIO通知中心也不会发起更新请求

    在查找没有发布新包之前，虽然群资料卡、群共享、群AIO通知中心有发布新包，但实际上客户端登陆后1分钟是不会发起相关更新请求。
    所以群资料卡、群共享、群AIO通知中心发布新包，不会导致请求数增加，也不会下载量大幅增加（因为只有在用户使用相关业务功能时才会发起更新请求，没有登陆后1分钟自动更新）。
    当查找发布新包后，查找 、群资料卡、群共享、群AIO通知中心自动更新逻辑生效，导致请求数增加，离线包下载量增加，进而出现了流量暴增的现象

    luckyhu(胡佳) 04-14 13:17:10
    1分钟自动更新本来是针对查找设立的，后来各个业务又自己加上，就一直存在这个问题
    materliu(刘炬光) 04-14 13:17:54
    那就是从5.1 就开始了
    materliu(刘炬光) 04-14 13:17:58
    5.1 加了 群资料卡


* 天翼号码搜索不到

    天翼号码
    18964493861
    18948788870
    18028711369
    18002571678

* 2013年10月10日

    330111 3.1综合查找曝光量  monitor上报 10点以后的数据- 下午5点的数据
  分析出zip包的使用用户量是 index直接被访问的量的 6倍。
  首页先发布的， 量直接上来了， 后边zip包才更新的。

  luckyhu(胡佳) 10-18 18:01:30
  使用web查找旧版本的用户的客户端版本号有没有？
  目前旧版本访问量来源：
  1.由1.95前版本升级到1.95后版本的用户第一次打开查找（这个应该最多，这部分用户后面会随着正式版普及慢慢减少；2.0优化了预加载的zip包解压逻辑，2.0版本之前，如果用户不使用查找，其本地缓存版本一直比较旧，2.0版本后即便用户不使用查找，其本地缓存版本也会一直更新）

  2.新版本zip包没有下载到或解压失败（这部分用户有一定量，1.99更改策略为：解压失败会直接不在使用本地的缓存，直到有最新版本为止）

  3.QQ在zip包部署时正好crash导致临时目录没清理干净而无法解压（属于极端异常情况，量少，1.99已修正这个场景的处理逻辑）
  jayyu(俞晓炀) 10-18 18:04:10
  那就是需要等1.99的普及？
  luckyhu(胡佳) 10-18 18:06:03
  使用web查找旧版本的用户的客户端版本号有没有？
  luckyhu(胡佳) 10-18 18:09:58
  本地化是CSC控制，可开关，如果某个版本问题严重，我们可以暂时关闭该版本本地化功能
  jayyu(俞晓炀) 10-18 18:11:02
  我们能不能先把本地化关闭一段时间，然后再打开？或者通过csc开关，我们分批将一些号段关闭本地化，让用户更新？
  luckyhu(胡佳) 10-18 18:13:39
  csc关闭后，本地化逻辑不在生效，本地缓存也不会更新，用户打开查找直接使用线上版本
  jayyu(俞晓炀) 10-18 18:15:20
  那是不是下次打开，用户还是用旧的有问题的缓存？
  luckyhu(胡佳) 10-18 18:17:24
  总会有一次使用旧版本，除非他升级到2.0，而且登陆1分钟之后再打开查找 就不会出现访问旧版本
  luckyhu(胡佳) 10-18 18:19:10
  因为之前的逻辑是：先使用旧版本打开，同时查询更新，下次使用才是新版本
  luckyhu(胡佳) 10-18 18:21:45
  之前预加载逻辑：下载zip包后发现本地存在本地缓存是不会直接解压，只有当用户关闭查找窗口时才会解压覆盖；所以如果用户根本没有使用新版查找，会出现一个情况，他本地一直存在一份他第一次下载的查找版本缓存，当他首次打开查找时就会使用该版本
  luckyhu(胡佳) 10-18 18:24:53
  其实就像用户打包了一份老版本，首次打开会使用该版本
  luckyhu(胡佳) 10-18 18:25:47
  2.0对这里做了改进：预加载后，用户未使用查找时会直接更新本地缓存


## 发布历史
* 2013.11.05   发布版本：

    【业务需求】QQ主面板QQ查找入口运营化（2期）
    来自 <http://tapd.oa.com/v3/QQ2009/prong/stories/view/1010014001055843705?jumpfrom=RTX&jump_from_favorite=true>

    【业务需求】QQ主面板QQ查找入口运营化（2期）
    来自 <http://tapd.oa.com/v3/QQ2009/prong/stories/view/1010014001055843705?jumpfrom=RTX&jump_from_favorite=true>

* 2013.12.23   发布版本：

    去掉找人页搜索关键词上报 上报id 11057

* 2.3期的代码变动

  右键菜单功能加载延时， 页面ready 之后才会去加载右键菜单的相关功能。
  技术侧优化
  麻烦重点监测综合页，找人页，找群页，找商家页面 右键菜单功能是否正常。
  通过 点击同城交友、同城老乡 导航到找人结果页时， 搜索提示wording 修改。
  需求链接地址： http://tapd.oa.com/v3/qqsearch_web/prong/stories/view/1010063621005570548
  影响范围，修改了找人页搜索提示栏的展现， 重点测试其他情况下会不会出现展现错误的问题。
  Lbs 开启、关闭处的代码进行了优化。
  评估影响进入找人页时能否成功识别当前用户的lbs状态决定拉起附近的人还是展示提示用户拉起附近的人的画面
  关闭打开lbs时，页面是否能正确响应
  附近的人 处添加 关闭位置信息 按钮
  改动了附近的人处的提示语， 验证各种情况下提示语是否正常。
  在综合页， 找人页搜索栏处的 btn-loc 按钮hover上去的提示语有变动， 请重点验证此处hover时提示语在各种情况下的位置是否正确。
  找人页， 可能认识的人， 附近的人代码结构优化， 验证是否能正确拉取好友，展示条数等。
  找人页推荐首页， 可能认识的人， 附近好友 公用同一个人渲染模板。之前是分开用各自的模板的，这里为了减少代码体积， 特公用。
  综合页 默认页 cgi 出错的情况下，提示用户前往论坛反馈。检查综合首页的默认页在cgi 正确返回和异常返回的情况下是否正常展示。

* 2.4期呱呱需求变更

  前台发给cgi的时候新增一个字段 guagua 默认为0， 为1的时候去拉取呱呱的数据来填充， guaguan用来指示需要拉取几条呱呱数据，在guagua 字段存在的时候， guaguan才生效。
  Cgi 返回格式， 在result 字段中新增 group_guagua 字段， 里边的格式跟group字段保持一致。
  所有的group单个数据增加一个字段，叫做 isGuaGua 用来表示是否为guagua视频群。1 表示是guagua， 0表示不是呱呱，可没有这个字段， 认为不是呱呱


## 查找 查看一个用户查找设置 是否允许被添加好友

   szrxzhong(钟爽) 09-25 10:34:25
   用户说，QQ查不到的这种，后台有没有系统可以看用户他的QQ设置被查找的设置条件么
   materliu(刘炬光) 09-25 17:29:27
   不好意思， 才看到消息
   materliu(刘炬光) 09-25 17:29:35
   后台是可以查看的
   aniszhang 加入了本次会话。
   materliu(刘炬光) 09-25 17:30:00
   【查看用户 是否设置 查找条件】
   materliu(刘炬光) 09-25 17:30:11
   龙飞， 你的那个接口开放出来
   materliu(刘炬光) 09-25 17:30:19
   让szrx 先用着
   szrxzhong(钟爽) 09-25 17:36:19
    ，麻烦给我连接
   aniszhang(张龙飞) 09-25 18:30:40
   cgi.find.qq.com/utils/test/get_userinfo?keyword=18975018928
   aniszhang(张龙飞) 09-25 18:30:50
   host：
   10.12.23.158 cgi.find.qq.com
   aniszhang(张龙飞) 09-25 18:31:57
   直接换keyword参数值就行

## 功能点记录

### 商家资料卡rich化 资料卡上带分享能力， 分享到聊天窗口后对分享信息加以rich化

分享后的页面地址 http://cgi.find.qq.com/rich?type=9&id=234234

type: 商家类型

* 1, 3 都是企业QQ， 不同是有些是靓号，cgi不用关注，统一做企业QQ处理
* 2 wpa商家
* 9 妈妈网数据
* 10 招聘资料卡

id：

* type==1 || type==3  id为企业QQ的kfuin 没有拿到kfuin带过来的就是nameaccount了
* type==2 id为wpa商家的uin
* type==9 id为妈妈网数据的uin
* type==10 id为招聘资料卡的jobid

### 通过tencent串打开查找窗口

1. 晓文实现的一个配置tencent串的程序： [访问](http://hiuman.lu/tencent.html)

    tencent串内容： tencent://finger/?subcmd=OpenWebSearch&exparam=%26search_target%3D0%26search_word%3D234%26FromTencentId%3D2342&tfrom=.qq.com

    因为

    在打开查找的时候，客户端是做了这么几件事 在 http://find.qq.com/index.html?后边把exparam的信息拼接进去

    所以就成了

    http://find.qq.com/index.html?search_target=0&search_word=234&FromTencentId=2343

    tfrom 为什么会有这个无厘头的参数， 据晓文说是有些公司平台在配置的时候url里边必须有 tfrom=qq.com 才给通过

2. 查找是如何利用url中的信息的

    search_target 取值{CONTACT = 0，GROUP = 1，ENTQQ = 2，STRANGER = 3，FRIENDSOCIAL = 4, BUDDY=5 ，industry = 6, activity = 7，profile = 8}

    search_target 取值意义

    0.   综合搜索        配合参数search_word search_keyword使用
    1.   群搜索          配合参数search_word search_keyword使用
    2.   企业QQ搜索      配合参数search_word search_keyword使用
    3.   未知
    4.   未知
    5.   找人页搜索      配合参数search_word search_keyword使用
    6.   综合页导航结果  配合参数search_word search_keyword使用
    7.   跳转到活动页    配合参数search_word使用
    8.   资料卡          配合参数param使用

    你一定觉得很郁闷为什么会有一个search_word 同时有一个search_keyword
    是这样的 search_word 表示触发页面的搜索行为并搜索search_word的值search_keyword 只更改页面搜索框内的值而不触发搜索行为




## QQ 查找 HOST

···

### for QQ 查找，找人页，接口人 rehornchen
10.136.149.166 cgi.find.qq.com

172.23.136.84 find.qq.com

172.23.136.84 pub.idqqimg.com
### for 群查找，接口人 amadeusguo
10.166.133.83 qqun.qq.com

172.27.207.88 1.url.cn

172.27.207.88 2.url.cn

172.27.207.88 3.url.cn

### for 找商家
10.130.88.175 im2.b.qq.com

10.133.3.149 cdn.b.qq.com

10.130.88.175 s.b.qq.com

···

## Examples

[1]: http://tapd.oa.com/v3/Qplus/wikis/view/cgiqqfind "cgi wiki"
[2]: http://monitor.server.com/link/graph/viewid:5097 "monitor view"
[3]: https://npmjs.org/package/modjs "mod js"