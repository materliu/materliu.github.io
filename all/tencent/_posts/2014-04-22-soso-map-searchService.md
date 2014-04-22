---
layout: post
title: 搜搜地图根据指定地点搜索附近楼宇信息
---

## 搜搜地图根据指定地点搜索附近楼宇信息

soso js api1.0 版本中有一个对象qq.maps.SearchService 类

SearchService(opts?:SearchServiceOptions)

根据你传入的keyword， 经纬度等信息来搜索当前位置附近的地址信息，比如腾大附近的万利达大厦，大族大厦等

keyword的值有很多种情况，比如： 商务楼宇 '综合商场', '娱乐休闲', '运动健身', '旅游景点' '综合医院', '文化场馆', '教育学校' '美食'

等等， 具体的参数呢我找soso的同学要了一个内部表格，[大家可以参考](/attachments/2014-04-22-SOSO标准分类编码表_v1_1_1.xlsx)

