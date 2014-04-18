---
layout: post
title: 手Q查找README.md
---
### 打开readme文件的同学，如果本机没有安装markdown相关的查看编辑器可以选用在线版： https://stackedit.io/
# QQ FIND mobile

接口人： materliu,csonlai

## Documentation

### relational link
[前台wiki][1]

[CGI Wiki][2]

[Moniter 视图][3]

[performance 视图][4]

[mm上报系统视图][5]  上报是5分钟实时，告警大概是5-10分钟延迟  页面展示会大概15分钟

[伯努利上报系统视图][6]

[dc上报系统视图][10]

[本地构建工具grunt学习][7]

[图片压缩服务][8]

[移动web项目前端上线前检查项](https://docs.google.com/spreadsheets/d/1J7cFLKONZdkfi4ZeETwCceGfu5pryO__1bAtglqVcUg/edit#gid=0)

[项目svn地址-trunk](http://tc-svn.tencent.com/bapp/bapp_connect_rep/qqfind_mobile_proj/trunk)

### 快速上手

#### 项目说明

手Q查找使用了grunt这一自动构建工具， CSS使用Sass和Compass来进行组织。目录结构如下：


如图所示:

* doc目录下存放所有的规范类文档；
* dist目录是grunt生成的处理后的代码目录，不需要主动编辑；
* test是自动化测试目录，现在尚未加入，预留功能；
* node_modules目录是grunt等相关编译工具存放目录；所有的逻辑代码存放于app目录。

根目录下的几个文件：

* .jshintrc  jshint 代码检测的配置文件
* bower.json bower 的配置文件， 暂时未用到(2014/02/26)
* config.json 我们自己的发布系统的配置文件， 在其中规定哪个文件发布到哪里
* config.rb  compass 的配置文件
* Gruntfile.js grunt 的配置文件
* p          我们在测试环境上部署代码需要的脚本文件
* package.json 整个项目其实相当于一个大的nodejs项目，package.json规定了这个nodjs项目用到的所有node_modules
* README.md  项目的说明文件， 就是你当前正在读的这个文件
* app/robots.txt 通过其中的内容，我们限制搜索引擎索引我们的页面

#### 本地环境搭建
* 本机环境配置
    (1)电脑配置无线网卡连接FreeWifi，ipconfig查询IP为A（10.66.**.**）
    (2)手机配置A，端口为B（如：8080）。
    (3)Fiddler配置Tools->Fiddler Options->Connections:
        勾选Allow remote computers to connect
        Fiddler listens on port: 填写B
    (4)确认可以访问，注意Fiddler左下角状态为capturing
* sass和compass  sass和compass依赖于ruby环境，需要安装ruby运行时，windows平台下推荐： [RubyInstaller][9], 之后再命令行中 执行 gem install sass，gem install compass 安装sass和compass，  当然公司内网有时候需要加上  gem install sass --http-proxy=https://proxy.tencent.com:8080 你懂的
* grunt 需要本地有nodejs环境， 这个不用多说了， 在命令行执行： npm install -g grunt-cli  进行安装

#### 跑起来
* 我们有一个分支是用来存放，所有的grunt依赖到的插件的nodejs包的，分支地址： http://tc-svn.tencent.com/bapp/bapp_connect_rep/qqfind_mobile_proj/branches/qqfind_mobile_node_modules
* 从trunk拉开发分支，或者直接在trunk上开发（如果有必要），这里注意把此工作分支文件目录跟上边的nodejs包分支放于同一级目录内  比如说： workspace /  qqfind_mobile_node_modules  trunk
* 本地访问方法1： 在命令行中执行 grunt server， 本机就会起一个服务器，部署当前查找项目，修改host，把find.qq.com 指向 127.0.0.1， 直接在浏览器中访问find.qq.com/index.html 即可
* 本地访问方法2： 直接使用fiddler代理，将find.qq.com/m/ 的请求指向本地项目目录。
* 部署测试环境访问： 在命令行中执行 grunt 完成代码发布前的编译工作，提交svn， 登陆测试环境机器，登陆方法：我们现有5台测试机器
    10.12.23.156
    10.12.23.157
    10.12.23.158
    10.12.23.159
    10.12.23.163
端口号使用 36000 账号是***  密码是： pass4devne***
登陆上去以后，进入 /data/frontend/qqfind_mobile ,将当前项目checkout下来， 进入项目目录， 在项目目录下执行编译部署脚本p
    chmod 777 p
    ./p 0|1|2|3|4   后边的参数分别对应机器 156,157,158,159,163，比如像部署到 156机器，执行./p 0

#### 发布流程

#####先ARS预编译：
http://pub.qplus.oa.com/html/ars_precompile.php
svn： 贴入当前要发布的tag的svn地址， 记得是https开头的
发布域名选择 QQ查找 find.qq.com
cdn发布路径选择  qqfind
编译说明： 此次发布的原因

得到类似地址：
/data/sites/cdn.qplus.com/qqfind/m/js/find.js
/data/sites/cdn.qplus.com/qqfind/m/index.html

进入ARS发布系统：
http://ars.isd.com/

1.类目选择：发布请求-免测版本发布
2.产品选择：开放平台 模块选择：公共平台 其他如版本号等可任意填写
3.把预编译得到的地址 粘贴到发布内容
4.下一部处理人选择： 测试童鞋的rtx，如alanqing
5.提交后知会测试

[zip包发布](/all/tencent/2014/04/15/mobile_qq_zip_publish.html)

灰度的时候， 选择的uin格式
[{"min":2568612250,"max":2568612250},{"min":644323349,"max":644323349},{"min":1437666088,"max":1437666088},{"min":22052537,"max":22052537},{"min":714512197,"max":714512197},{"min":344608146,"max":344608146},{"min":1020817152,"max":1020817152},{"min":1003565551,"max":1003565551},{"min":364110832,"max":364110832},{"min":154528486,"max":154528486},{"min":154528485,"max":154528485},{"min":339372879,"max":339372879},{"min":1025887988,"max":1025887988}]

### 介入开发
#### 代码规范
1. 首先参考 [alloyteam代码规范](http://materliu.github.io/code-guide/)
2. 上报代码 任何一个页面，对于点击上报数据只监听 [data-report-id] 属性选择器， 有此属性选择器，则取其值进行monitor或者伯努利上报， 伯努利上报可能同时有 [data-report-obj] 属性，用来指定伯努利系统的obj,具体代码参考如下：

<pre class="brush: js">

   // 这里为什么不能简单用click， 因为click事件在iphone上没有冒泡 参见注意点事项
   // 需要在希望冒泡的元素上，如果非a标签，需要添加响应的css属性
   // cursor: pointer;     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   document.addEventListener("click", function (event) {

       var target = event.target,
           reportTarget = utils.closest(target, "[data-report-id]"),
           dataset,
           reportID,
           reportMonitorID,
           reportBernoulliID,
           reportBernoulliObj;

       if (reportTarget === null) {
           // 没有绑定上报行为 会是大多数点击事件的结果， 优先判断
           return;
       } else {
           dataset = reportTarget.dataset;
           reportID = dataset.reportId;
           reportID = reportID.split(",");
           reportMonitorID = reportID[1];
           reportBernoulliID = reportID[0];

           // 当不存在的时候， 返回为 undefined
           reportBernoulliObj = dataset.reportObj || "";
       }

       if (reportMonitorID) {
           // 存在monitor上报
           monitorAndBer(reportMonitorID /* monitor id */, reportBernoulliID
               /* bernoulli id */, reportBernoulliObj);
       } else {
           // 只上报伯努利系统
           bernoulli(reportBernoulliID, reportBernoulliObj);
       }

   }, false);
</pre>



#### 学习资料
* 首先需要学习了解handlebars模板的写法， 页面中所有的模板使用handlebars构建，参见目录 scripts/template/handlebars
    关于handlebars 和 jade 模板如何在客户端预编译使用，可以参见另外两篇博文
    [jade模板预编译][16]
    [handlebars模板预编译][17]

* 何俊关于移动专门输出的学习资料，请新加入同学务必查看 http://www.ipresst.com/play/5334769224c6b1097d002c4a

* 赖晓思关于移动专门输出的学习资料，请新加入同学务必查看 http://www.ipresst.com/play/528892e11d0495f30f00762e

* Android, iOS 用户分布情况，zip包使用率等数据 参见手Q群查找svn内手Q群部落数据分析-zip包铺量速度.xls

* 客户端统计的zip包的下载成功率等[数据](http://compass.oa.com/auto_plain?reportId=503148&productId=-300005&auth_cm_com_ticket=4156de62-a42d-426c-b3d6-aebdcbf414da)

#### 各机型适配经验，[参见](/all/tencent/2014/04/14/mobile_web_adapter_experience.html)

##### 页面内元素选择态的变更
在每个页面的js内有一个闭包变量， currentSelectedItem 用来记录当前被选择的元素。 在需要具有选择态的元素块的点击事件监听处理中，进行当前被点击元素的类名的变更。

##### 手Q客户端接口的调用
内网有官网指定了手机QQ WEB UI 规范， 手机QQ JS API文档， AlloyKit移动Web+中断整体解决方案，[访问][13]
[通过url参数控制QQWebViewController的UI展示使用文档][14]
[手机QQ页面本地化使用说明](/attachments/手机QQ页面本地化使用说明.doc)

##### old_data 目录内容说明
index-2014-03-13.html 里边包含了地址选择等相关功能， 可以让用户选择查看哪个城市的数据
index-2014-03-18.html 里边包含了搜索入口， 分类导航， 常用功能等板块， 以及精品推荐的title

search-2014-03-18.html 主项目中去掉 search 页面

/scripts/index/main-2014-03-13.js 里边包含了地址选择等相关功能， 可以让用户选择查看哪个城市的数据, 分类数据点击更多的处理
/scripts/index/main-2014-03-18.js 里边包含了搜索入口， 分类导航， 常用功能等板块， 以及精品推荐的title 以及各块相关事件的监听
/scripts/index/main-2014-03-18-2.js 去掉用户一进来就要去获取用户地理位置信息的逻辑，始终以深圳发起请求

/scripts/search-2014-03-18/ 主项目中去掉 search 页面

/scripts/public/template/handlebars/recommes-sec-2014-03-18.hbs 包含精品推荐的title区域
/scripts/public/template/handlebars-2014-03-18 需求改版，去掉相关模板

/sass/index/_index-2014-03-18.scss 包含了搜索入口，分类导航，常用功能等模块的样式修饰
/sass/index/main.scss 包含了搜索入口，分类导航，常用功能等模块的样式修饰

/sass/search-2014-03-18/ 主项目中去掉 search 页面

/scripts/public/template/jade/single-category-2014-03-13.jade 第一版 分类的展现形式 文本 + hot/new 提示块
/scripts/public/template/jade/*               2014-03-17      所有jade模板弃用，改用handlebars模板

/images/sprites/public/icon-2014-3-18 主项目中去掉 search 页面,主页的搜索入口， 分类导航， 常用功能等板块， 以及精品推荐的title
/images/sprites-retina/public/icon-2014-3-18 主项目中去掉 search 页面,主页的搜索入口， 分类导航， 常用功能等板块， 以及精品推荐的title


Gruntfile-2014-03-18.js 主项目去掉search页面， grunt对search页面的相关处理备份

## 注意点
* 手Q客户端本身实现了zip包缓存的机制，这会对我们的日常的开发带来一定的干扰，手Q会发起一条cgi，询问 http://s.p.qq.com/pub/check_bizup  是否有更新的zip包， 把这条请求404， 手Q客户端就会一直从web上拉取页面。  前提是先清空之前已经拉下来的zip包。

* 同步网络资源，无需很频繁，这主要是针对低端机型无法更新本地包的情况

* 手Q4.7开始 使用了QQ浏览器提供的webView SDK， 这就会导致手Q4.7使用的webview中webkit内核的版本可能跟当前用户所使用的系统的webview的webkit的版本不同 最蛋疼的是这里还有一个容易出问题的逻辑：
  materliu(刘炬光) 03-26 16:58:52
  清除应用数据 第一次进去使用的系统webview ？
  materliu(刘炬光) 03-26 16:59:02
  之后进入就使用的 x5 webview？
  cokesu(苏可) 03-26 16:59:41
  @materliu(刘炬光) ，是这样的逻辑，因为DEX OPT比较耗时，容易导致ＡＮＲ，所以第一次进会切为系统WebView

* 利用系统提供的删除应用数据， 并不能清除zip包缓存

* 圆角规范稍后我会更新上规范网站  现在是这样   128px以上 圆角大小12px     100px图标圆角大小10px  99px-60px图标 圆角大小6px  小于60px图标圆角4px

* [iphone上的click事件没有冒泡](http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html) [stackoverflow上关于此问题的讨论](http://stackoverflow.com/questions/3705937/document-click-not-working-correctly-on-iphone-jquery)

* zip包机制存在问题， 导致有些页面无法得到更新
    ios上的缓存问题，基于目前的现状，有没有办法做更多处理，减少被缓存或不更新的几率呢？
    不是每个人都知道这个问题，即便知道的人也未必认为ios有问题，更多时候是我们很被动，是离线包下载了, 但是没应用
        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
    一开始的html头部就加上这两个，因为zip包拦截返回的文件http header里边没有缓存控制信息，导致有些文件被cache在浏览器cache中， ios如此

* 现在webserver和cdn的发布路径之间是存在一定关系的，比如说我们的webserver路径是 qun.qq.com/search/mobileqq/index.html
那cdn路径就得是：pub.idqqimg.com/qqun/search  对应webserver ： qun.qq.com/search  tag名字也有一定要求需要是 qqun_search_timestamp  或者 search_timestamp  别问为什么，运维同学就是这么约定的


### 历来需求单地址
* [【手Q查找】找服务页放出搜索入口](http://tapd.oa.com/v3/qqsearch_web/prong/stories/view/1010063621056050940)


### 发布时间记录
* 2014-04-01 14:50 zip 包


### [手Q客户端下载地址，发布历史，历代版本存在问题](/all/tencent/2014/04/15/mobile_qq_publish_history.html)


## 相关接口人
* 负责产品 kylexiong
* 群查找，接口人 amadeusguo
* 营销QQ数据 上海技术接口人 wallyzhang
* ios 客户端开发接口人 xiangruli
* android 客户端开发接口人 ippan yellowye
* cgi 接口人 michalewang
* 后台接口人 tangfutang
* 群，人 头像图片业务组员工  edzhong


## tomcat使用 cgi相关知识，可不了解
重启tomcat
sh /usr/local/java/webapps/q qfind_index/restart.sh

tomcat 存放查找首页的目录
/usr/local/java/webapps/q qfind_index/ROOT/WEB-INF/classes/index-pages

将当前目录的index.html 拷贝至159机器上 tomcat的查找首页目录下
scp index.html 10.12.23.159:/usr/local/java/webapps/q qfind_index/ROOT/WEB-INF/classes/index-pages/index.html
密码: pass4devnet

## nginx使用 前端服务器相关知识，可不了解
现在的nginx服务起在 /usr/local/services/目录下， 其实是软连接到了 /usr/local/tnginx, 配置啥的都到这个文件目录下修改， 修改完了如果需要重启nginx， /usr/local/services/tnginx_1_0_0-1.0/admin 下有一个 restart.sh

为什么使用腾讯改造过的nginx？

为了自动化收集CGI列表、静态页面和flash文件等信息进行上线前安全扫描，在内网收敛安全漏洞，需要在测试环境部署门神
QQ群这边的测试环境就要麻烦各位机器责任人帮忙部署了，需要部署的机器信息见下表

web server是 apache的话，部署文档见http://sec.itil.com/sec/home/index/4 的apache篇

nginx的话直接升级为下面已经编译了门神模块的nginx，qzhttp的话参考下面的帮助文档



[1]: http://tapd.oa.com/v3/Qplus/wikis/view/qq_mobile_find_env "web wiki"
[2]: http://tapd.oa.com/v3/QQchazhao/wikis/view/%2525E6%25259F%2525A5%2525E6%252589%2525BE%2525E6%252589%25258BQ%2525E7%25259B%2525B8%2525E5%252585%2525B3CGI "cgi wiki"
[3]: http://monitor.server.com/link/graph/viewid:6430 "monitor view"
[4]: http://m.isd.com/app/endusermonitor2/config/pointView.php?PHPSESSID=4eod1h9ai6nj910u3ek93sj7k6#date=2014-02-25&curTab=speed&productId=44101&serviceId=44101015&moduleId=388281&countryId=1&PHPSESSID=4eod1h9ai6nj910u3ek93sj7k6&flag1=7832&flag2=17&flag3=2 "performance view"
[5]: http://mm.isd.com/wns/wnsUsm.php#{"api":"wns_Usm.dDetailDimension","type":"table","data":{"date":"20140226","additional":{"appid":"1000154"},"groupby":"commandid"}}  "mm view"
[6]: http://webpc.oa.com/qqconnect/?ticket=778E4D57C8651EF31C9B87EF78C9B5E98E1E211C287CAFE18A8C402C5FFE4961AC618BDCC843138044B7A03FB6E50A4509D1C7A3EC33253CA8B424EF034A6555236C84962E065B7416DFF077662D7AE77A71FC9F286943C0150909966B5099D5E2D35AFC2103BAA91C1F91946B650E2280EC4BEAE5643DE0C40CD4C5D14937D8F631608651A95540718286DFB26FC2473AA22D1CD37B3D875214F91FC1CE1E5D3793DAD9C954611D5BBE4CA81CE402F05047C5CDF3C2DAD1B2E7BBAFBE6CBF1C&loginParam=disposed&length=35&lengh=35&sessionKey=778E4D57C8651EF31C9B87EF78C9B5E98E1E211C287CAFE18A8C402C5FFE4961AC618BDCC84313803A545E8300C3BABE  "伯努利 view"
[7]: http://gruntjs.com/ "grunt Official website"
[8]: http://www.smushit.com/
[9]: http://rubyinstaller.org/ "rubyinstall website"
[10]: http://oz.isd.com/index.php?menuId=15230&auth_cm_com_ticket=f3970759-e615-49bd-b253-0b464d911001
[11]:http://rdm.wsd.com/DailyBuild.html?v=ci.myview&t=&f=developTools#ci.jobdynamic@rdmProjectId:74ff62b6-c6bd-46ef-b268-a39ceb4f1f16;jobId:2821@ci.joblist@1394591648687
[12]:http://rdm.wsd.com/DailyBuild.html?v=ci.myview&t=&f=developTools#ci.planview@rdmProjectId:6ada9bb1-f73c-405a-b528-fa5a59df2a2f@@1394597145623
[13]:http://mqq.oa.com/
[14]:https://docs.google.com/document/d/1cCKbqxZ0TMV31aC6uT-icY2Kn43VGTzAW5WBBFgwXpc/edit?pli=1#heading=h.xhntumzigujf
[15]:https://docs.google.com/spreadsheet/ccc?key=0AnSPazf9T6tAdG5XQmhTVG5JVWt0a2VwWWxaMk5qSkE&usp=drive_web#gid=0 "每人手头机器"
[16]:/all/web/2014/03/17/在项目中使用预编译jade模板.html
[17]:/all/web/2014/03/17/在项目中使用预编译handlebars模板.html
