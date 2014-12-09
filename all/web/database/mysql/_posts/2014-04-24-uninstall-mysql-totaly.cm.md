---
layout: post
title: windows如何彻底卸载mysql
---

## windows如何彻底卸载mysql

如何彻底删除mysql



1.首先在windows服务中将mysql服务删掉，使用命令 sc delete mysql

2.在控制面板中卸载掉mysql。

3.清理mysql安装目录的ini文件。

4.清理注册表：

HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Eventlog\Application\MySQL 目录删除

HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\Eventlog\Application\MySQL 目录删除

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application\MySQL 目录删除（我卸载的时候没有找到，略过后仍达到完全卸载的目的。）

5.有一些mysql的数据文件也必须删除干净，比如说：C:\Documents and Settings\All Users\Application Data\MySQL

6.重启电脑。重新安装即可。
