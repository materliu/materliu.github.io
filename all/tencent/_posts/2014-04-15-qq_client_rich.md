---
layout: post
title: 2014-04-15-QQ客户端rich化.md
---

## QQ客户端rich化

什么叫做客户端rich化？

当我们把一条链接粘贴到聊天窗口中，聊天窗口中链接下方生成更丰富的预览信息

客户端rich化的条件？

1. url是安全的  安全是从电脑管家拉的信息

2. url位于白名单内  白名单是产品配置的

3. 具备rich化的必须字段

rich化的展现？

1. 客户端本身存在多套展现模板， 这个需要相关开发在后台配置，接口人是：cgi: mapleliang  客户端: liuweiliu  shujianyuan

tencent串是否直接支持rich化？

tencent串并不支持rich化， 现在的做法是tencent串转url, 跟maple约定一个短链地址， 比如： http://find.qq.com/tencent-protocol.html?tencent=tencent://***

客户端聊天窗遇到这个url的时候，会去cgi那里拉取相关信息， cgi会告诉客户端 这条url是打开tencent串的，tencent串的地址是啥，rich的展示应该用什么模板

但要考虑如果客户端rich化失败，那么用户点击这条链接就是直接打开打开url所指向的url地址，http://find.qq.com/tencent-protocol.html?tencent=***

所以一定注意兼容这种情况， 就是直接在浏览器中打开上述地址也要能正常的跳转tencent串。兼容方案就是实现一个中转页。中转页进行302跳转到相应tencent串。


2. 群课程的rich化url http://qun.qq.com/rich/?groupcode=388980287&courseid=4171

3. QQ新闻rich话url http://view.inews.qq.com/q/WXN20140418005761071?refer=mobileqq

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
