---
layout: post
title: ubuntu常用配置
---

## ubuntu常用配置

在使用adsl上网的时候网络经常自己断掉
Sudo gedit /etc/default/grub
修改GRUB_CMDLINE_LINUX=””
为 GRUB_CMDLINE_LINUX=”noapic”
最后保存，更新grub
sudo update-grub


右上角的网络图标消失
sudo service network-manager stop
sudo rm /var/lib/NetworkManager/NetworkManager.state
sudo service network-manager start
sudo vi /etc/NetworkManager/nm-system-settings.conf
将false改为true
sudo service network-manager restart

这样做的原理：
 ubuntu里面有两套网络连接的管理方案
  1./etc/network/interfaces
  2.network-manager
而这两套方案是冲突的，不能共存。
第一套方案适合没有X的环境，如服务器，或者那些完全不需要改动连接的场所。
第二套方案适合有X环境，特别是笔记本，网络连接环境经常变化的场景。
他们两个为了避免冲突又能共享配置，就有了下面的配置方案。
当network-manager发现/etc/network/interfaces被改动的时候，则关闭自己，除非manager设为真。
当manager设为真时，/etc/network/interfaces则不生效了。

使用中国电信的协同拨号器，之前要先建立一个连接，只允许本地连接，把本地连接连上以后
      sudo dhclient 获得ip
      sudo Dial 连接
      sudo Hangup   断开



禁用U盘，移动设备插入以后的自动加载
alt+F2,打开gconf-editor,依次打开apps-nautilus(这个是gnome环境下的file manager)-perferences     将media_automount 和 media_automount_open两项的勾去掉。


安装rar解压工具
sudo apt-get install rar unrar
linux下出现rar解压出现乱码的解决问题
因为在windows平台下打包的rar文件，文件名用的是gbk编码，而在linux平台下默认的是unicode编码，所以需要在解压之前用conmv将文件名从一种编码格式转化成另外一种编码格式。

安装conmv：
  sudo apt-get install convmv
转换 convmv * -f gbk –t utf8 –-notest
  *是要转换的文件  --notest是对文件进行重命名
直接安装conmv是安装不上的，还需要在软件源列表中添加一句
deb http://ubuntu.mirror.cambrium.nl/ubuntu/ hardy main universe



     rar使用命令详解
       用法:   rar <命令> -<选项1> ….-<选项N>   <操作文档>    <文件…> <@文件列表…> <解压路径> 

通常rar命令由一个主命令加若干选项（可选）构成，操作文档为操作施加的.rar文件对象， 
文件或文件列表为对操作文档实现修饰的具体文件或目录（可选）。 
------------------------------------------------------------------------ 
rar常用命令主要有 
a 添加文件到操作文档 
例:rar a test.rar file1.txt 若test.rar文件不存在，则打包file1.txt文件成test.rar
例:rar a test.rar file2.txt 若test.rar文件已经存在，则添加file2.txt文件到test.rar中 
(这样test.rar中就有两个文件了） 
注，如果操作文档中已有某文件的一份拷贝，则a命令更新该文件，对目录也可以进行操作 
例:rar a test.rar dir1 

c 对操作文档添加说明注释 
rar c test.rar 
（会出现Reading comment from stdin字样，然后输入一行或多行注释，以ctrl+d结束） 
cf 添加文件注释，类似上面的c，不过这个是对压缩文档中每个文件进行注释 

cw 将文档注释写入文件 
例:rar cw test.rar comment.txt 

d 从文档中删除文件 
例:rar d test.rar file1.txt 

e 将文件解压到当前目录 
例:rar e test.rar 
注:用e解压的话，不仅原来的file1.txt和file2.txt被解压到当前目录，就连dir1里面的所有文件 
也被解压到当前目录下，不能保持压缩前的目录结构，如果想保持压缩前的目录结构，用x解压 

k 锁定文档 
例:rar k test.rar 锁定文档后，该文档就无法进行任何更新操作了 

r 修复文档 
例:rar r test.rar 
当rar文件有问题时，可以尝试用该命令进行修复（鬼知道有多少用） 

s 转换文档成自解压文档 
例:rar s test.rar 
会生成一个test.sfx的可执行文档，运行它的效果就相当于rar x test.rar， 
适合于向没有rar的用户传输文件 

t 检测文档 
例:rar t test.rar 
检测test.rar的完整性，一般压缩完大型文件准备传输前最好用这个命令来确保文件的正确性 

x 带路径解压文档中内容到当前目录 
例:rar x test.rar 
这样解压的话，dir1就会保持原来的目录结构 

以上就是rar的常用命令，一个rar操作只能有一个命令，而选项却可以有多个。 
------------------------------------------------------------------------ 
rar选项有很多，在此无法一一说明，只示范经常使用的几个 

cl 将文件名转换为小写 
cu 将文件名转换为大写 
例:rar a -cl test.rar FILe.txt 
FILe.txt在添加进test.rar之后，变为file.txt 

df 文档操作后删除源文件 
例:rar a -df test.rar file1.txt file2.txt dir1 
将file1.txt,file2.txt,dir1压缩到test.rar中之后，删除源文件 

ed 不添加空目录 
例:rar a -ed test.rar dir1 
添加dir1到test.rar中时，不对空目录进行操作 
rar e -ed test.rar 
解压test.rar时，不生成空目录 

k 锁定文件 
例:rar a -k test.rar file1.txt 
等价于rar a test.rar file1.txt 
rar k test.rar 

m<0..5> 设定压缩比等级（0-存储，3-默认，5-最大） 
例:rar a -m0 test.rar dir1 dir2 
将dir1,dir2打包存储到test.rar，不进行实质上的压缩（速度奇快，适合于对无甚可压的文件进行操作 
比如avi，jpg等） 
rar a -m5 test.rar *.txt *.bmp 
将当前目录下的txt文件和bmp文件打包压缩到test.rar中，使用最大压缩比（最慢） 

ms[ext;ext] 特定文件采用非压缩方式 
例:rar a -m5 -ms avi;jpg;jpeg test.rar /home 
将home目录下所有目录和文件归档到test.rar，采用最大压缩，但avi,jpg,jpeg文件不进行压缩 
（只是打包进test.rar，因为这些文件即使用最大压缩也压不了多少，不如直接打包节省时间） 

o+ 覆盖已有文件 
o- 不覆盖已有文件 
例:rar x -o- test.rar 
解压test.rar文件，但是如果碰到以存在的文件则不覆盖 

ol 将符号链接以链接文件保存，而不是普通文件 
ow 保存或者恢复文件所有者的信息（username,group) 
这两个是*nix系统特有的命令，很容易理解吧 
------------------------------------------------------------------------ 
p[password]   设定密码 
例:rar a test.rar *.txt -p prettygirl 
压缩文件设定密码为prettygirl，解压时无密码无法进行操作 
如果觉得明码密码太过暴露，可以使用 
rar a test.rar *.txt -p 
则rar程序会询问你要使用什么密码，不回显 

s- 不使用固实压缩 
注，固实压缩就是压缩后文档内容不可变更的压缩方式，这和lock不一样。因为使用普通压缩 
要照顾以后的插入删除个别文件的需要，就要留下很多操作余地。而固实压缩则不可以对 
其内容进行任何更新，所以压缩比是最大的。 

sfx[name] 创建自解压文件，这和先用a进行压缩，再用s转换效果是一样的。 

t 压缩完毕后进行完整性检验 
例:rar a test.rar /home -t 
压缩完毕后进行检验，如果有问题则报错。 

ta<date> 仅对data日期后文件进行操作 
tb<date> 仅对data日期前文件进行操作 
注，date的格式为 YYYYMMDDHHMMSS 这样。 

v<size>[k,b] 分卷压缩，每卷大小由后面的size指定 
例:rar a -v15000k -m0 test xvid-fn.avi 
对xvid-fn.avi进行打包存储，每卷大小15000k（这种格式在网上发布dvdrip时很流行） 
生成的文件名为test.part1.rar,test.part2.rar….(rar 3.20版） 

x<file> 排除特定的文件 
例:rar x test.rar -x *.txt 
解压test.rar中除*.txt以外的文档 
x@<list> 同上，不过这次所有排除的文件放在list文件列表中 

y 所有操作均回答yes 
例如有时解压时每碰到相同文件就问是否覆盖(Y/N)，加上-y就可以默认选择Yes，不再询问




JDK的安装
在下载的时候有几种文件格式可供选择
bin
rpm
源码
（实际上bin也是先解压出rpm，然后使用rpm自动安装的）

使用bin安装以后，需要到.profile文件中设置一下
 export JAVA_HOME=/jdk安装目录
export PATH=$JAVA_HOME/bin:$PATH
export classpath=$JAVA_HOME/lib:./

ubuntu默认安装有open-java,为了默认使用我们安装的jdk需要进行以下操作步骤：
update-alternatives  --install  /usr/bin/java  java  jdk的安装路径/bin/java  300
update-alternatives  --install  /usr/bin/javac  java  jdk的安装路径/bin/javac  300
通过这一步我们将安装的jdk加入java选单，然后执行：
update-alternatives --config java  这样会有一个备选表单出现，选择后来安装的java文件即可。



七. linux下安装tomcat
   下载tomcat的linux版本并进行解压
进入到bin目录 ./startup.sh启动
强烈注意，linux下的tomcat是一个守护进程，不会像在windos下边那样启动一个tomcat的界面。


八.linux下安装myeclipse后在myeclipse中安装svn时会报错
   我们需要安装
sudo apt-get install libsvn-java

并在安装myeclipse的目录下修改myeclipse.ini文件，在“-vmargs”之后增加
	-Djava.library.path=/usr/share/java/
   -Djava.library.path=/usr/bin/jni/
重启myeclipse即可。



九.linux 下安装Jboss常见问题
 现在用run.sh虽然可以让server跑起来,但是我用我本机连http://172.12.12.12:8080,无法显示页面,原因是server的jboss要被本机以外的电脑连需要设置jboss.bind.address,我新建了一个脚本 start.sh,内容为: 
./run.sh -Djboss.bind.address=172.30.149.48 -b 0.0.0.0 & 
jboss版本不一样,设置不一样,4.2版本必须跟上面一样配置.（配置说明, 172.30.149.48为对外提供服务的IP地址, -b 0.0.0.0表示对所有请求此server的Ip都有权限.） 



最近在Redhat9.2中配置安装JBOSS-4.2.0.GA，原以为那时比较简单的事情，没有想到，启动开通访问
http://192.168.0.5:8080/总是访问不到
使用netstat -an 查看JBOSS的服务启动为：
127.0.0.1:8080，表面看起来没有错误
[root@MT root]# ifconfig
eth0      Link encap:Ethernet  HWaddr 00:0C:29:6B:4B:84
          inet addr:192.168.0.5  Bcast:192.168.0.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:512 errors:0 dropped:0 overruns:0 frame:0
          TX packets:620 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:100
          RX bytes:40830 (39.8 Kb)  TX bytes:417015 (407.2 Kb)
          Interrupt:10 Base address:0x1080
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:6035 errors:0 dropped:0 overruns:0 frame:0
          TX packets:6035 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:175858 (171.7 Kb)  TX bytes:175858 (171.7 Kb)
这个问题困了我好几天，一直没有时间解决它，后来我在查看配置文件 jboss_init_redhat.sh，突然看到：
#if JBOSS_HOST specified, use -b to bind jboss services to that address
JBOSS_BIND_ADDR=${JBOSS_HOST:+"-b $JBOSS_HOST"}
那是不是可以把JBOSS_HOST的地址HARD CORDE为：192.168.0.5
果然，想法正确，并增加自动启动功能，具体步骤如下：
1.  增加jboss用户：
groupadd -g 200 jboss
useradd -u 200 -g jboss jboss
2.安装JDK和JBOSS
[root@MT bin]# env |grep -i java
PATH=/usr/java/jdk1.5.0_10/bin:/usr/java/jdk1.5.0_10/jre/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin
/usr/local/jboss-4.2.0.GA/bin:/root/bin
JAVA_HOME=/usr/java/jdk1.5.0_10
CLASSPATH=:/usr/java/jdk1.5.0_10/lib:/usr/java/jdk1.5.0_10/jre/lib
=========================================================================================================================
[root@MT bin]# env |grep -i jboss
JBOSS_HOME=/usr/local/jboss-4.2.0.GA
PATH=/usr/java/jdk1.5.0_10/bin:/usr/java/jdk1.5.0_10/jre/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin
/usr/local/jboss-4.2.0.GA/bin:/root/bin
PWD=/usr/local/jboss-4.2.0.GA/bin
JBOSS_HOST=192.168.0.5
OLDPWD=/usr/local/jboss-4.2.0.GA
PWD=/usr/local/jboss-4.2.0.GA/bin
3.复制JBoss4自带的启动文件到/etc/init.d下
[root@MT bin]#cp $JBOSS_HOME/bin/jboss_init_redhat.sh  /etc/init.d/
4.设置启动脚步
[root@MT bin]# ln –s /etc/init.d/jboss_init_redhat.sh /etc/rc3.d/K20jboss_init_redhat
[root@MT bin]# ln –s /etc/init.d/jboss_init_redhat.sh /etc/rc3.d/S80jboss_init_redhat
[root@MT bin]# ln –s /etc/init.d/jboss_init_redhat.sh /etc/rc5.d/K20jboss_init_redhat
[root@MT bin]# ln –s /etc/init.d/jboss_init_redhat.sh /etc/rc5.d/S80jboss_init_redhat
[root@MT bin]# chmod –f 777 /etc/init.d/jboss_init_redhat.sh
[root@MT bin]# chmod –f 777 /etc/rc3.d/S80jboss_init_redhat.sh
[root@MT bin]# chmod –Rf 777 $JBOSS_HOME
5.编辑/etc/init.d/jboss_init_redhat.sh文件（注意修改和增加内容）
#!/bin/sh
#
# $Id: jboss_init_redhat.sh 60992 2007-02-28 11:33:27Z dimitris@jboss.org $
#
# JBoss Control Script
#
# To use this script run it as root - it will switch to the specified user
#
# Here is a little (and extremely primitive) startup/shutdown script
# for RedHat systems. It assumes that JBoss lives in /usr/local/jboss,
# it's run by user 'jboss' and JDK binaries are in /usr/local/jdk/bin.
# All this can be changed in the script itself.
#
# Either modify this script for your requirements or just ensure that
# the following variables are set correctly before calling the script.
增加：
#define where jboss is - this is the directory containing directories log, bin, conf etc
JBOSS_HOST=${JBOSS_HOST:-"192.168.0.5"}
修改：
#define where jboss is - this is the directory containing directories log, bin, conf etc
JBOSS_HOME=${JBOSS_HOME:-"/usr/local/jboss-4.2.0.GA"}
#define the user under which jboss will run, or use 'RUNASIS' to run as the current user
JBOSS_USER=${JBOSS_USER:-"jboss"}
修改：
#make sure java is in your path
JAVAPTH=${JAVAPTH:-"/usr/java/jdk1.5.0_10/bin"}
#configuration to use, usually one of 'minimal', 'default', 'all'
JBOSS_CONF=${JBOSS_CONF:-"default"}
#if JBOSS_HOST specified, use -b to bind jboss services to that address
JBOSS_BIND_ADDR=${JBOSS_HOST:+"-b $JBOSS_HOST"}
#define the classpath for the shutdown class
JBOSSCP=${JBOSSCP:-"$JBOSS_HOME/bin/shutdown.jar:$JBOSS_HOME/client/jnet.jar"}
#define the script to use to start jboss
JBOSSSH=${JBOSSSH:-"$JBOSS_HOME/bin/run.sh -c $JBOSS_CONF $JBOSS_BIND_ADDR"}



十.linux下安装svn
Svn(subversion) is used to maintain current and historical versions of files such as source code, web pages, and documentation. Its goal is to be a mostly-compatible successor to the widely used Concurrent Versions System (CVS).
It is very easy to install subversion client on linux OS using yum. You can us following command to install subversion client.
root@server [~]# yum install subversion
while installing subversion if you are getting following error  then it seem sot be perl-URI package is not installed on your server so you will have to install first before installing subversion client.
Please follow the following steps to install perl-URI package
You’ll login via SSH as root and run this command:
root@server [~]# yum install subversion
and then you may get this error:
Error: Missing Dependency: perl(URI) >= 1.17 is needed by package subversion
Here’s what you do next (copy/paste):
root@server [~]# wget  ftp://ftp.pbone.net/mirror/archive.fedoraproject.org/
fedora/linux/releases/7/Everything/i386/os/Fedora/
perl-URI-1.35-3.noarch.rpm

root@server [~]# rpm -i perl-URI-1.35-3.noarch.rpm

root@server [~]# yum install subversion

Installed: subversion.x86_64 0:1.4.2-4.el5 subversion.i386 0:1.4.2-4.el5

Dependency Installed: neon.x86_64 0:0.25.5-10.el5 neon.i386 0:0.25.5-10.el5

Complete!
That’s it subversion client is successfully installed on your server you can check it using following command.
root@server [~]#svn --version
svn, version 1.1.4 (r13838)
compiled Aug 21 2005, 20:56:55

Copyright (C) 2000-2004 CollabNet.
Subversion is open source software, see http://subversion.tigris.org/
This product includes software developed by CollabNet (http://www.Collab.Net/).

The following repository access (RA) modules are available:

* ra_dav : Module for accessing a repository via WebDAV (DeltaV) protocol.
- handles 'http' schema
- handles 'https' schema
* ra_local : Module for accessing a repository on local disk.
- handles 'file' schema
* ra_svn : Module for accessing a repository using the svn network protocol.
- handles 'svn' schema
Regards
Alex P




十一.Linux下安装apache，php服务
安装步骤： 
1 下载XAMPP for linux： http://www.apachefriends.org/download.php?xampp-linux-1.4.15.tar.gz 
2 安装：下载后简单的输入以下命令即可轻松搞定： 

1. 进入linux终端并且用root登陆（系统会提示输入root密码）: 

su 

2. 将下载的档案文件解压到/opt下： 
tar xvfz xampp-linux-1.4.15.tar.gz -C /opt 

警告1：请不要用Microsoft Windows工具对档案文件解压，这样会导致起非正常工作 
警告2：已经安装过Xampp的用户此命令将覆盖原有版本 
自此xampp已经安装到/opt/lampp目录中 

3 启动xampp： 
启动xampp很简单：）输入以下命令： 

/opt/lampp/lampp start 

你将在你的终端中看见类似下面的提示 

Starting XAMPP 1.4.15... 
LAMPP: Starting Apache... 
LAMPP: Starting MySQL... 
LAMPP started. 

好了。apache mysql运行了：）是不是很easy阿。 
如果您在安装过程中得到错误信息请查阅 Linux FAQ 



请问apache中在哪个目录存放主页啊?如果是多个网站该如何设置
谁有相关apache文档,能给一份吗?
rual 发表于 2003-10-16 15:40
请问apache中在哪个目录存放主页啊?如果是多个网站该如何设置
apache中存放主页，你可以自己设定 httpd.conf中的 DocumentRoot。
比如你可以把DocumentRoot改成  /home/test/
如果是windows 就可以改成 c:/htdocs/

设置多个网站，
你可以在httpd.conf 中 最后一段
可以看到
VirtualHost 

他底下有 sample,
自己看一下就会了。

如果还是有问题，继续顶铁子吧！
cyberlee 发表于 2003-10-26 01:36
请问apache中在哪个目录存放主页啊?如果是多个网站该如何设置
Linux下缺省是放在/var/www/html下面的
可以在/etc/httpd/conf/httpd.conf中修改的



十二.discuz安装过程
本教程讲解的全新安装 Discuz! 7.2 的方法（以虚拟空间上安装 Discuz! 7.2 为例演示）。安装 Discuz! 7.2 前请确保是否已经安装好了 UCenter 1.5，参考教程如下：
UCenter 1.5 安装图文教程：http://faq.comsenz.com/viewnews-449
UCenter 1.5 安装视频教程：http://faq.comsenz.com/viewnews-494
如果您之前没有安装过 UCenter 1.5 可以直接下载 Discuz_7.2_FULL 版本一次性安装 UCenter 1.5 + Discuz! 7.2，这里可以根据您的具体需要选择版本，下面我们演示已经安装过UCenter 1.5 全新安装 Discuz! 7.2 的方法。
一、下载适合自己 Discuz! 7.2 版本到本地或服务器
下载地址：http://www.comsenz.com/downloads/install/discuz
说明：官方提供了 4 种不同的编码。包括 GBK 简体中文版(推荐)、UTF-8 简体中文版、BIG5 繁体中文版(推荐)、UTF-8 繁体中文版。如果您的站点主要是国内会员，推荐您使用 GBK 版本。
二、解压并上传论坛程序到服务器且修改相应目录权限
1、上传论坛程序到服务器上
本次演示以 GBK 字符集版本为例（其他字符集版本的也参照此教程方法来安装），解压缩得到如下图所示的三个文件夹：

upload 这个目录下面的所有文件是我们需要上传到服务器上的可用程序文件；
readme 目录为产品介绍、授权、安装、升级、转换以及版本更新日志说明；
utilities 目录为论坛附带工具，包括升级程序和 Tools 工具箱。
将其中 upload 目录下的所有文件使用 FTP 软件以二进制方式（常见 FTP 软件二进制的设置方法http://faq.comsenz.com/viewnews-373）上传到空间（以下截图中使用的 FTP 软件为 FlashFXP，有关此工具的使用教程详见：FTP 使用教程），如下图所示：

2、设置相关目录的文件属性，以便数据文件可以被程序正确读写
使用 FTP 软件登录您的服务器，将服务器上以下目录、以及该目录下面的所有文件的属性设置为 777，Win 主机请设置 internet 来宾帐户可读写属性。
./config.inc.php
./attachments
./forumdata
./forumdata/cache
./forumdata/templates
./forumdata/threadcaches
./forumdata/logs
./uc_client/data/cache
关于目录权限修改可以参考：http://faq.comsenz.com/viewnews-183


三、安装过程
上传完毕后，开始在浏览器中安装 Discuz! 7.2 ，登录 UCenter 1.5 => 应用管理 => 添加新应用 => URL 安装 (推荐)：

用你的网站域名替换“应用程序安装地址”中的 “http://domainname”部分，然后点击“安装”进入准备安装界面：

阅读授权协议后点击“我同意”，系统会自动检查环境及文件目录权限，如下图所示：

检测成功，点击“下一步”，即进入检测服务器环境以及设置 UCenter 界面，如下图所示：

这里会自动获取 UCenter 信息，所以无需手动配置，直接点击“下一步”进入数据库信息配置界面：

填写好 Discuz! 数据库信息及管理员信息后，点击“下一步”，系统会自动安装数据库直至完毕，如下图所示：

安装成功后，点击“进入下一步填写联系方式”，会出现如下的界面：

填写好联系方式后点击“提交”，也可以点击“跳过本步”直接完成安装。

安装完毕后进入 Discuz! 7.2 首页查看网站：

至此，Discuz! 7.2 已经成功地安装完毕！您可以登录 Discuz! 7.2 站点并开始设置了。


第一次安装discuz，安装成功后跳到首页，报如下错误：
Error:Table 'ucenter.uc_pms' doesn't exist
Errno:1146
SQL::SELECT count(*) FROM `ucenter`.uc_pms WHERE (related='0' AND msgfromid>'0' OR msgfromid='0') AND msgtoid='0' AND folder='inbox' AND new='1'
查了下 ，数据库ucenter里没有uc_pms表。 
经过搜索，在一篇帖子里提到的方法新建这个表：
DROP TABLE IF EXISTS uc_pms;
CREATE TABLE uc_pms (
pmid int(10) unsigned NOT NULL auto_increment,
msgfrom varchar(15) NOT NULL default '',
msgfromid mediumint(8) unsigned NOT NULL default '0',
msgtoid mediumint(8) unsigned NOT NULL default '0',
folder enum('inbox','outbox') NOT NULL default 'inbox',
new tinyint(1) NOT NULL default '0',
subject varchar(75) NOT NULL default '',
dateline int(10) unsigned NOT NULL default '0',
message text NOT NULL,
delstatus tinyint(1) unsigned NOT NULL default '0',
related int(10) unsigned NOT NULL default '0',
PRIMARY KEY(pmid),
KEY msgtoid(msgtoid,folder,dateline),
KEY msgfromid(msgfromid,folder,dateline),
KEY related (related),
KEY getnum (msgtoid,folder,delstatus)
) 

