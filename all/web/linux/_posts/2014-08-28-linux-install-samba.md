---
layout: post
title: linux安装配置samba服务
---

### linux 安装配置 samba 服务

先介绍一下samba服务： 一般情况下我们访问linux上的文件只能通过ssh连接以后，再一个目录， 一个文件的去查看， 有了samba服务， 我们可以直接通过smb协议连接到对应的机器的对应目录， 大大方便我们文件的操作。比如说windows连接linux samba服务截图如下：

![windows-link-samba](/attachments/2014-08-28-samba-windows.jpg)

windows下的访问方式非常简单， 直接在资源管理器地址栏输入相关地址即可

mac上相对复杂一点， 在Finder菜单栏上点击go - Connect to Server 在Server Address输入： smb://**** 即可

<pre>
yum install samba
vim /etc/smb.cnf
</pre>

<pre>
[all]
comment = shared file of /
path = /
public = yes
browseable = yes
writable = yes
available = yes
valid users = root, xiaomi
admin users = root, xiaomi
</pre>

// 配置完配置文件之后， 需要添加一下用户

smbpasswd -a username

service samba restart

// 或者 service smb restart 看linux起的是哪个服务


CENTOS additional ops:

-A RH-Firewall-1-INPUT -s 192.168.10.0/24 -m state --state NEW -m udp -p udp --dport 137 -j ACCEPT
-A RH-Firewall-1-INPUT -s 192.168.10.0/24 -m state --state NEW -m udp -p udp --dport 138 -j ACCEPT
-A RH-Firewall-1-INPUT -s 192.168.10.0/24 -m state --state NEW -m tcp -p tcp --dport 139 -j ACCEPT
