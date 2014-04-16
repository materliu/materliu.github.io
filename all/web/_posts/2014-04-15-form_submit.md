---
layout: post
title: 表格post提交方式，form post method
---

## 表格post提交方式，form post method

有人在stackoverflow上提过类似的问题[访问](http://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean)

When you make a POST request, you have to encode the data that forms the body of the request in some way.

HTML forms provide two methods of encoding. The default is application/x-www-form-urlencoded, which is more or less the same as a query string on the end of the URL. The other, multipart/form-data, is a more complicated encoding but one which allows entire files to be included in the data. (HTML 5 introduces the text/plain encoding which is useful only for debugging … and even then the others are better given sensible debugging tools).

The specifics of the encodings don't really matter to most developers.

When you are writing client-side code: Use multipart/form-data when your form includes any <input type="file"> elements.

When you are writing server-side code: Use a prewritten form handling library (e.g. Perl's CGI->param or the one exposed by PHP's $_POST superglobal) and it will take care of the differences for you. Don't bother trying to parse the raw input received by the server.

* [multipart/form-data 格式详解](http://tools.ietf.org/html/rfc2388)



