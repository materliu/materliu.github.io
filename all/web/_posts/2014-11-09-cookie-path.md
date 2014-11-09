---
layout: post
title: 写入cookie的时候对path的要求
---

### 写入cookie的时候对path的要求

1. http://materliu.test.org/cookie-path/cookie-a.html 页面向路径 /cookie-pathB/ 写入cookie内容， 发现无法写入。
2.  http://materliu.test.org/cookie-path/cookie-a.html 页面向路径 /cookie-path/ 写入cookie内容， 发现写入成功。 在控制台输出 document.cookie cookie内没有path内容，值为写入内容"pathA=test"。
3. http://materliu.test.org/cookie-path/cookie-a.html 页面向路径 / 写入cookie内容， 发现写入成功。 在控制台输出 document.cookie cookie内没有path内容，值为写入内容"pathA=test"。
4. http://materliu.test.org/cookie-path/cookie-a.html 页面向读取写入在路径 / 下的cookie内容， 发现读取成功。
5. http://materliu.test.org/cookie-path/cookie-a.html 页面向读取写入在路径 /cookie-path/ 下的cookie内容， 发现读取成功。
6. http://materliu.test.org/cookie-path/cookie-a.html 页面向读取写入在路径 /cookie-pathB/ 下的cookie内容， 发现读取失败
7. http://materliu.test.org/cookie-path/cookie-a.html 页面向读取写入在路径 /cookie-path/cookie-sec-path 下的cookie内容， 发现读取失败

结论： 页面可以读取跟自己相同或者上一级path的cookie， 无法读取自己路径，或者不同路径的cookie。

补充知识： [屈光宇文章](https://www.imququ.com/post/host-only-cookie.html)
1. 服务器在使用 set-cookie Header的时候，可以设置HttpOnly， JS不能读取HttpOnly的cookie。
2. 如果cookie带有secure字段， 表示这个cookie仅在https环境下才能使用。
3. host-only-flag：在Cookie中不包含Domain属性，或者Domain属性为空，或者Domain属性不合法（不等于页面url中的Domain部分、也不是页面Domain的大域）时为true。此时，我们把这个Cookie称之为HostOnly Cookie；
			那么host-only-flag如果为true会怎样呢？获取Cookie时，首先要检查Domain匹配性，其次才检查path、secure、httponly等属性的匹配性。如果host-only-flag为true时，只有当前域名与该Cookie的Domain属性完全相等才可以进入后续流程；host-only-flag为false时，符合域规则（domain-matches）的域名都可以进入后续流程。

举个例子，host-only-flag为true时，Domain属性为example.com的Cookie只有在example.com才有可能获取到；host-only-flag为false时，Domain属性为example.com的Cookie，在example.com、www.example.com、sub.example.com等等都可能获取到。

设置Cookie时，Domain属性值如果是.a.com，前面的.会被去掉，变成a.com（rfc6265第5.2.3节）；
对于name、path和domain均相同的Cookie，后面的覆盖前面的（rfc6265第5.3节第10段）；