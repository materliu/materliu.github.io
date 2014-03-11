---
layout: post
title: 2014-03-11-使用github jekyll pages经验谈.md
---

初次使用我们会发现很多时候，本地成功编译的项目，到了github上就会报错，这是因为：
Jekyll中默认的markdown渲染器是maruku，但是它对Latex公式和中文支持都不太好, 通常是根据不同的需要选择其它几种渲染器（rdiscount，kramdown，redcarpet等），它们各有利弊。Github在后台则选用了Redcarpet作为其文本渲染器，因为它安全性高且性能卓越，同时它在基本Markdown语法的基础上增加了一些自己的特性。Kramdown是这几个当中对基础 Markdown语法拓展最多，也是最方便使用的1（但是跟Pandoc相比，还是差得很远）。笔者之前一直是使用rdiscount，结果在本地编译没问题的代码在Github上就是无法通过，折腾了半天知道Github上的rdiscount是1.6.8版本，而本地rdiscount是2.1.6版本。下降版本后发现rdiscount1.6.8版本不支持注脚语法。使用低版本就无法使用注脚，使用高版本就无法在Github上编译通过
github官网也给出了让本地环境与服务器一致的方法：
https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll
参照里边的步骤来就可以了
