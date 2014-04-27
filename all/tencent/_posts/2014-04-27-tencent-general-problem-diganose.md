---
layout: post
title: 腾讯前端常见问题诊断
---
    
## 腾讯前端常见问题诊断

1. 财付通在IE6下不可用， 主要是工行的问题， 无解

2. 获取用户相关信息的接口失败， 需要申请oidb的特殊权限才可进行调用， 需要申请的字段包括： 需要oidb白名单的字段：nick, qage, age, qq-level, lnick, gender, birthday, shengxiao, blood, constel(星座)

3. IE下点击提交页面无响应， 应用页面是否存在跳top.location 或者 parent.location的操作

4. openid, openkey

    OpenID 是一个由字母和数字组成的字符串。是腾讯用户在第三方应用中的唯一标识。在一个第三方应用中 OpenID 唯一对应一个腾讯用户。OpenID 也是腾讯公司很多业务都使用的用户标识，且在各业务间是通用的，开发者可以一次获取，然后在各个业务中使用，为用户提供了方便。

    第三方不能通过 OpenID 得到反向计算出腾讯用户的 QQ 号码、邮箱帐号或微博用户名。

    OpenKey 是与 OpenID 对应的用户 key，是验证 OpenID 身份的验证密钥，大多数 API 的访问，都需要同时具备 OpenID 和 OpenKey 的信息，其有效期为 2 小时。

