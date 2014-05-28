---
layout: post
title: 编写属于你自己的yeoman generator
---
    
# 编写属于你自己的yeoman-generator

基于webapp-generator 主要做以下改动

1. 去掉任务 autoprefixer, 因为如果需要， sass可以帮忙干这件事情， 不需要的时候就更显得多余

1. 去掉任务 imagemin, 因为大多数人的机器上这个任务都无法正常执行，况且我们可以利用compass来做这件事

1. 去掉任务 cssmin, 因为compass在正式环境代码输出的时候就会压缩代码了

2. grunt-sass 现在并不成熟， 使用node-sass来编译scss文件， 去掉这个插件的选择，使用更为强大的grunt-contrib-compass

3. 提供我们业务方自定义的404页面

3. 对应生成 config.rb 自动连接上一条中的grunt-contrib-compass

3. package.json 改为4个空格缩进的code-styles!

4. 提供是否选用 jquery的选项， 根据是否选用了jquery来生成不同的base.js文件， 不选用requirejs组织js代码的方式， 采用最原始的拼接形式。

8. 提供选项， 是否使用 handlerbars 模板

5. base.js 中提供CONFIG配置项， 根据自动化脚本自动替换version的值

6. 生成 _font-family.scss 文件， 预存各种页面的常用字体

7. 默认生成的main.scss文件，加入规则, 自动import "font-family"

    ```
    html {
        font: 12px/1.5 $china-usually;
    }
    ```


