---
layout: post
title: 2014-03-26-AlloyTeam代码规范.md
---

## 本规范输出主要参考《Maintainable JavaScript》，jQuery Core Style Guide, Douglas Crockford's Code Conventions, SproutCore Style Guide, Google JavaScript Style Guide, Dojo Style Guide
+ 项目名全部采用小写方式， 以下划线分隔。 比如： my_project_name
+ 目录名参照上一条规则,有复数结构时，要采用复数命名法，比如说： scripts, styles, images, data_models
+ 所有js文件名，多个单词组成时，采用中划线连接方式，比如说： 账号模型文件 account-model.js
+ Indentaion Levels
    + 一律使用4个空格
    + continuation-indentation 同样适用4个空格，更上一行对齐
+ Statement 之后一律以分号结束， 不可以省略
+ 单行长度，理论上不要超过80列，不过如果编辑器开启 soft wrap 的话可以不考虑单行长度
+ 接上一条，如果需要换行，存在操作符的情况，一定在操作符后换行，然后换的行缩进4个空格

    ```javascript
    callAFunction(document, element, window, "some string value", true, 123,
        navigator);
    ```

    这里要注意，如果是多次换行的话就没有必要继续缩进了，比如说下边这种就是最佳格式。

    ```javascript
    if (typeof qqfind === "undefined" ||
        typeof qqfind.cdnrejected === "undefined" ||
        qqfind.cdnrejected !== true) {
        url = "http://pub.idqqimg.com/qqfind/js/location4.js";
    } else {
        url = "http://find.qq.com/js/location4.js";
    }
    ```

+ 空行
    + 方法之间加
    + 单行或多行注释前加
    + 逻辑块之间加空行增加可读性
+ 变量命名
    + 标准变量采用驼峰标识

        ```javascript
        var thisIsMyName
        ```

    + 使用的ID的地方一定全大写

        ```javascript
        var goodID
        ```

    + 涉及Android的，一律大写第一个字母

        ```javascript
        var AndroidVersion
        ```

    + 涉及iOS的，一律小写第一个，大写后两个字母

        ```javascript
        var iOSVersion
        ```

    + 常量采用大写字母，下划线连接的方式

        ```javascript
        var MAX_COUNT = 10;
        ```

    + 构造函数，大写第一个字母

        ```javascript
        function Person(name) {
            this.name = name
        }
        ```

+ literal values
    + string 使用  ""
    + charater 使用 ''
    + null的使用场景(直接看英文吧，小伙伴们，不帮你们翻译了)
        + To initialize a variable that may later be assigned an object value
        + To compare against an initialized variable that may or may not have an object value
        + To pass into a function where an object is expected
        + To return from a function where an object is expected
    + 不适合使用null的场景
        + Do not use null to test whether an argument was supplied.
        + Do not test an uninitialized variable for the value null.
    + undefined的使用场景
        + 永远不要直接使用undefined进行变量判断

            ```javascript
            // Bad
            var person;
            console.log(person === undefined);    //true
            ```

        + 使用字符串 "undefined" 对变量进行判断

            ```javascript
            console.log(typeof person);    // "undefined"
            ```

    + Object Literals

        ```javascript
        // Bad
        var team = new Team();
        team.title = "AlloyTeam";
        team.count = 25;
        ```

        ```javascript
        // Good
        var team = {
            title: "AlloyTeam",
            count: 25
        };
        ```

    + Array Literals

        ```javascript
        // Bad
        var colors = new Array("red", "green", "blue");
        var numbers = new Array(1, 2, 3, 4);
        ```

        ```javascript
        // Good
        var colors = [ "red", "green", "blue" ];
        var numbers = [ 1, 2, 3, 4 ];
        ```
+ Commnets
    + Single-Line Comments
        + 双斜线后，必须跟注释内容保留一个空格
        + 可独占一行, 前边不许有空行, 缩进与下一行代码保持一致

            ```javascript
            // Good
            if (condition) {

                // if you made it here, then all security checks passed
                allowed();
            }
            ```

        + 可位于一个代码行的末尾，注意这里的格式

            ```javascript
            var zhangsan = "zhangsan";    // 双斜线距离分号四个空格，双斜线后始终保留一个空格
            ```

    + Multiline Comments
    + 何时使用
    + Documentation Comments





