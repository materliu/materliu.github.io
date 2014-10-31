---
layout: post
title: CORS简单请求和复杂请求, preflight options
---

### CORS简单请求和复杂请求, preflight options

CORS请求并不是我们想的那么简单跟普通请求一样，都是直接向服务器发送具体的请求内容的。为了防止跨域请求无端对服务器数据造成损坏，部分CORS请求并不是直接就可以向服务器发送的，不能直接发的这部分请求我们就称为复杂请求。复杂请求在发送前， 首先由浏览器向服务器发送一个preflight 的请求Header 为 Options 的请求，服务器收到这个Options请求后，通过校验其中的信息来决定是否允许当前客户端进一步发起CORS请求，然后将判断结果返回给浏览器。浏览器根据返回内容来决定是否进行下一步真实的请求。服务器对此次Options的请求的返回内容中还可以指示浏览器，是否在下次请求携带相关的Cookie或者Http Authentication 数据过来。

下边就详述一下简单请求和复杂请求。 

1. 简单请求
		满足一下两个条件的， 我们才可以称之为简单请求：
			1. Only uses GET, HEAD or POST. If POST is used to send data to the server, the Content-Type of the data sent to the server with the HTTP POST request is one of application/x-www-form-urlencoded, multipart/form-data, or text/plain.
			2. Does not set custom headers with the HTTP Request (such as X-Modified, etc.)
			浏览器会默认添加 Origin Header,  Origin: http://origin.domain 用来表示请求源于哪个站点
2. 复杂请求
	    不满足简单请求条件的， 我们都称之为复杂请求：
	    	Unlike simple requests (discussed above), "preflighted" requests first send an HTTP request by the OPTIONS method to the resource on the other domain, in order to determine whether the actual request is safe to send.  Cross-site requests are preflighted like this since they may have implications to user data.  In particular, a request is preflighted if:
	    	1. It uses methods other than GET, HEAD or POST.  Also, if POST is used to send request data with a Content-Type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain, e.g. if the POST request sends an XML payload to the server using application/xml or text/xml, then the request is preflighted.
			2. It sets custom headers in the request (e.g. the request uses a header such as X-PINGOTHER)
Note: Starting in Gecko 2.0, the text/plain, application/x-www-form-urlencoded, and multipart/form-data data encodings can all be sent cross-site without preflighting. Previously, only text/plain could be sent without preflighting.

英文好的同学直接阅读底部参考资料吧， 讲的详细又好。 之所以要自己记录一下， 是因为我不确定DELETE， PUT 等http method 是否对同源web server 也存在preflight， 所以我需要记录自己的实验内容。 
快速构建服务器内容， 通过[http://loopback.io/](http://loopback.io/)实现。
然后通过testcase的内容， 调用发现同源Delete 只请求了一次。




参考资料： [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)