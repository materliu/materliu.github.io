---
layout: post
title: 表格post提交方式，form post method, form submit 提交 拦截
---

## 表格post提交方式，form post method, form submit 提交 拦截

有人在stackoverflow上提过类似的问题[访问](http://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean)

When you make a POST request, you have to encode the data that forms the body of the request in some way.

HTML forms provide two methods of encoding. The default is application/x-www-form-urlencoded, which is more or less the same as a query string on the end of the URL. The other, multipart/form-data, is a more complicated encoding but one which allows entire files to be included in the data. (HTML 5 introduces the text/plain encoding which is useful only for debugging … and even then the others are better given sensible debugging tools).

The specifics of the encodings don't really matter to most developers.

When you are writing client-side code: Use multipart/form-data when your form includes any <input type="file"> elements.

When you are writing server-side code: Use a prewritten form handling library (e.g. Perl's CGI->param or the one exposed by PHP's $_POST superglobal) and it will take care of the differences for you. Don't bother trying to parse the raw input received by the server.

* [multipart/form-data 格式详解](http://tools.ietf.org/html/rfc2388)

### form submit 拦截

在手机上开发的时候，我们常常会使用html5的 input 元素的form属性来进行构建页面， 将form和输入控件分离开来，如下：

    <form id="search-hack-form" hidden>
        <input id="search-hack-form-submit" type="submit" style="display: none"/>
    </form>

    <section id="search-bar" class="search-bar">
        <div class="search-box-container">
            <input id="search-box" class="search-box" form="search-hack-form" type="search"/>
        </div>
    </section>

input#search-box 本来应该放在form中，但是我们把form单独抽离出来以使结构更加简单，清晰，而对于提交事件的处理，我们常常是采用监听submit事件的方式来实现：

    // 拦截 search-box 的搜索行为
    $("search-hack-form").addEventListener("submit", function (event) {
    });

但是如果我们想在程序中主动的触发form的submit事件，比如说调用$("search-hack-form").submit();
那么我们前边写的对submit事件的监听并不会得到执行，那怎么办呢？

方法也很简单，像我们上边的写法，在form中添加一个不可见的 search-hack-form-submit submit
的input元素，调用这个元素的click事件即可。

这个click事件会转而引发 form的submit事件。


