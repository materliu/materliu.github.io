---
layout: post
title: chrome地址栏直接打开tencent串
---

## 在chrome地址栏中直接打开tencent串

chrome的默认行为是当你在地址栏中输入一个非http https ftp chrome等开头的信息的时候， chrome会使用默认的搜索引擎发起一个搜索行为， 而腾讯广泛使用的调起客户端的tencent串协议就没办法直接在地址栏中调试了

方法：

1. 打开chrome的setting

2. 找到 search 一项

3. manage

4. 在other search engines 添加一个

    * add a new search engine  输入 no search
    * keyword                  输入 null
    * url with %s in           输入http://%s

5. 把新添加的项设为默认search engine即可
