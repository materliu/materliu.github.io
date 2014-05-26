---
layout: post
title: url长度限制
---
    
# url长度限制

由于之前的一个web项目中，要用get方法去获取数据，但结果时常报错，经过仔细排查才发现原来url长度超过了限制，通过缩短url和发送多次请求的方法解决了该问题，之后在网上查了些资料，发现这个问题还是内藏玄机，要比自己想的复杂。

首先，其实http 1.1 协议中对url的长度是不受限制的，协议原文：

The HTTP protocol does not place any a priori limit on the length of a URI. Servers MUST be able to handle the URI of any resource they serve, and SHOULD be able to handle URIs of unbounded length if they provide GET-based forms that could generate such URIs. A server SHOULD return 414 (Request-URI Too Long) status if a URI is longer than the server can handle (see section 10.4.15).

Note: Servers ought to be cautious about depending on URI lengths above 255 bytes, because some older client or proxyimplementations might not properly support these lengths.

翻译：

HTTP协议不对URI的长度作事先的限制，服务器必须能够处理任何他们提供资源的URI，并且应该能够处理无限长度的URIs，这种无效长度的URL可能会在客户端以基于GET方式的请求时产生。如果服务器不能处理太长的URI的时候，服务器应该返回414状态码（此状态码代表Request-URI太长）。

注:服务器在依赖大于255字节的URI时应谨慎，因为一些旧的客户或代理实现可能不支持这些长度。

虽然协议中未明确对url进行长度限制，但在真正实现中，url的长度还是受到限制的，一是服务器端的限制，二就是游览器端的限制。

一、服务器端

在服务器端，主要是apache，jboss和nginx等，我在网上找到的调节方法可以参加下文：关于http请求url长度以及请求消息体长度的研究（一）（服务器端）

1.1 nginx

由于现在项目中主要用到nginx，所以强调下它的设置参数：large_client_header_buffers

该参数对nginx服务器接受客户端请求的头信息时所分配的最大缓冲区的大小做了限制，也就是nginx服务器一次接受一个客户端请求可就收的最大头信息大小。这个头不仅包含 request-line，还包括通用信息头、请求头域、响应头域的长度总和。这也相当程度的限制了url的长度。

nginx服务器默认的限制是4K或者8K，这是根据服务器的硬件配置有关的，一般为内存一页的大小，目前大部分为4K，即4096字节。



1.2 nodejs

这主要是针对nodejs程序员，如不做相关开发可以直接忽略这一节。

nodejs的http服务，设置url长度限制和headers的大小还是相对比较灵活的，我简单实现了控制程序，这里_limit就是url长度的控制器

二、游览器端

游览器的种类繁多，并且对URL的长度限制是有所差异的，具体如下：

游览器	最大长度（字符数）          	备注
Internet Explorer  	2083     	如果超过这个数字，提交按钮没有任何反应
Firefox	65,536
chrome	8182
Safari 	80,000
Opera	190,000
curl（linux下指令）	8167


这些数据主要通过网上数据搜索而来，笔者还没有亲自验证过。但都有限制是不争的事实，大家在做开发时要特别注意。


