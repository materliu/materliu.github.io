---
layout: post
title: 2014-04-10-群文件项目README.md
---

### 打开readme文件的同学，如果本机没有安装markdown相关的查看编辑器可以选用在线版： https://stackedit.io/
## 群文件项目README

接口人：
前台： materliu millerliu

后台: wingspeng qqmtang  zimufeng

客户端： scopezhang

视觉： tobyyu

产品: danyye

## 疑问
1. 开发，调试方式， chrome29中可以直接执行吗？


## Documentation

### relational link
[前台wiki][1] 一般以README.md文件为准，内网wiki算是个摆设了

[CGI Wiki]()

[Moniter 视图-前台](http://monitor.server.com/link/graph/viewid:6196)

[Moniter 视图-CGI](http://monitor.server.com/link/graph/viewid:6261)

[日志Nlog](http://nlog.server.com/)  开发机  群文件   详细的错误信息，疑问

[badJS](http://imweb.server.com/itil.php?ticket=26F2E8D1B5F7B21A241D435A6A4504DBF9F733DE5BA020CFC5DF18E3B4256C636EC4ED78060055C38116F25D214D4F651375EAED90E182B9926A6FA9A6BEA9231A73E1F184F94A5218B0492C83684D5CA14D58A6D128A8F210693EAC89F8645AC6771C12D06048576B371B20E4DC81F74025A0A5FF1F5F0DBA72DBD9468F6B9299B1EF97C241D15ABA8CFB113D3B80EA372806E830CE63BACF0620A223AC943BBB02FDEE0D108311DA754072EA74E1E18A52B9CF93A5D728E60D576B54C68D06A6C61FC2E9E12639&loginParam=disposed&length=34&lengh=34&sessionKey=26F2E8D1B5F7B21A241D435A6A4504DBF9F733DE5BA020CFC5DF18E3B4256C636EC4ED78060055C31BB3D2BCD2D615DC) 疑问，跟Nlog有啥区别

[performance 视图](http://m.isd.com/app/endusermonitor2/config/pointView.php#date=2014-04-15&curTab=speed&productId=19377&serviceId=19377010&moduleId=27597&countryId=1&keyName=%E7%BE%A4%E5%85%B1%E4%BA%AB) 选择外部门业务-R1平台研发系统-我的QQ中心

[mm上报系统视图]() 上报是5分钟实时，告警大概是5-10分钟延迟  页面展示会大概15分钟

[伯努利上报系统视图]()

[dc上报系统视图]()

[dc 群数据的上报格式](http://dc.dt.oa.com/dcreports/edit?dcid=dc00141&timestamp=1395555959)

[本地构建工具grunt学习](http://gruntjs.com/)

[图片压缩服务](http://www.smushit.com/)

[移动web项目前端上线前检查项](https://docs.google.com/spreadsheets/d/1J7cFLKONZdkfi4ZeETwCceGfu5pryO__1bAtglqVcUg/edit#gid=0)

[svn地址-trunk](https://tc-svn.tencent.com/basic/basic_imweb_rep/qun_proj/trunk/htdocs/pan.qun.qq.com)
[svn地址-branches](http://tc-svn.tencent.com/basic/basic_imweb_rep/qun_proj/branches/pan.qun.qq.com)
[svn地址-tags](http://tc-svn.tencent.com/basic/basic_imweb_rep/qun_proj/tags/pan.qun.qq.com)

### 快速上手

#### 学习资料

* css

    * transition transform 缓动
    * animation 动画
    * box-flex

* js

    模块化  requireJS
    分层  MVC
    localstorage 存储

#### 项目说明

群文件使用了grunt这一自动构建工具


如图所示:

* docs目录下存放所有的规范类文档；
* dist目录是grunt生成的处理后的代码目录，不需要主动编辑；

    * css

        index_aio3.1.0.css  全部css打包

    * img

        index_aio3.1.0.png  全部img 合成雪碧图  使用ispriter合并

    * js

        index_aio3.1.0.js    全部js合并  使用r.js合并

    * groupShareClient.html

* test是自动化测试目录，现在尚未加入，预留功能；


clt_filetab目录根目录下的几个文件：

* .jshintrc  jshint 代码检测的配置文件
* bower.json bower 的配置文件， 暂时未用到(2014/02/26)
* Gruntfile.js grunt 的配置文件
* package.json 整个项目其实相当于一个大的nodejs项目，package.json规定了这个nodjs项目用到的所有node_modules
* proj-conf.json  这个是群web团队自己开发的grunt-task 需要去读的配置文件， 包括项目名，cdn版本，等信息，具体参见文件内注释
* proj-task目录是grunt编译工具引用到的所有task的存放目录
* src 所有的逻辑代码

    * css

        * app-box.css  传输盒子样式

    * img

        * file_icon_big  文件类型图标  大图

        * v3

            box_1.png  传输盒子 普通样式

            box_2.png  传输盒子  hover态

            box_empty.png  传输盒子  内容为空背景图

    * js

        * common  公共代码

            db.ajax

            g_cfg_cdnswitch.js  CDN失败切换主站资源

            g_cfg_proj.js    项目配置文件

            g_log.js  日志上报

            g_report.js  视图上报

        * global

            hitch.js  函数绑定参数和this

        * inline  内联代码

            DomReady.js

            TRecord.js  测速上报

        * modules   模块组成

            handler  事件注册与处理  MVC的控制部分

            model    数据

            view       视图

            app.handler.js  应用程序  事件模块

            app.js               应用程序  入口

            app.model.js

        * util    常用类库

            date.js   日期处理

            domCache.js   dom缓存

            fileicon.js   根据文件类型得到图标样式

            xss.js         html代码的转码与解码

            group.js     数据分类汇总

           toast2.js    提示对话框

        * index.js    主逻辑入口   require模块化的main文件

    * groupShareClient.html [入口页面]

最外层目录有

* README.doc  项目的说明文件， 群那边同学交接的时候输出的doc
* clt_filetab_preview  以前的项目目录，已经废弃
* m  一个空的文件夹，问了群相关同学knightli无用的目录
* clt_filetab  现在项目的开发目录， 只需要关注此目录即可

#### 业务体验
* 打开一个群聊天窗口， 点击上方的 文件 tab

* 功能点简介

    * 顶部

        正常模式

            左侧

                排序  点击可选择排序方式

                    上传时间

                    文件类型

                    上传者

                    下载次数

                    文件大小

                共XX个文件  点击可以查看容量等

                    已用容量

                    扩大容量

                    反馈

                    刷新

                    批量操作

            右侧

                盒子  点击能打开文件传输盒子

                上传按钮   点击能上传文件

        批量操作模式

            左侧

                全选 checkbox    已选中文件数目

            删除按钮   批量删除选中文件

            下载按钮   批量下载选中文件

            返回按钮   退出批量操作

    * 正文内容

        分组标题

            文件列表

                第一列  图标  图片则展示缩略图

                第二列  文件信息

                    第一行  标题及文件类型

                    第二行  大小  下载字数   上传者  上传日期

                第三列   操作按钮

                    下载/下载中/查看  （如果已下载则显示查看按钮  如果下载中，则显示下载中） 文件现在状态是通过客户端事件通知回来的吗？疑问

                    更多  【点击将展开更多菜单】

                        预览  当前仅支持图片，后续支持多格式预览

                        另存为  低版本不显示

                        极速下载   不支持极速下载接口的不显示

                        重命名

                        转存为永久文件

                        举报

                        删除


    * 文件传输盒子

        顶部

            清除历史操作   点击能清除文件上传下载记录

        内容

            展示文件上传下载进度

            展示上传下载完成文件历史

    * 浮层或弹窗

        重命名浮层

        举报弹窗    接入安平举报系统

        拉列表失败提示

        删除确认对话框

#### 本地环境搭建
* 前台页面路径为： http://pan.qun.qq.com/clt_filetab/groupShareClient.html

* 内嵌访问路径: http://pan.qun.qq.com/clt_filetab/groupShareClient.html?guin=群号&visitor=0

* 群文件使用了pc端的zip缓存， zip包id是121  目录为： D:\Users\materliu\documents\714512197\AppWebCache D:\Users\materliu\documents\ 为你的QQ文件目录  714512197 为QQ号码

* 相关域名

    - 主域名:
    pan.qun.qq.com
    - cdn:
    qplus4.idqqimg.com
    qplus5.idqqimg.com
    qplus6.idqqimg.com
    - cdn path: /qun/pan/clt_filetab/


#### 跑起来

* 本地访问方法： 直接使用fiddler代理，将http://pan.qun.qq.com/clt_filetab/ 的请求指向本地项目目录。

* 测试环境及IP

    使用nohost, [具体配置见配置系统](http://imweb.server.com/im_nohost_mgr/index.php/apps/get/99)   (系统申请权限找littenli)

* 采用grunt构建

      之前写过一个编译发布指南, 在docs\编译发布指南.md
      (注:由于miller后来对grunt 的task有一些更新, 所以这个文档可能需要miller回来更新一下)

* 部署测试环境访问：

端口号使用 36000 账号是***  密码是： pass4devne****


## 编译发布

## 一、准备

### 1. 检出

check out本目录

### 2. 安装npm依赖包

确保本机已安装nodejs和npm, 然后在根目录运行

```
npm install
```

### 3. 给几个npm包打补丁

前往`tools`目录, 运行

```
node node_modules_patch.js
```

或直接运行 `node_modules_patch.bat` (windows下)


### 4. 准备完毕!


## 二、编译

### 两条主要的编译命令：

####1 编译web发布资源:
```
grunt dist
```

####2 编译本地化资源
```
grunt ct:o
```

### 注意点

####1. 编译前, 请 **务必保证** 本地的: `src目录`, `proj-task目录`, `Gruntfile.js`是干净的, 符合预期的!

####2. 每次提测前,需要确认发布的版本号, 并保证资源的url路径以及版本号在如下三个地方正确、一致:

#####1) 本地: `proj-conf.json`

决定了html页面里的cdn资源引用路径

#####2) 本地: `proj-task/proj/proj-task.js`

决定了本地化资源的js/css资源,能够按照web发布系统相同的版本号方式放置在正确的路径下

#####3) web发布系统: `添加前台发布` - `JS版本` `CSS版本`

决定了web发布系统如何将svn拉下来的web发布资源压缩后放在对应的版本号目录下

####3. 为了发布进行的编译,需要确保Gruntfile.js内的发布开关`isPublicDist`被打开

####4. 关于本地化:

1) 本地化在需要部署灰度的情况下, 谨慎使用(准备在群文件里用一个无功能变更的版本灰度验证以后再使用)

2) 本地化时, 如果需要把外部资源也打包, 请手动在`tools/dist-client-local-external`目录下放置外部资源


## 三、Web测试环境部署

群文件项目目前暂时只有一个测试环境(TODO:增加测试环境)

但有两个发布项目:

  - [群共享_clt_filetab](http://svn.server.com/index.php/PublishItem/index/public_id/287)

  - [群共享_clt_filetab_bugfix](http://svn.server.com/index.php/PublishItem/index/public_id/300)

注意两者的作用和svn来源不同:

1) `群共享_clt_filetab`

- 作用: 主干发布(新特性,新迭代)

- svn来源: `trunk/htdocs/pan.qun.qq.com/clt_filetab/dist`

2) `群共享_clt_filetab_bugfix`

- 作用: bugfix分支发布(从tag拉出来的:`线上版本`或`测试通过版本`的bugfix)

- svn来源: `branches/pan.qun.qq.com/clt_filetab_bugfix`

## 四、ARS发布

1. 从Web测试环境同步资源到ARS编译机

在Web发布系统上, 点`发布`按钮即可.

2. 在ARS上提测试单.

注意：

1）静态和CDN要分别提两个单。

以群文件为例，静态和cdn分别在如下两个目录：
![Alt text](data:image,local://1388042236643)

2）选文件时，谨慎选择整个目录，务必进入到目录确认是否为要发布的资源

3）CDN的单，选文件的时候，可以进到css和js目录下，选择版本号目录

4）静态的单，如果加了CDN切换的功能，那么在勾选静态页面外，`一定记得把静态资源也选上`。

`todo` web发布系统或者grunt内可以考虑增加功能，自动输出本次发布涉及的文件列表，让我们`可以直接把这个列表粘贴到ars的发布单里去`。

3. ARS测试部署-> 测试 -> 预发布 -> 发布

一般这几个步骤测试来操作

免测的测试单, 需要开发自己来操作.


## 五、发布后要做的事情

### 1. 发布当日：观察视图

http://monitor.server.com/link/graph/viewid:6196

确认几个关键指标（进入量，badjs量，失败量...)视图正常！

视发布改动大小和重要程度，发布后需要观察视图半小时-1小时。

### 2. 发布当日：打tag

打tag的时机：确认发布完成，视图基本正常后，即可打tag

tag打在项目的tags目录下，命名规则根据项目自行约定。

以群文件为例：

客户端内嵌页clt_filetab：
 - 开发目录：
  `trunk/htdocs/pan.qun.qq.com/clt_filetab/docs`
 - 线上路径：
  `http://pan.qun.qq.com/clt_filetab/`
 - 打tag目录：
  `tags/pan.qun.qq.com/clt_filetab/20131225_v2.0.1_js2.0.1`
   - `20131225` 发布时间
   - v`2.0.1` 发布迭代版本号(2-二期, 0-首个迭代版本, 1-首个hotfix)
   - js`2.0.1` 发布资源的版本号

## 六、线上bug修复流程

线上bug修复我们采用bugfix分支发布策略。

前述tag管理方式下，只要是release到线上的版本必然有一个tag

以修复clt_filetab的线上bug为例，修复步骤如下：

###1. 准备

检查svn版本库内，`branches/pan.qun.qq.com/clt_filetab_bugfix`下是否有文件
  - 有文件： 和同事确认后（也许项目大了，有另一个同事也在拉分支bugfix，里面提交了未发布的bugfix代码）, 直接在svn上删除这个目录。然后去第2步
  - 无文件： 直接去第2步

###2. 从tag拉bugfix分支

从线上版本的tag，拉分支到`branches/pan.qun.qq.com/clt_filetab_bugfix`下

![Alt text](data:image,local://1388043628463)

![Alt text](data:image,local://1388043706109)

###3. 在bugfix分支修复bug

在clt_filetab_bugfix分支下修复bug并编译、提交svn

注意: 本例中的bugfix, 是对线上`2.0.0`的修复, 那么`发布时版本号需要+1`,即为`2.0.1`.

编译和接下来的提测同步阶段,这个版本号需要注意保持一致正确.


###4. 提测、发布bugfix分支

步骤还是上面的那些编译、提测、发布步骤。

* [使用imweb发布系统](http://svn.server.com/index.php/Publish/index)

    注意：提测时使用的web发布系统项目是这个：[群共享_clt_filetab_bugfix](http://svn.server.com/index.php/PublishItem/index/public_id/300)

* 使用Nohost管理环境

    Nohost管理员：littenli capewu

    地址：http://imweb.server.com/im_nohost_mgr/index.php/apps/get/99

    提测环境：测试环境


###5. 发布后的善后事宜：

1） bugfix分支上的bugfix代码，合并入主干

可以手动合，也可以借助svn的分支合并功能合并。

多人协作时注意冲突的处理即可。

2） 给bugfix分支打tag

还是按照前述规则打tag

本例就是:

  - tag来源: `branches/pan.qun.qq.com/clt_filetab_bugfix`

  - tag目标: `tags/pan.qun.qq.com/clt_filetab/20131225_v2.0.1_js2.0.1`


3） 删除bugfix分支


### 历来需求单地址
* [群产品中心的历史需求无法找到]

原因，需求单被移动过一次，旧的不见了，请资源danyye

* [【管理后台】手Q查找运营管理后台](http://tapd.oa.com/v3/qqsearch_web/prong/stories/view/1010063621055938404)

* [现存能够查询到的需求](http://tapd.oa.com/v3/QQGroup/prong/stories/view/1010076071055913188?url_cache_key=b64a0e2f061b92c98a4fac95c32833ba&action_entry_type=story_tree_list)

* [55972010 【PC群文件—Web三期】病毒文件的展示逻辑优化](http://tapd.oa.com/v3/QQGroup/prong/stories/view/1010076071055972010)

*[【PC群文件—Web三期】文件举报](http://tapd.oa.com/v3/QQGroup/prong/stories/view/1010076071055972007)

*[【PC群文件—Web三期】旋风组件下载文件](http://tapd.oa.com/v3/QQGroup/prong/stories/view/1010076071055913028)

*[【PC群文件—Web三期】批量操作](http://tapd.oa.com/v3/QQGroup/prong/stories/view/1010076071055913148)

#### 数据上报
- 上报的代码怎么找?
上报的代码统一配置在 src\js\common\g_cfg_proj.js
根据这里面的字符串在代码里搜索即可

- 如何看上报数据?
产品类上报: 请咨询danyye. 其他数据类上报， 关注README.md 文件顶部
