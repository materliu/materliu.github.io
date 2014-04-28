---
layout: post
title: webstorm idea external tools 整合ant
---
    
# webstorm idea external tools 整合ant

1.Webstorm - settings

2.打开 external-tools

3. 各配置项的含义解释一下：

   Name：就是添加的工具的名字

   Group：就是把它归类到哪一组里边

   Descripton: 不多说

   Options: 分别表示的意思是：

   1. 如果每次运行完这个额外的工具，文件发生了变化，则同步过来。

   2. 运行的时候打开webstorm的console

   3. 如果这个工具向标准输出输出则把显示内容显示在console里

   4. 如果这个工具向标准错误输出则把显示内容显示在console里

   Show in： 不多说，就是这个工具显示在webstorm的哪里

   Tool settings：

   1. program： 找到你本机的ant的安装目录

   2. parameters：一般不需要

   3. working directory： ant的工作目录，这里插入宏，选择当前项目目录

   Ok

   回到主界面：点击tools：

   发现已经多了一个ant

6.点击ant直接运行，前提是你项目的根目录下有 build.xml 文件哦。


