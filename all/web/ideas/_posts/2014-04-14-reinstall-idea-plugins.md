---
layout: post
title: 重装intellij idea后必装插件
---

## [重装idea后必装插件](http://plugins.jetbrains.com/?idea)

因为国内网络访问这个站点效果一直不太好，经常下载不到，所以我全部趁网络好的时候check了离线包下来

1. vim [2014-04-28](/attachments/2014-04-28-ideavim.zip)

2. markdown [2013-12-01](/attachments/2013-12-01-idea-markdown.zip)

3. key promoter [2012-05-22](/attachments/2012-05-22-Key_promoter_11324.jar)

    Shows to user how easy he can make same action using only keyboard(menus and toolbar button mouse clicks initiates shortcut display)

4. webmaster [2014-01-09](/attachments/2014-01-09-webmaster.zip)

    Provides some extra features for web-developers (see 'Webmaster' item in 'Tools', Editor popup and Project View popup)

5. hexview [2006-09-13](/attachments/2006-09-13-HexView_2423.jar)

    自己在webstrom下装了， 死活找不到在哪

    所以我就改用notepad++ 看文件的16进制了， notepad++ 也是需要装插件的[hexEditor](/attachments/2014-04-23-HexEditor.dll)  安装方法非常简单： 把dll拷贝到D:\Program Files (x86)\Notepad++\plugins  notepad++的安装目录的plugins目录, 重启notepad++

6. Character Browser [2006-02-07](/attachments/2006-02-07-Character_Browser_915.zip)

    This plugin allows you to browse and search characters and parts of the Unicode" character set. Insert characters into an editor in one of 10 forms. Decodes coded characters at the cursor position.

    同样是webstorm装了找不到在哪

### 需要做的调整
1. 添加jekyll-md file template

File and Code Template - Template - 名字可以叫做"jekyll-md" , 文件内容如下：

<pre>
---
layout: post
title: ${Title}
---
</pre>

这时候到File-new 如果找不到可以参考 [创建的file template 在新建文件的列表中没有](/all/web/ideas/2014/05/02/idea-file-template-not-show.html)
