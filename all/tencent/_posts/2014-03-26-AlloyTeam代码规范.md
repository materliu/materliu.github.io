---
layout: post
title: 2014-03-26-AlloyTeam代码规范.md
---

# 为什么我们强行推这样一个规范
Golden rule:  Every line of code should appear to be written by a single person, no matter the number of contributors.

## JavaScript代码规范 本规范输出主要参考《Maintainable JavaScript》，jQuery Core Style Guide, Douglas Crockford's Code Conventions, SproutCore Style Guide, Google JavaScript Style Guide, Dojo Style Guide
+ 项目名全部采用小写方式， 以中划线分隔。 比如： my-project-name
+ 目录名参照上一条规则,有复数结构时，要采用复数命名法，比如说： scripts, styles, images, data_models
+ 所有js文件名，多个单词组成时，采用中划线连接方式，比如说： 账号模型文件 account-model.js
+ Indentation Levels
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
        + 最少三行
            ```javascript
            /*
             * 注释内容与星标前保留一个空格
             */
            ```
        + 前边留空一行
    + 何时使用
        + 难于理解的代码段
        + 可能存在错误的代码段
        + 浏览器特殊的HACK代码
        + 想吐槽的产品逻辑, 合作同事
        + 业务逻辑强相关的代码
    + Documentation Comments
        + 各类标签 @param @method 等 参考 http://usejsdoc.org/
        + 格式

            ```javascript
            /**
             * here boy, look here , here is girl
             * @method lookGril
             * @param {Object} balabalabala
             * @return {Object} balabalabala
             */
            ```

        + 用在哪里
            + All methods
            + All constructors
            + All objects with documented methods
+ 括号对齐
    + 标准示例 括号前后有空格， 花括号起始 不另换行，结尾新起一行

        ```javascript
        // Good
        if (condition) {
            doSomething();
        }
        ```

    + 花括号必须要， 即使内容只有一行， 决不允许下边这种情况

        ```javascript
        if (condition)
            doSomething();
            doSomethingElse();
        ```

    + 涉及 if for while do...while try...catch...finally 的地方都必须使用花括号
+ if else 的语法， 采用下边的格式， else 前后留有空格

    ```javascript
    if (condition) {
        doSomething();
    } else {
        doSomethingElse();
    }
    ```
+ switch 语法，采用下边的格式， switch和括号之间有空格， case需要缩进， break之后跟下一个case中间留一个blank line

    ```javascript
    switch (condition) {
        case "first":
            // code
            break;

        case "third":
            // code
            break;

        default:
            // code
    }
    ```

+ switch 的 falling through 一定要有注释特别说明， no default 的情况也需要注释特别说明

    ```javascript
    switch (condition) {

        // obvious fall through    // 这里为啥JSHint默认就会放过，因为 case "first" 内无内容
        case "first":
        case "second":
            // code
            break;

        case "third":
            // code

            /* falls through */ // 这里为啥要加这样的注释， 明确告知JSHint放过此处告警
        default:
            // code
    }

    switch(condition) {
        case "first":
            // code
            break;

        case "second":
            // code
            break;

        // no default
    }
    ```

+ with 的约定？ 别想要了， 不要用with就是了
+ for 循环
    + 普通版, 分号后留有一个空格， 判断条件等内的操作符两边不留空格， 前置条件如果有多个，逗号后留一个空格

        ```javascript
        var values = [ 1, 2, 3, 4, 5, 6, 7 ],
            i, len;

        for (i=0, len=values.length; i<len; i++) {
            process(values[i]);
        }
        ```

    + for-in

        ```javascript
        var prop;

        for (prop in object) {

            // 注意这里一定要有 hasOwnProperty 的判断， 否则 JSLint 或者 JSHint 都会有一个 warn ！
            if (object.hasOwnProperty(prop)) {
                console.log("Property name is " + prop);
                console.log("Property value is " + object[prop]);
            }
        }
        ```

+ 变量声明
    + 所有函数内变量声明放在函数内头部，只使用一个 var(多了JSLint报错)， 一个变量一行， 在行末跟注释， 注释啊，注释啊，亲， 再不写注释砍你

        ```javascript
        function doSomethingWithItems(items) {

           var value = 10,    // 注释啊，注释啊，亲， 再不写注释砍你
               result = value + 10,    // 注释啊，注释啊，亲， 再不写注释砍你
               i,    // 注释啊，注释啊，亲， 再不写注释砍你
               len;    // 注释啊，注释啊，亲， 再不写注释砍你

           for (i=0, len=items.length; i < len; i++) {
               doSomething(items[i]);
           }
        }
        ```

+ 函数声明
    + 一定先声明再使用， 不要利用 JavaScript engine的hoist特性, 违反了这个规则 JSLint 和 JSHint都会报 warn
    + function declaration 和 function expression 的不同，function expression 的（）前后必须有空格，而function declaration 在有函数名的时候不需要空格， 没有函数名的时候需要空格。

        ```javascript
        function doSomething(item) {
            // do something
        }

        var doSomething = function (item) {
            // do something
        }
        ```

    + 函数调用括号前后不需要空格

        ```javascript
        // Good
        doSomething(item);

        // Bad: Looks like a block statement
        doSomething (item);
        ```

    + 立即执行函数的写法, 最外层必须包一层括号

        ```javascript
        // Good
        var value = (function() {

            // function body
            return {
                message: "Hi"
            }
        }());
        ```
    + "use strict" 决不允许全局使用， 必须放在函数的第一行， 可以用自执行函数包含大的代码段, 如果 "use strict" 在函数外使用， JSLint 和 JSHint 均会报错

        ```javascript
        // Good
        (function() {
            "use strict";

            function doSomething() {
                // code
            }

            function doSomethingElse() {
                // code
            }

        })();
        ```

+ 相等条件判断
    + 完全避免 == != 的使用， 用严格比较条件 ===  !==
+ eval 非特殊业务， 禁用！！！


## HTML代码规范 本规范主要参考bootstrap的作者 mdo 输出的规范  https://github.com/mdo/code-guide

## CSS代码规范 本规范主要参考bootstrap的作者 mdo 输出的规范  https://github.com/mdo/code-guide


## 代码规范中有疑问的点：
+ html， css 到底是4个空格缩进，还是2个空格缩进
+ 是否要在自动闭合标签结尾处使用斜线








