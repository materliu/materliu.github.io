---
layout: post
title: 修改Sublime Text 3 的侧边栏字体大小
---
    
# 修改Sublime Text 3 的侧边栏字体大小

首先需要确保安装了Package Control
Package Control作为ST必备插件，这里就不多介绍了，没装的话，google一下，各种介绍以及安装教程贴，当然，使用其官网的安装命令是最靠谱的了：https://sublime.wbond.net/installation(需翻墙，所以内容摘录如下)

The simplest method of installation is through the Sublime Text console. The console is accessed via the ctrl+` shortcut or the View > Show Console menu. Once open, paste the appropriate Python code for your version of Sublime Text into the console.

import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

This code creates the Installed Packages folder for you (if necessary), and then downloads the Package Control.sublime-package into it. The download will be done over HTTP instead of HTTPS due to Python standard library limitations, however the file will be validated using SHA-256.

人工安装：

Click the Preferences > Browse Packages… menu

Browse up a folder and then into the Installed Packages/ folder

Download Package [Control.sublime-package](/attachments/2014-11-01-Package-Control.sublime-package) and copy it into the Installed Packages/ directory

Restart Sublime Texwt


然后安装PackageResourceViewer
快捷键 ⌘(command)+⇧(shift)+P 打开 Command Palette
输入 Package Control:Install 回车，等待加载package列表
搜索并安装 PackageResourceViewer 包

最后，使用PackageResourceViewer打开Theme文件进行编辑
快捷键 ⌘(command)+⇧(shift)+P 打开 Command Palette
输入 PackageResourceViewer: Open Resource 回车，打开包列表
选择 Theme - Default，再选择 Default.sublimt-theme
搜索 sidebar_label，在 "class": "sidebar_label" 后边加一行："font.size": 18，将字体大小设置为18，保存。
好啦，大功告成！

如果觉得行间距太小，可以往上找下，有个class:"sidebartree"，调一下里边的`rowpadding`配置即可。

