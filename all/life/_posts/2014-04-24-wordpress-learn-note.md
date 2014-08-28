---
layout: post
title: wordpress学习笔记
---

## wordpress 学习笔记

02 getting started with wordpress.com

    0201 setting up an account

    https://wordpress.com   username 是与域名相关的。我的密码账号：jasonandliu  密码：f~    wordpress的API key 是：9d0d589e529f

2.如果想要下载wordpress  到http://wordpress.org

    0202 setting up an new log or web site

    首先在https://wordpress.com上登录，然后再url中输入https://wordpress.com/signup

    这样就建立了一个blog

    0203 navigating the wordpress.com back end

    直接进入dashboard， 域名/wp-admin


03 building a profile
   0301   Editing your profile
public profile  会被公布在所有你发布的日志当中！
   0302   creating profile images with gravator.com
gravotor 匹配头像是根据邮箱来进行匹配的。会出现在所有的wordpress中用该邮箱回复的内容，或者是相关的网站中。
   0303  modifying personal settings
 Users - personal settings   中有APIkey，配色方案，位置信息等等。

   0304   adjusting site settings to improve privacy and findability
     1.settings – general   可以设置时区，日期格式，时间格式，博客使用语言等等。
      2. settings – writing    发布框的行数，formatting->防止跨站攻击， post by email， 链接能够打开的应用程序类型等等。
      3. settings – reading    一页可以展开多少项等等
      4. settings – discussion  评论约束。
      5.  隐私设置。


0305  advanced sharing options
当你的privacy策略是对everyone可见时，在setting下面会有一个sharing选项，可以设定将你的reading分享到twitter，facebook等等。设定分享参数，如是否在新窗口中打开分享链接！


04  Posts
0401  understanding the difference between posts and pages












二者组织形式上的不同


     0402  creating a new post
在box的visual 你可以直接在右下角拖动来改变box的大小。

     0407   adding categories tag excerpts and other elements
Expert 用于摘要
Tags 用于搜索引擎索引
在自己的域名后面加feed，进入自己博客的RSS订阅页面，就可以看到之前写的Expert
是否允许评论，是否有sharing等。

     0408  publishing a post
在右侧的发布选项中可以修改：  发布状态，可见性，密码保护，发布日期等等。



05 pages
	0501  writing a basic page
一个page默认会添加到主页的menu中。
Order值越大，则page的排序越靠后。
Template的使用用来约束page是居中显示还是带侧边栏的显示。


06 Managing Images video and other media
	0601  managing media from the admin panel
在setttings-media  可以设置media的thumbnail size, medium size, large size.

   0602  managing medial library assets from within posts and pages
当你修改media中一张图片或一个media的title的时候，整个网站都会受到影响，但是单个页面中的media的caption 被修改，只影响其所在页面。


07  wordpress settings
	0701 customizing the front page of a site
settings-reading

   0702 Managing users
可以添加其他用户来协同自己管理自己的网站
角色：contributor  ：可以用来读、写，但不能发布
      Editor      ： 可以编辑我之前发不过的。
      Author     ： 发布他们自己的东西

如果想邀请非wordpress的用户，点击users – invites

   0703 creating polls
在rating&polling中创建投票，先到http://polldaddy.com注册一个账号。  之后将其账户import到wordpress中就可以在侧边栏看到多了一个polling选项。一个polling一次只能出现在一个页面的一个地方。


08 The appearance Tab
	0801  selecting a theme
   0802 understanding page widgets
category clous 显示所有的category，并突出显示最重要的那一个。
footer 从左到右为1到4.

   0803 creating custom sidebar widgets using text widgets
只能用html，不能用javascript。

   0804 creating custom menus
 Appearance  menus
也可以自建侧边栏使用的menu，Title属性是用来让搜索引擎检索的。创建好menu之后，进入widgets，找到custom menus 将其拖动到侧边栏之后，进行设置显示哪个mune即可。




10 moving to self-hosting
	1001 transitioning from wordpress.com to a selef-hosted site
免费的域名：http://www.dot.tk
免费空间：http://gofreeserve.com
账号：gofre_8080059  P: NbmBFXyu
Control panel  : http://cpanel.gofreeserve.com
ftp server:      ftpgofreeserve.com
子域名 ：      jason.gofreeserve.com

建立本地测试环境
安装BitNami（已包含wordpress）
WAMP+ wordpress


1002 option1 setting up a production environment using BitNami
http://bitnami.org
对于win7用户BitNami直接安装在program files下会出问题，所以找一个没有空格路径的文件目录安装。
Ip填写localhost即可。


1003 option2 installing wordpress into a wamp installation on windows
将wordpress里边的所有内容全部复制到wamp/www目录下，之后需要配置wp-config-sample.php 修改DB_NAME  DB_USER  DB_PASSWORD等，之后另存为wp-config.php
打开localhost，开始安装。



11.using plug-ins
	1101 installing plugins from admin
只有本地版本才有这个功能。
很多出名的plugin  ：all in one seo
                    Akismet(自动识别你的comment是否为spam)
                    Cool author box（让博主的信息以一种更炫酷的方式进行展现）

   1102 ten must-have plug-ins for all wordpress sites
http://wordpress.org/extend/plugins/wp-db-backup/
http://wordpress.org/extend/plugins/akismet/
http://wordpress.org/extend/plugins/all-in-one-seo-pack/
http://wordpress.org/extend/plugins/wptouch/ 自动的mobile theme
http://wordpress.org/extend/plugins/wp-typograhy/   improve your web typography with:hyphenation, space control ,css hooks
http://wordpress.org/extend/plugins/stats/
http://wordpress.org/extend/plugins/fancybox-for-wordpress/  点击图片后出现炫酷效果。
http://wordpress.org/extend/plugins/sharedaddy/   share your post with twitter, facebook, and a host of other services.
http://wordpress.org/extend/plugins/wp-pagenavi/  更有效的导航
Hello dolly 每天一句欢迎语

手动安装主题和插件，下载zip之后，解压放到wordpress的对应目录下即可。

17. getting readers
  1701 creating user-friendly permalinks
settings-permalinks
  custom structure -> %category%/%postname%

