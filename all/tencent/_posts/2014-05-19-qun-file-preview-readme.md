---
layout: post
title: 群文件预览README.md
---
    
## 群文件预览README.md

接口人： materliu

## Documentation

### relational link
[前台wiki][1]

[Moniter 视图][]

[performance 视图][]

[mm上报系统视图][5]  上报是5分钟实时，告警大概是5-10分钟延迟  页面展示会大概15分钟

[dc上报系统视图][10]

[本地构建工具grunt学习][7]

[图片压缩服务][8]

[移动web项目前端上线前检查项](https://docs.google.com/spreadsheets/d/1J7cFLKONZdkfi4ZeETwCceGfu5pryO__1bAtglqVcUg/edit#gid=0)

[项目svn地址-trunk](http://materliu@tc-svn.tencent.com/bapp/bapp_qqweb_rep/pc_proj/trunk/qun/qun-file-preview)

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
node环境需要安装

* sass和compass  sass和compass依赖于ruby环境，需要安装ruby运行时，windows平台下推荐： [RubyInstaller][9], 之后再命令行中 执行 gem install sass，gem install compass 安装sass和compass，  当然公司内网有时候需要加上  gem install sass --http-proxy=https://proxy.tencent.com:8080 你懂的
* grunt 需要本地有nodejs环境， 这个不用多说了， 在命令行执行： npm install -g grunt-cli  进行安装

#### 跑起来
* 页面地址： http://pan.qun.qq.com/pc/qun/file-preview/index.html
* 本地访问方法1： 在命令行中执行 grunt serve， 本机就会起一个服务器，部署当前项目

#### 发布流程
* 测试环境以及发布使用alloydist.oa.com 系统， 新建项目部署- 发布产品选择 [群文件][pan.qun.qq.com]  发布模块选择 [pc群文件预览][pan.qun.qq.com/pc/qun/file-preview]  测试环境选择10.12.23.163 请务必使用这个测试环境，因为只有这个测试环境是马特哥调整过的，其他的正常运行需要修改ngnix conf配置文件， svn地址，填写当前需要发布的分之或者主干的svn地址， 部署即可。

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
* 微云也有文件预览的需求， 访问地址： http://www.weiyun.com/preview.html?mf=1020817152&vt=1&sai=30012&fn=%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8%E5%BE%AE%E4%BA%91.pdf&fi=070a6100-93bc-4b90-b2b9-8821256feb27&pdk=006fd83cf0a739ae12b58dcd423dce4a&bv=11058&fsize=818710

* 首先需要学习了解handlebars模板的写法， 页面中所有的模板使用handlebars构建，参见目录 scripts/template/handlebars
    关于handlebars 和 jade 模板如何在客户端预编译使用，可以参见另外两篇博文
    [jade模板预编译][16]
    [handlebars模板预编译][17]

* 何俊关于移动专门输出的学习资料，请新加入同学务必查看 http://www.ipresst.com/play/5334769224c6b1097d002c4a

* 赖晓思关于移动专门输出的学习资料，请新加入同学务必查看 http://www.ipresst.com/play/528892e11d0495f30f00762e

## 注意点


### 历来需求单地址


### 发布时间记录


### [手Q客户端下载地址，发布历史，历代版本存在问题](/all/tencent/2014/04/15/mobile_qq_publish_history.html)


## 相关接口人
* 负责产品 dannyye


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