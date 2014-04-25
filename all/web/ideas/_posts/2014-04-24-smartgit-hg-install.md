---
layout: post
title: smartgit/hg安装报错
---

## smartgit/hg安装报错

一直觉得用命令行版本的git太蛋疼了， 所以找了一个口碑非常不错的git客户端，而且个人使用免费

安装的时候报错，连接远程的github的时候

ava.security.cert.CertificateException: SHA fingerprint of certificate does not match.

Expected: B1:4B:A1:6F:5C:EE:28:DA:C4:86:CD:D9:F2:80:8F:2E:A7:4A:51:F4
Actual: CF:05:98:89:CA:FF:8E:D8:5E:5C:E0:C2:E4:F7:E6:C3:C7:50:DD:5C

This may either mean that the server certificate has changed or that you are spoofed.

搜了一下解决方案是：

From [1]: to fix SmartGit 5.0.7.1 (and older) add following line to smartgit.properties (in the SmartGit settings directory, see About dialog):

smartgit.hostingProvider.bitbucket.sslFingerprint=37:A8:0E:13:87:DA:13:C3:B8:35:6F:84:EF:74:D2:38:B1:AC:59:9B

smartgit.hostingProvider.github.sslFingerprint=37:A8:0E:13:87:DA:13:C3:B8:35:6F:84:EF:74:D2:38:B1:AC:59:9B

After restarting SmartGit, connection will work again.

也有人说，可以通过升级客户端解决， 所以我又在官网下了最新版，确实没有报上边的问题， 但我觉得上边的方案应该也是可行的， 安装好以后在about里可以找到settings的目录，里边有smartgit.properties 文件




