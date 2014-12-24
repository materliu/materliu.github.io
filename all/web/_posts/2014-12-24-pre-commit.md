---
layout: post
title: 为Git添加hook，提交代码前执行js,css校验
---

## 为Git添加hook，提交代码前执行js,css校验

1. 如果项目里有 package.json 文件，直接 npm install --save pre-commit ，然后在 package.json 里找到 scripts 这个key，如果没有自己新建，设置value为

    "scripts": {
        "jshint": "jshint -c .jshintrc path_to_check",
        "jscs" : "jscs -c .jscsrc path_to_check"
    }

2. 安装jshint和jscs, npm install -g jshint jscs。

3. 新建配置文件，.jshintrc, .jscsrc, .jshintignore

4. 根据自己的需求将校验规则添加到配置文件里，配置文件可参考

    http://jshint.com/docs/options/
    https://github.com/jscs-dev/node-jscs

5. 随便修改一个文件，然后 git commit -m '试试'

