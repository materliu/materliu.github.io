---
layout: post
title: jekyll安装全文静态索引插件
---

## jekyll 安装全文静态索引插件

插件的使用很简单， 按照github上 jekyll_lunr_js_search 官网说明一步步来就好了， 只是gem 依赖 nokogiri的安装太蛋疼了

这里我们集中火力 nokogiri的安装

在windows上安装nokogiri的时候报错

    Temporarily enhancing PATH to include DevKit...
    Building native extensions.  This could take a while...
    ERROR:  Error installing nokogiri:
            ERROR: Failed to build gem native extension.

        d:/Ruby200-x64/bin/ruby.exe extconf.rb
    checking for libxml/parser.h... no
    -----
    libxml2 is missing.  please visit http://nokogiri.org/tutorials/installing_noko
    iri.html for help with installing dependencies.
    -----
    *** extconf.rb failed ***
    Could not create Makefile due to some reason, probably lack of necessary
    libraries and/or headers.  Check the mkmf.log file for more details.  You may
    need configuration options.

    Provided configuration options:
            --with-opt-dir
            --without-opt-dir
            --with-opt-include
            --without-opt-include=${opt-dir}/include
            --with-opt-lib
            --without-opt-lib=${opt-dir}/lib
            --with-make-prog
            --without-make-prog
            --srcdir=.
            --curdir
            --ruby=d:/Ruby200-x64/bin/ruby
            --with-zlib-dir
            --without-zlib-dir
            --with-zlib-include
            --without-zlib-include=${zlib-dir}/include
            --with-zlib-lib
            --without-zlib-lib=${zlib-dir}/lib
            --with-iconv-dir
            --without-iconv-dir
            --with-iconv-include
            --without-iconv-include=${iconv-dir}/include
            --with-iconv-lib
            --without-iconv-lib=${iconv-dir}/lib
            --with-xml2-dir
            --without-xml2-dir
            --with-xml2-include
            --without-xml2-include=${xml2-dir}/include
            --with-xml2-lib
            --without-xml2-lib=${xml2-dir}/lib
            --with-xslt-dir
            --without-xslt-dir
            --with-xslt-include
            --without-xslt-include=${xslt-dir}/include
            --with-xslt-lib
            --without-xslt-lib=${xslt-dir}/lib
            --with-libxslt-config
            --without-libxslt-config
            --with-pkg-config
            --without-pkg-config
            --with-libxml-2.0-config
            --without-libxml-2.0-config
            --with-pkg-config
            --without-pkg-config
            --with-libiconv-config
            --without-libiconv-config
            --with-pkg-config
            --without-pkg-config


    Gem files will remain installed in d:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/noko
    iri-1.6.1 for inspection.
    Results logged to d:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/nokogiri-1.6.1/ext/no
    ogiri/gem_make.out


gem install nokogiri --pre

一行命令搞定， 安装开发中的nokogiri即可， 此时 2014-04-22日, 也许等nokogiri 外发了就不会有问题啦








