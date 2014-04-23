---
layout: post
title: QQ定向分享
---

## QQ定向分享

iframe 内嵌QQ定向分享的方式：[测试地址](http://connect.qq.com/widget/shareqq/test_iframe_shareqq.html)

新开tab页QQ定向分享的方式：[测试地址](http://connect.qq.com/widget/shareqq/test_shareqq.html)


## 关于定向分享无法自定义分享图片跟进结果

背景：

定向分享最初的版本，是使用我们自己开发的 cgi 进行摘要，图片抓取，并且可以支持第三方自定义图片。

这种方式同步到qzone、微博都没有问题，因为他们的接口都有自定义图片参数；

可是分享到QQ的时候，是没有自定义图片参数的，是 QQ 利用 soso 的业务，对 url 进行解析，自己获取摘要或图片。

所以为了分享效果一致，只好切换到 soso 的抽取业务。
 
SoSo 抽取策略：

先分析页面，识别出页面上相应的块，正文，导航，二级导航，广告等等，然后从中选数据出来

摘要优先选的是页面的meta信息的description，没有meta的选的是正文最前面的一段，图片取的是识别出的正文中间和前后的图片

图片url方面尽量用jpg后缀，url尽量规整，资源名不要太短，不要出现一些垃圾词，比如ad,icon,logo

大小方面，尽量指定图片大小，并且大小尽量适中，不要太大或太小，或长宽比例差别太大

位置方面，图片的位置尽量在正文中，上下都有一段文本最好
 
SoSo抽取策略缺陷：

自定义摘要尚可以通过优化 meta，可是如果要自定义图片，根据以上策略，可操作性非常差，测试流程长。
 
解决方案：

1. 推动 SoSo 优化抽取策略，比如可以在页面头部，通过自定义meta信息，让需要自定义图片的页面进行声明和自定义。

    难点：涉及到 开平 社平等其它业务，修改需要他们介入，流程周期较长，但相对铺量成本较低。
 
2. 推动 QQ 替换使用新的 url 信息抽取服务，比如使用互联提供新的服务或QQ开发图片自定接口，这块产品 yugi 已和 QQ 侧沟通，可能后续采用此方案的可能性较大。

    缺点：需求等 QQ 客户端铺量

经过PaPa活动中使用分享组件的经历，做一点补充：

1. Soso的抓取规则里明确不抓取display：none的img标签，即抓出的图片一定是页面上“可视”的图片。因此，对于部分业务想使用特别设计的分享图，但又要求不在页面上出现，目前是无法做到的。

2. 分享组件页面展示图片时，是使用社平提供的cgi，其在soso抓取结果之上包装了逻辑（不知做了什么排序，黑盒），导致可能客户端展现与分享时抓出的图片不一致。从这点上看，目前弄清社平cgi与soso抓取结果之间的差异是非常重要的。


定向分享蛋疼的bug：

1. 分享内容summary中不可以带回车换行符

    /*
     * 知道我这里为什么这么写吗？
     * 如果你是一个合格的程序员，看到\u000d\u000a一定会有触电的感觉
     * 这不就是\r\n吗
     * 有些蛋疼的商家在自己的介绍中加入了回车换行，导致的直接结果呢就是： cgi referrer校验通不过
     * 为啥通不过， cgi至今没有给我一个合理的解释
     *
     * maple说
     * %0d%0a
     * 貌似referer不能有这个
     * 不知谁加的代码
     *
     * 那怎么兼容呢？
     *
     * 想出了下边这种巨丑无比的兼容方案，有更好的方案联系materliu
     */
    shareInfo.summary = shareInfo.summary.split(/\u000d\u000a/);

    ........

    var p = {
        url: 'http://cgi.find.qq.com/rich?type=' + source + '&id=' + ID,/*获取URL，可加上来自分享到QQ标识，方便统计*/
        desc: shareInfo.desc || '', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
        title : shareInfo.title || '',/*分享标题(可选)*/
        summary : shareInfo.summary || '',/*分享描述(可选)*/
        pics : shareInfo.pics || '',/*分享图片(可选)*/
        flash : '',/*视频地址(可选)*/
        scale: '400px',    // 表示使用自适应版本的分享窗口
        //commonClient : true, /*客户端嵌入标志*/
        site: 'QQ查找'/*分享来源 (可选) ，如：QQ分享*/
    };

    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }

    window.share2qqIframe.src = "http://connect.qq.com/widget/shareqq/iframe_index.html?" + s.join('&') ;