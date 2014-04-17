---
layout: post
title: stackedit如何在内网部署
---

## stackedit如何在内网部署, 如何在自己的机器上部署一套stackedit

首先在github上下载stackedit的源码
同时需要下载stackedit-download-proxy的[源码](https://github.com/benweet/stackedit-download-proxy)

在stackedit项目目录下有一个public目录，这就是网站的全部发布代码，将stackedit直接部署到服务器下， 这里我们部署到了域名 alloyteam.oa.com/md/

这时候通过alloyteam.oa.com/md/ 可以直接打开stackedit 的编辑器模式

Stackedit 有一种view模式，这是我们大多数查看文档的人所需要的： http://alloyteam.oa.com/md/viewer.html?url=http://alloyteam.oa.com/readme/qqfindmobile.md

在后边直接跟需要查看的md文件的url路径，就可以直接通过viewer模式查看这个文件了。

但这里还有几步要做：

1. Stackedit 是通过stackedit-download-proxy去下载url中指定的文件的，对于我们只能访问内网的用户， stackedit-download-proxy也需要在服务器上部署一套，很简单： 直接拷贝到nodejs目录， node server.js 启动即可。 但这种模式存在一个问题，就是一旦你关闭远程登录的窗口，起的这个nodejs服务就会被停掉，为了让它一直生效，执行： nohup node server.js &

### 涨姿势：

unix/Linux下一般想让某个程序在后台运行，很多都是使用 & 在程序结尾来让程序自动运行。比如我们要运行mysql在后台：

     /usr/local/mysql/bin/mysqld_safe --user=mysql &

　但是我们很多程序并不象mysqld一样可以做成守护进程，可能我们的程序只是普通程序而已，一般这种程序即使使用 & 结尾，如果终端关闭，那么程序也会被关闭。为了能够后台运行，我们需要使用nohup这个命令，比如我们有个start.sh需要在后台运行，并且希望在后台能够一直运行，那么就使用nohup：

    nohup /root/start.sh &

在shell中回车后提示：

       [~]$ appending output to nohup.out

原程序的的标准输出被自动改向到当前目录下的nohup.out文件，起到了log的作用。

但是有时候在这一步会有问题，当把终端关闭后，进程会自动被关闭，察看nohup.out可以看到在关闭终端瞬间服务自动关闭。

咨询红旗Linux工程师后，他也不得其解，在我的终端上执行后，他启动的进程竟然在关闭终端后依然运行。

在第二遍给我演示时，我才发现我和他操作终端时的一个细节不同：他是在当shell中提示了nohup成功后还需要按终端上键盘任意键退回到shell输入命令窗口，然后通过在shell中输入exit来退出终端；而我是每次在nohup执行成功后直接点关闭程序按钮关闭终端.。所以这时候会断掉该命令所对应的session，导致nohup对应的进程被通知需要一起shutdown。

这个细节有人和我一样没注意到，所以在这儿记录一下了。

附：nohup命令参考
nohup 命令

　　用途：不挂断地运行命令。

　　语法：nohup Command [ Arg ... ] [　& ]

　　描述：nohup 命令运行由 Command 参数和任何相关的 Arg 参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序。要运行后台中的 nohup 命令，添加 & （ 表示"and"的符号）到命令的尾部。

　　无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到 $HOME/nohup.out 文件中。如果没有文件能创建或打开以用于追加，那么 Command 参数指定的命令不可调用。如果标准错误是一个终端，那么把指定的命令写给标准错误的所有输出作为标准输出重定向到相同的文件描述符。

　　退出状态：该命令返回下列出口值：

　　126 可以查找但不能调用 Command 参数指定的命令。

　　127 nohup 命令发生错误或不能查找由 Command 参数指定的命令。

　　否则，nohup 命令的退出状态是 Command 参数指定命令的退出状态。

　　nohup命令及其输出文件

　　nohup命令：如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用nohup命令。该命令可以在你退出帐户/关闭终端之后继续运行相应的进程。nohup就是不挂起的意思( n ohang up)。

　　该命令的一般形式为：nohup command &

　　使用nohup命令提交作业

　　如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：

　　nohup command > myout.file 2>&1 &

　　在上面的例子中，输出被重定向到myout.file文件中。

　　使用 jobs 查看任务。

　　使用 fg %n　关闭。

　　另外有两个常用的ftp工具ncftpget和ncftpput，可以实现后台的ftp上传和下载，这样就可以利用这些命令在后台上传和下载文件了。

2. 配置nginx， 让下载链接指向1中启动的这个服务。 注意download处
 upstream deploy.alloyteam {
       server 127.0.0.1:12345;
   }

   server {
       listen 80;
       server_name alloyteam.oa.com;
       proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
       root /data/sites/alloyteam.oa.com;
      location /deploy/ {
         proxy_pass http://127.0.0.1:12345/;
      }
      location = /download {
         proxy_pass http://127.0.0.1:9999/download;
      }
      error_log /usr/local/nginx/logs/alloyteam.oa.com_error.log;
  }

3.  修改 stackedit的源码， 把下载url "https://stackedit-download-proxy.herokuapp.com/” 修改为： http://alloyteam.oa.com/

4. 部署在我们测试机上的stackedit-download-proxy 使用http get 去get我们制定的md文件， 我们把md文件也部署到 alloyteam.oa.com域名下， 放在readme子目录
   http://alloyteam.oa.com/readme/qqfindmobile.md    但是测试机并没有办法解析到alloyteam.oa.com具体指向的机器，所以需要配置测试机的host： cd /etc/   vim hosts
   在里边添加一条： 10.12.23.163 alloyteam.oa.com
   Ok， 现在可以正常使用了。