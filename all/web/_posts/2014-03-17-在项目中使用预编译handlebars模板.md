---
layout: post
title: 2014-03-17-在项目中使用预编译handlebars模板.md
---

## 在项目中使用预编译handlebars模板
如果对js模板不是很清楚的同学可以参考： [推荐五款流行的JavaScript模板引擎][/all/web/2014/03/16/推荐五款流行的JavaScript模板引擎.html]

下边切入正文： [handlebars官网][http://handlebarsjs.com/]

我们这里假设你已经使用grunt完成了你的web项目的开发流程自动化。

关于为什么需要做javascript模板的预编译?
[可以参考1](http://lostechies.com/derickbailey/2012/04/10/javascript-performance-pre-compiling-and-caching-html-templates/)
[可以参考2](http://stackoverflow.com/questions/13536262/what-is-javascript-template-precompiling)

下边来说一下具体的操作步骤：

-  在script目录下新建目录template，内置两个目录handlebars/handlebars-generated

-  handlebars，比如：[noresult-tips.hsb](/attachments/noresult-tips.hsb)

-  handlebars-generated 目录内存放自动编译handlebars生成的 client js template 文件。

-  配置grunt handlebars

    * 安装grunt-contrib-handlebars，[github访问地址](https://github.com/gruntjs/grunt-contrib-handlebars)
    * 修改grunt配置文件

        ```javascript
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST',
                    processName: function(fielPath) {
                        return filePath.match(/^app\/scripts\/public\/template\/handlebars\/(.*)\.hbs$/)[1];
                    }
                },
                files: {
                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/noresult-tips.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/noresult-tips.hbs'
                }

            }

        }
        ```
        说一下几个参数各自的含义：

        - namespace： 将handlebars模板编译成client-side使用的js模板函数的window下的命名空间

        - processName: 生成的预编译模板对象的索引key

-  在js文件中如何使用：
    * 首先需要引入handlebars的运行时文件，[下载地址](/attachments/handlebars.runtime-v1.3.0.js)

        ```html
            <script src="scripts/public/template/handlebars/handlebars.runtime-v1.3.0.js"></script>
        ```
    * 使用handlebars有时候我们需要自定义一些helper，具体参见handlebars的官网,所以我们单独新建一个[helper js文件](/attachments/handlebars.helper.js)

        ```html
            <script src="scripts/public/template/handlebars/handlebars.helper.js"></script>
        ```

    * 引入通过grunt-contrib-handlebars生成的js模板文件

        ```html
            <script src="scripts/public/template/handlebars/handlebars.runtime-v1.3.0.js"></script>
            <script src="scripts/public/template/handlebars/handlebars.helper.js"></script>
            <script src="scripts/public/template/handlebars-generated/noresult-tips.js"></script>
        ```

    * 在逻辑js中的调用方法是：

        ```html
            <script src="scripts/public/template/handlebars/handlebars.runtime-v1.3.0.js"></script>
            <script src="scripts/public/template/handlebars/handlebars.helper.js"></script>
            <script src="scripts/public/template/handlebars-generated/noresult-tips.js"></script>
            <script src="scripts/logic.js"></script>
        ```

        在logic.js 里边的调用：

        ```javascript
            renderHtml = window.JST["noresult-tips"]({
                // 这里传入用于渲染模板的data数据模型
            });
            document.getElementById("result-sec").innerHTML = renderHtml
        ```

