---
layout: post
title: mac下使用crontab定时执行某一任务
---

# mac下使用crontab定时执行某一任务

我要定期更新几个本地的github项目， 并执行编译指令。

1. In Terminal: crontab -e
2. Press i to go into vim's insert mode

		Type your cron job, for example:

		\* *  *  *  * 命令
		前面的五个*号，表示分、时、日、月、周，如：
		代表意义 分钟 小时 日期 月份 周
		数字范围 0-59 0-23 1-31 1-12 0-7
		*号代表任何时间都接受的意思，任意。
		*号之间用空格分开，如果是一段范围，用-号连接；如果是隔开几个时间，用,号表示。
		另外，命令必须是编写计划任务的用户有权限执行的，并且最后用绝对路径。
		59 23 1 5 * mail linuxing < /home/test.txt
		每在5月1日，23点59分就把/home/test.txt的内容作为邮件发给linuxing用户
		*/5 * * * * /opt/test.sh
		每5分钟就执行一次/opt/test.sh脚本
		0 3,6 * * * /usr/local/bin/test.sh
		每在3点和6点整点都执行/usr/local/bin/test.sh命令
		0 8-12 * * * /root/backup.sh
		8 点到 12 点之间的每小时的0分都执行/root/backup.sh
		Press Esc to exit vim's insert mode

		下边是我自己的任务：
		0 9,15,21 * * * cd /Users/mater/Documents/workspaces/third-party-official-websites/code-guide/;/usr/bin/git pull;/usr/bin/jekyll build;echo "codeguide done `date`" >> /Users/mater/Documents/kuaipan/快盘/some_datas/mac/autorun.log
        0 9,15,21 * * * cd /Users/mater/Documents/workspaces/third-party-official-websites/bower/;/usr/bin/git pull;/usr/bin/jekyll build;echo "bower done `date`" >> /Users/mater/Documents/kuaipan/快盘/some_datas/mac/autorun.log
        0 9,15,21 * * * cd /Users/mater/Documents/workspaces/third-party-official-websites/yeoman/;/usr/bin/git pull;/usr/local/bin/grunt build;echo "yeoman done `date`" >> /Users/mater/Documents/kuaipan/快盘/some_datas/mac/autorun.log
        0 9,15,21 * * * cd /Users/mater/Documents/workspaces/third-party-official-websites/grunt/;/usr/sbin/lsof -Pnl +M -i4|grep 5678|awk '{print $2}'|xargs kill -9;/usr/bin/git pull;/usr/local/bin/grunt build;echo "grunt done `date`" >> /Users/mater/Documents/kuaipan/快盘/some_datas/mac/autorun.log;/usr/bin/nohup /usr/local/bin/npm start &

3. Verify by using crontab -l
