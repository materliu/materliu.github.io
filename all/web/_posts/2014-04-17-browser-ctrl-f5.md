---
layout: post
title: ctrl+f5强制刷新，浏览器干了哪些事情
---

## ctrl+f5强制刷新，浏览器干了哪些事情

1. ctrl+f5 会强制在资源请求头中加上

    Cache-Control: no-cache

    Pragma: no-cache

2. f5 会强制在资源请求头中加上

    Cache-Control: max-age=0

    有可能会带 if-modified-since:

3. HTTP协议说明
   HTTP/1.1规范14.9.4中规定：

   End-to-end reload(即CTRL-F5强制刷新)会发送如下HTTP头：
   Cache-Control: no-cache
   Pragma: no-cache

   Specific end-to-end revalidation(即F5 刷新)会发送如下HTTP头：
   Cache-Control: max-age=0
   If-Modified-Since: Fri, 15 Apr 2011 12:08:21 GMT

4. 补充2中说的可能的原因

    A request with If-Modified-Since makes only sense if the client has already a resource which is obtained along a response with a Last-Modified header in combination with headers which allow browser caching like a Cache-Control and/or Pragma value containing public.

    Also, I've noticed that some browsers does not include If-Modified-Since when the original response also contained an ETag header. The browser will instead use If-None-Match to test it.

    其实浏览器每次请求资源，都会在本地信息中对这条url中记录一条 Last Accessed

    http RFC 中说在server 返回头中没有 cache control 和 expires 信息时， 浏览器有权利自主决定到底用什么缓存策略， 一般是LM-Factor 算法：

    if a cached document was last changed in the distant past, it may be a stable document and less likely to change suddenly, so it is safer to keep it in the cache longer.



3. max-age=0 的作用其实等于 cache-control: no-cache 而跟 cache-control: no-store 大不相同：

no-store 的意思是 这个网络资源绝对不能被缓存， 每次使用到都必须去服务器上拉取。

no-cache的意思则不一样， 这个网络资源可以在cache里边放一份， 但你不能直接使用， 必须先到服务器上问一下，这个资源是不是最新的， 如果是最新的则可以直接从cache中取出来用， 如果不是， 则需要从服务器重新拉取。

4. [stackoverflow上大神的总结](http://stackoverflow.com/questions/385367/what-requests-do-browsers-f5-and-ctrl-f5-refreshes-generate)

