---
layout: post
title: wget参数详解
---

## wget参数详解

wget是一个从网络上自动下载文件的自由工具。它支持HTTP,HTTPS和FTP协议,可以使用HTTP代
理.

所谓的自动下载是指,wget可以在用户退出系统的之后在后台执行。这意味这你可以登录系统, 启动一个wget下载任务,然后退出系统,wget将在后台执行直到任务完成,相对于其它大部分浏 览器在下载大量数据时需要用户一直的参与,这省去了极大的麻烦。
wget 可以跟踪HTML页面上的链接依次下载来创建远程服务器的本地版本,完全重建原始站点的目 录结构。这又常被称作"递归下载"。在递归下载的时候,wget 遵循Robot Exclusion标准 (/robots.txt). wget可以在下载的同时,将链接转换成指向本地文件,以方便离线浏览。

wget 非常稳定,它在带宽很窄的情况下和不稳定网络中有很强的适应性.如果是由于网络的原因下 载失败,wget会不断的尝试,直到整个文件下载完毕。如果是服务 器打断下载过程,它会再次联 到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有 用。

wget的常见用法

wget虽然功能强大,但是使用起来还是比较简单的

基本的语法是:wget [参数列表] "URL" 用""引起来可以避免因URL中有特殊字符造成的下载出错。

下面就结合具体的例子来说明一下wget的用法。
1. 下载整个http或者ftp站点。

    wget http://place.your.url/here

    这个命令可以将http://place.your.url/here 首页下载下来。使用-x会强制建立服务器上一模一样的目录,如果使用-nd参数,那么服务器上下载的所有内容都会加到本地当前目录。

    wget -r http://place.your.url/here

    这个命令会按照递归的方法,下载服务器上所有的目录和文件,实质就是下载整个网站。这 个命令一定要小心使用,因为在下载的时候,被下载网站指向的所有地址 同样会被下载,因此, 如果这个网站引用了其他网站,那么被引用的网站也会被下载下来!基于这个原因,这个参数不 常用。可以用-l number参数来指定下载的层次。例如只下载两层,那么使用-l 2。

    要是您想制作镜像站点,那么可以使用-m参数,例如:wget -m http://place.your.url/here

    这时wget会自动判断合适的参数来制作镜像站点。此时,wget会登录到服务器上,读入 robots.txt并按robots.txt的规定来执行。

2. 断点续传。
    当文件特别大或者网络特别慢的时候,往往一个文件还没有下载完,连接就已经被切断,此 时就需要断点续传。wget的断点续传是自动的,只需要使用-c参数,例如:

    wget -c

    使用断点续传要求服务器支持断点续传。-t参数表示重试次数,例如需要重试100次,那么就 写-t 100,如果设成-t 0,那么表示无穷次重试,直到连接成功。-T参数表示超时等待时间,例 如-T 120,表示等待120秒连接不上就算超时。

3. 批量下载。

    如果有多个文件需要下载,那么可以生成一个文件,把每个文件的URL写一行,例如生成文件 download.txt,然后用命令:wget -i download.txt 这样就会把download.txt里面列出的每个URL都下载下来。(如果列的是文件就下载文件,如果列 的是网站,那么下载首页)

4. 选择性的下载。

    可以指定让wget只下载一类文件,或者不下载什么文件。例如:

    wget -m --reject=gif http://target.web.site/subdirectory 表示下载http://target.web.site/subdirectory,但是忽略gif文件。--accept=LIST 可以

    接受的文件类型,--reject=LIST拒绝接受的文件类型。

5. 密码和认证。

    wget只能处理利用用户名/密码方式限制访问的网站,可以利用两个参数: --http-user=USER设置HTTP用户 --http-passwd=PASS设置HTTP密码 对于需要证书做认证的网站,就只能利用其他下载工具了,例如curl。

6. 利用代理服务器进行下载。

    如果用户的网络需要经过代理服务器,那么可以让wget通过代理服务器进行文件的下载。此 时需要在当前用户的目录下创建一个.wgetrc文件。文件中可以设置代理服务器:

    http-proxy = 111.111.111.111:8080
    ftp-proxy = 111.111.111.111:8080

    分别表示http的代理服务器和ftp的代理服务器。如果代理服务器需要密码则使用:

    --proxy-user=USER设置代理用户

    --proxy-passwd=PASS设置代理密码

    这两个参数。

    使用参数--proxy=on/off 使用或者关闭代理。 wget还有很多有用的功能,需要用户去挖掘。


wget的使用格式

Usage: wget [OPTION]... [URL]...

* 用wget做站点镜像:

    wget -r -p -np -k http://dsec.pku.edu.cn/~usr_name/

    或者

    wget -m http://dsec.pku.edu.cn/~usr_name/

    wget --mirror –w 2 –p --HTML-extension –-convert-links – P ~\wget_files\example1 http://www.yourdomain.com

    --mirror(-m):指定要做镜像的网站。wget会获取网站的所有链接和相关的文件。如果 本地镜像存在,还会自动覆盖最近的更新。

    -w:告诉wget每个请求的间隔时间,这里是2秒。这个不是必需的,当有些站点对请求 间隔有限制时,这个参数就非常有用了。

    -p:让wget获取页面上的所有元素,使其能在本地浏览。--mirror参数并不会保证所有的 图片及相关文件都被下载,所以需要加上-p来指定。

    --HTML-extension:将所有不是html扩展名的文件都转换成.html。这个参数会 把CGI,ASP,PHP等结尾的文件都转换成html结尾。

    -P(prefix folder):指定目标文件夹。

* 在不稳定的网络上下载一个部分下载的文件,以及在空闲时段下载 wget -t 0 -w 31 -c http://dsec.pku.edu.cn/BBC.avi -o down.log &

    或者从filelist读入要下载的文件列表

    wget -t 0 -w 31 -c -B ftp://dsec.pku.edu.cn/linuxsoft -i filelist.txt -o down.log &

    上面的代码还可以用来在网络比较空闲的时段进行下载。我的用法是:在mozilla中将不方便当时 下载的URL链接拷贝到内存中然后粘贴到文件filelist.txt中,在晚上要出去系统前执行上面代码 的第二条。

* 使用代理下载

    wget -Y on -p -k https://sourceforge.net/projects/wvware/

    代理可以在环境变量或wgetrc文件中设定

    在环境变量中设定代理

    export PROXY=http://211.90.168.94:8080/ # 在~/.wgetrc中设定代理

    http_proxy =

    ftp_proxy = http://proxy.yoyodyne.com:18023/

wget各种选项分类列表 * 启动

        -V, --version
        -h, --help
        -b, --background
        -e, --execute=COMMAND 执行`.wgetrc'格式的命令,wgetrc格式参见/etc/wgetrc或~
        /.wgetrc
        * 记录和输入文件
          -o,  --output-file=FILE
          -a,  --append-output=FILE
          -d,  --debug
          -q,  --quiet
          -v,  --verbose
          -nv, --non-verbose
          -i,  --input-file=FILE
          -F,  --force-html
          -B,  --base=URL
        把记录写到FILE文件中
        把记录追加到FILE文件中
        打印调试输出
        安静模式(没有输出)
        冗长模式(这是缺省设置)
        关掉冗长模式,但不是安静模式 下载在FILE文件中出现的URLs 把输入文件当作HTML格式文件对待
        将URL作为在-F -i参数指定的文件中出现的相对链接的前缀 可选客户端证书
        可选客户端证书的KEYFILE 指定EGD socket的文件名
        指定本地使用地址(主机名或IP,当本地有多个IP或名字时使
        设定最大尝试链接次数(0 表示无限制). 把文档写到FILE文件中 不要覆盖存在的文件或使用.#前缀 接着下载没下载完的文件 设定进程条标记 不要重新下载文件除非比本地文件新 打印服务器的回应
        不下载任何东西 设定响应超时的秒数 两次尝试之间间隔SECONDS秒 在重新链接之间等待1...SECONDS秒 在下载之间等待0...2*WAIT秒 打开或关闭代理 设置下载的容量限制
        限定下载输率
               --sslcertfile=FILE
               --sslcertkey=KEYFILE
               --egd-file=FILE
               --bind-address=ADDRESS
        用)
        -t, --tries=NUMBER
        -O --output-document=FILE -nc, --no-clobber
        -c, --continue
               --progress=TYPE
          -N,  --timestamping
          -S,  --server-response
               --spider
          -T,  --timeout=SECONDS
          -w,  --wait=SECONDS
               --waitretry=SECONDS
               --random-wait
          -Y,  --proxy=on/off
          -Q,  --quota=NUMBER
               --limit-rate=RATE
        * 下载
        * 目录
        -nd --no-directories
        -x, --force-directories
        -nH, --no-host-directories
        -P, --directory-prefix=PREFIX
        不创建目录
        强制创建目录
        不创建主机目录 将文件保存到目录 PREFIX/... 忽略 NUMBER层远程目录
        * HTTP
        --cut-dirs=NUMBER 选项 --http-user=USER --http-passwd=PASS
        -C,  --cache=on/off
        -E,  --html-extension
             --ignore-length
             --header=STRING
             --proxy-user=USER
             --proxy-passwd=PASS
             --referer=URL
        设定HTTP用户名为 USER.
        设定http密码为 PASS. 允许/不允许服务器端的数据缓存 (一般情况下允许). 将所有text/html文档以.html扩展名保存
        忽略 `Content-Length'头域
        在headers中插入字符串 STRING
        设定代理的用户名为 USER
        设定代理的密码为 PASS
        在HTTP请求中包含 `Referer: URL'头
        显示wget的版本后退出 打印语法帮助 启动后转入后台执行
        3 of 6 2011/7/24 10:03Wget用法、参数解释的比较好的一个文章 - Ted's Blog http://ted.is-programmer.com/posts/4446.html
          -s,  --save-headers
          -U,  --user-agent=AGENT
               --no-http-keep-alive
               --cookies=off
               --load-cookies=FILE
               --save-cookies=FILE
        * FTP 选项
        -nr, --dont-remove-listing -g, --glob=on/off
               --passive-ftp
               --active-ftp
               --retr-symlinks
        * 递归下载
        -r, --recursive -l, --level=NUMBER
               --delete-after
          -k,  --convert-links
          -K,  --backup-converted
          -m,  --mirror
          -p,  --page-requisites
        保存HTTP头到文件
        设定代理的名称为 AGENT而不是 Wget/VERSION. 关闭 HTTP活动链接 (永远链接).
        不使用 cookies.
        在开始会话前从文件 FILE中加载cookie 在会话结束后将 cookies保存到 FILE文件中
        不移走 `.listing'文件
        打开或关闭文件名的 globbing机制 使用被动传输模式 (缺省值). 使用主动传输模式 在递归的时候,将链接指向文件(而不是目录)
        * 递归下载中的包含和不包含(accept/reject)
        -A,  --accept=LIST
        -R,  --reject=LIST
        -D,  --domains=LIST
             --exclude-domains=LIST
             --follow-ftp
             --follow-tags=LIST
        -G,  --ignore-tags=LIST
        -H,  --span-hosts
        -L,  --relative
        -I,  --include-directories=LIST
        -X,  --exclude-directories=LIST
        -np, --no-parent
        分号分隔的被接受扩展名的列表 分号分隔的不被接受的扩展名的列表 分号分隔的被接受域的列表 分号分隔的不被接受的域的列表 跟踪HTML文档中的FTP链接 分号分隔的被跟踪的HTML标签的列表 分号分隔的被忽略的HTML标签的列表 当递归时转到外部主机 仅仅跟踪相对链接
        允许目录的列表
        不被包含目录的列表
        不要追溯到父目录