---
layout: post
title: 使用github_jekyll_pages经验谈
---

## 使用github_jekyll_pages经验谈

初次使用我们会发现很多时候，本地成功编译的项目，到了github上就会报错，这是因为：

Jekyll中默认的markdown渲染器是maruku，但是它对Latex公式和中文支持都不太好, 通常是根据不同的需要选择其它几种渲染器（rdiscount，kramdown，redcarpet等），它们各有利弊。

Github在后台则选用了Redcarpet作为其文本渲染器，因为它安全性高且性能卓越，同时它在基本Markdown语法的基础上增加了一些自己的特性。

Kramdown是这几个当中对基础 Markdown语法拓展最多，也是最方便使用的1（但是跟Pandoc相比，还是差得很远）。

笔者之前一直是使用rdiscount，结果在本地编译没问题的代码在Github上就是无法通过，折腾了半天知道Github上的rdiscount是1.6.8版本，而本地rdiscount是2.1.6版本。下降版本后发现rdiscount1.6.8版本不支持注脚语法。使用低版本就无法使用注脚，使用高版本就无法在Github上编译通过

github官网也给出了让本地环境与服务器一致的方法：
https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll
参照里边的步骤来就可以了

但是在公司64位windows上安装的时候还是遇到了一些问题

1. 代理问题   在命令行窗中   `set http_proxy=*****:8080`

2. 直接bundle install 报错 `Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.`

    1. 首先需要安装 RedCloth 报错 Please update your PATH to include build tools or download the DevKi from 'http://rubyinstaller.org/downloads' and follow the instruction at 'http://github.com/oneclick/rubyinstaller/wiki/Development-Kit'

    1. 解决方法 `gem install RedCloth --platform=mswin32`
    2. bundle解决方法， 在Gemfile配置文件中加上：gem 'RedCloth', :platforms => :mswin
    3. 如果经历了上边两步还是不行的话，就需要安装devkit了
        按照上边第一步中给出的地址，指引安装。

        但是在运行 ruby dk.rb install 的时候可能会报错：

        Invalid configuration or no Rubies listed. Please fix 'config.yml' and rerun 'ruby dk.rb install'

        在devkit的目录中找到 config.yml文件， 在其中加入一行 - d:/Ruby200-x64 就是你ruby的所在目录

        重新运行 ruby dk.rb install

    4. 重回项目目录，运行 bundle install

3. bundle exec jekyll serve 在本机跑jekyll的时候发现遇到了新的问题

    1. invalid byte sequence in GBK. Use --trace to view backtrace

        解决方案：

        编辑 E:\Ruby200\lib\ruby\gems\2.0.0\gems\jekyll-1.0.3\lib\jekyll目录下的convertible.rb文件 你可以搜索convertible.rb文件 修改配置文件之类的 建议先备份一下 这里不备份没事的哈 因为修改很简单 在大概第31行（你可以搜索File.read）的位置处将self.content = File.read(File.join(base, name))改为self.content = File.read(File.join(base, name),:encoding=>"utf-8")   新版的可以通过配置文件配置编码了，已经。在新版本的jeky中已经能够支持在_config.yml中配置编码了encoding: utf-8

    2. Generating... You are missing a library required for Textile. Please run:...

        $ [sudo] gem install RedCloth

        Conversion error: There was an error converting 'all/web/_posts/2008-04-12-rails-shock.textile/#excerpt'.

        实际上我本地已经成功安装了 RedCloth

        没找到解决方案， 但看stackoverflow上一篇文章说： [redcloth还不支持ruby2.0](http://stackoverflow.com/questions/17682753/redcloth-loaderror-on-ruby-2-0-0-i386-mingw32) 但这个问题中也有另一个回答者给了一个解决方案， 我没有尝试

        所以删除了项目中所有的 .textile 文件

    3. Generating... error: Invalid argument - E:/workspace/idea/materliu.github.io/_site/E:. Use --trace to view backtrace

        解决方案：

        [stackoverflow上有人回答了这个问题](http://stackoverflow.com/questions/21137096/jekyll-error-running-jekyll-serve)  似乎是jekyll 1.4.3的问题， 换用1.4.2即可

        gem uninstall jekyll

        gem install jekyll --version "=1.4.2"

        这样就导致不能用 bundle里边的方式bundle exec jekyll serve了，因为其中用的是 jekyll 1.4.3

        只能本地 jekyll serve

    4. 本地运行之后，windows机器如果文件名中包含中文，则会出现访问的时候

        Internal Server Error

        "\xA3\x85" from GBK to UTF-8

        或者 找不到的错误， 尝试一下午搜索，自己动手，都没有找到解决方案

        最后放弃，采用规避的方式，在文件名中不要使用中文， title中随便你用中文。

    5. 本地运行， 如果 --watch 的话还会报错 ruby/2.0.0/rubygems/core_ext/kernel_require.rb:45:in `require'

        解决方法：这是1.4.2的一个bug， 安装jekyll的稳定版 1.2.1

        ~ $ gem uninstall jekyll
        ~ $ gem install jekyll --version(="1.2.1")

        但是安装了这个版本就有回到了1的问题， 需要按照其中的方法修改


对于layout中的引用，jekyll的template使用的是liquid语法， [访问地址][1]    [wiki地址][2]

在修改layout文件的过程中， 我使用了 liquid 的 split filter， 发现它的wiki文档上给的例子是错误的， split 后边跟的参数需要是 ''括起来的， 已帮助其修改wiki。

页面中的代码高亮我使用了 SyntaxHighlighter 这一单独的js文件 [访问地址][3]
用法也相当简单：
在layouts文件中的html文件，添加对css的引用：

    <link rel="stylesheet" type="text/css" href="/css/sh/shCore.css" />
    <link rel="stylesheet" type="text/css" href="/css/sh/shThemeRDark.css" />

同时还有对js的应用：

    <script language="javascript" src="/javascripts/sh/shCore.js"></script>
    <script language="javascript" src="/javascripts/sh/shBrushRuby.js"></script>
    <script language="javascript" src="/javascripts/sh/shBrushPhp.js"></script>
    <script language="javascript" src="/javascripts/sh/shBrushXml.js"></script>
    <script language="javascript" src="/javascripts/sh/shBrushCss.js"></script>
    <script language="javascript" src="/javascripts/sh/shBrushBash.js"></script>
    <script language="javascript" src="/javascripts/sh/shBrushJScript.js"></script>

在markdown中的写法就成了

    <pre class="brush: js"> 格式化js代码
        // js code here
    </pre>


[1]: https://github.com/Shopify/liquid liquid github线上地址
[2]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
[3]: http://alexgorbatchev.com/SyntaxHighlighter/manual/installation.html