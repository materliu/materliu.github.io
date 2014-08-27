---
layout: post
title: mysql中long类型的时间转化
---

## mysql中long类型的时间转化

在开放中，有时候为方便将日期时间以long类型(秒钟)存在数据库，这里要查询数据就需要进行转换。 
在mysql中只要使用from_unixtime函数就可以了。 

附mysql的两个转换函数： 

在mysql 数据库中，“2009-09-15 00：00：00”转化为列为长整型的函数： 
select unix_timstamp("2009-09-15 00：00：00")*1000, 
这里要注意，mysql数据库中的长整型，比java中的长整型少了秒后面的毫秒数，所以要乘以1000，这样只有几毫秒之差 
2、在mysql数据库中，“1252999488000”（java中的long型数据）转化为日期： 
select from_unixtime(1252999488); 
注意：要将最后三位去掉
