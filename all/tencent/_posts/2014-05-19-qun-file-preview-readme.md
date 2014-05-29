---
layout: post
title: 群文件预览README.md
---
    
## 群文件预览README.md

接口人： materliu

## Documentation

### relational link
[前台wiki][1]

[Moniter 视图](http://monitor.server.com/link/graph/viewid:7060)

所有属性都是建在 管理属性类型-群文件-群文件预览下， 可以直接搜索群文件预览快速定位

[performance 视图](http://m.isd.com/app/endusermonitor2/config/pointView.php?PHPSESSID=109v67icijfoo9a6p1fjseou33&last_h_menu_id=7110006#date=2014-05-25&curTab=speed&productId=19377&serviceId=19377010&moduleId=27597&countryId=1&last_h_menu_id=7110006&PHPSESSID=109v67icijfoo9a6p1fjseou33&flag1=7809&flag2=46&flag3=1)

[mm上报系统视图 - 本项目暂不涉及][5]  上报是5分钟实时，告警大概是5-10分钟延迟  页面展示会大概15分钟

[dc上报系统视图 - 本项目暂不涉及][10]

[本地构建工具grunt学习][7]

[图片压缩服务][8]

[移动web项目前端上线前检查项](https://docs.google.com/spreadsheets/d/1J7cFLKONZdkfi4ZeETwCceGfu5pryO__1bAtglqVcUg/edit#gid=0)

[项目svn地址-trunk](http://tc-svn.tencent.com/bapp/bapp_qqweb_rep/pc_proj/trunk/qun/qun-file-preview)

### 快速上手

#### 项目说明

如图所示:

* dist目录是grunt生成的处理后的代码目录，不需要主动编辑；
* test是自动化测试目录，现在尚未加入，预留功能；
* node_modules目录是grunt等相关编译工具存放目录；所有的逻辑代码存放于app目录。

根目录下的几个文件：

* .jshintrc  jshint 代码检测的配置文件
* bower.json bower 的配置文件
* config.json 我们自己的发布系统的配置文件， 在其中规定哪个文件发布到哪里
* config.rb  compass 的配置文件
* Gruntfile.js grunt 的配置文件
* package.json 整个项目其实相当于一个大的nodejs项目，package.json规定了这个nodjs项目用到的所有node_modules
* README.md  项目的说明文件， 就是你当前正在读的这个文件
* app/robots.txt 通过其中的内容，我们限制搜索引擎索引我们的页面,主意按照规范，这个文件应该是ascii编码的

#### 本地环境搭建
* 本机环境配置
node环境需要安装

* sass和compass  sass和compass依赖于ruby环境，需要安装ruby运行时，windows平台下推荐： [RubyInstaller][9], 之后再命令行中 执行 gem install sass，gem install compass 安装sass和compass，  当然公司内网有时候需要加上  gem install sass --http-proxy=https://proxy.tencent.com:8080 你懂的
* grunt 需要本地有nodejs环境， 这个不用多说了， 在命令行执行： npm install -g grunt-cli  进行安装

#### 跑起来
* 页面地址： http://sz.preview.ftn.qq.com:443/ftn_doc_previewer/qun-file-preview.html
* 真实环境中带参数的页面地址：
    * doc

        http://sz.preview.ftn.qq.com:443/ftn_doc_previewer/qun-file-preview.html?url=http%3A%2F%2Fsz.preview.ftn.qq.com%3A443%2Fftn_doc_abstract%2Frkey%3DFC3E5EFB4E1A43D7A844B8DE3D5815C5BDB9C5E87D4221C806D36E2A3F6AA9CB7E0542296F19D1FFA6335F489B234B4BB7E5ED9DE9A296497B18D290290FCF9C%26filetype%3D1&filetype=1

    * txt

        http://sz.preview.ftn.qq.com:443/ftn_doc_previewer/qun-file-preview.html?url=http%3A%2F%2Fsz.preview.ftn.qq.com%3A443%2Fftn_txt_abstract%2Frkey%3Da76be35334207a21c83182cd1c61b8cc5f0e7be46a832c6664fb70b83edd91939cdf2%0D%0D %0A1d7ce5e56377008eb36ea403d16da67f4257baed3c14f3a38343a1c398c%26filetype%3D16%26sp%3D1%26&filetype=16&source=objmsg

    * rar

        http://sz.preview.ftn.qq.com:443/ftn_doc_previewer/qun-file-preview.html?url=http%3A%2F%2Fsz.preview.ftn.qq.com%3A443%2Fftn_compress_list%2Frkey%3Ddc5adcb1bbf12652c0e5b22134020c8028b8c8137f7121aae6d544c1f6e36b7e4bab9df3993dd74d33c5b61b954d1cbeef731c6cc0e1d2a811a210e980871a7dfuye%26filetype%3D14%26path%3D%2F%26&filetype=14&source=objmsg

    * zip

        http://sz.preview.ftn.qq.com:443/ftn_doc_previewer/qun-file-preview.html?url=http%3A%2F%2Fsz.preview.ftn.qq.com%3A443%2Fftn_compress_list%2Frkey%3D2472d25ecd238bcbed9e2c9f56f2320824fbafeeb2a70555894a9590635873b130a684ea09a0ea1ca8037253271cbd9fe35fd5dcede12fa5c4ce8aa10f89d858%26filetype%3D13%26path%3D%2F%26&filetype=13&source=objmsg

        http://sz.preview.ftn.qq.com:443/ftn_doc_previewer/qun-file-preview.html?url=http%3A%2F%2Fsz.preview.ftn.qq.com%3A443%2Fftn_compress_list%2Frkey%3D5cd7de85558320bb14dd9e93634b13552d0cc7456b141a3622a83c3d06c0bc9d75ca83a19c3b9da5ce7bc1830d13796f1957434a89b3b52c3d37d11d4263546e%26filetype%3D13%26path%3D%2F%26&filetype=13&source=objmsg

* 拉文件list的cgi： http://sz.preview.ftn.qq.com:443/ftn_doc_abstract/rkey=93ac146b87cb313ae1d3af52a2910a20a4eec4198d04dd8f3a88cf4c7d00992afa95f40148ca42058f1b96f80776e69ba2d80b2c86c89a303a5c6e1a7e334afd&filetype=1&sp=1&pc=1

* 文件预览的html: http://sz.preview.ftn.qq.com:443/ftn_doc_abstract/23f6c91a6a72f5c70fe3d7f400bab62455af1e30/23f6c91a6a72f5c70fe3d7f400bab62455af1e30_1.html

* 本地访问方法1： 直接将fiddler映射到对应的目录

#### 发布流程
* 测试环境以及发布使用alloydist.oa.com 系统， 新建项目部署- 发布产品选择 [群文件][pan.qun.qq.com]  发布模块选择 [pc群文件预览][pan.qun.qq.com/pc/qun/file-preview]  测试环境选择10.12.23.163 请务必使用这个测试环境，因为只有这个测试环境是马特哥调整过的，其他的正常运行需要修改ngnix conf配置文件， svn地址，填写当前需要发布的分之或者主干的svn地址， 部署即可。

### 介入开发
#### 代码规范
1. 首先参考 [alloyteam代码规范](http://materliu.github.io/code-guide/)

#### 学习资料
* 微云也有文件预览的需求， 访问地址： http://www.weiyun.com/preview.html?mf=1020817152&vt=1&sai=30012&fn=%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8%E5%BE%AE%E4%BA%91.pdf&fi=070a6100-93bc-4b90-b2b9-8821256feb27&pdk=006fd83cf0a739ae12b58dcd423dce4a&bv=11058&fsize=818710

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
密码: 找materliu问

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
