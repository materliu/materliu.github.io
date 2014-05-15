---
layout: post
title: 编写属于你自己的yeoman generator
---
    
# 编写属于你自己的yeoman-generator

基于webapp-generator 主要做以下改动

1. 去掉任务 autoprefixer, 因为如果需要， sass可以帮忙干这件事情， 不需要的时候就更显得多余

2. grunt-sass 现在并不成熟， 使用node-sass来编译scss文件， 去掉这个插件的选择，使用更为强大的grunt-contrib-compass

3. 对应生成 config.rb 自动连接上一条中的grunt-contrib-compass

3. package.json 改为4个空格缩进的code-styles!