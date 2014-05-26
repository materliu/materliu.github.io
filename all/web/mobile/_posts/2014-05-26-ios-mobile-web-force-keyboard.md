---
layout: post
title: ios下强制弹出键盘
---
    
## ios下强制弹出键盘

ios无法使输入框获取焦点, 并弹出键盘的初步结论:

直接原因:

ios为了可用性(无障碍), 以及防止未经用户同意, 擅自弹起键盘的情况, 禁止web中使用脚本弹出键盘

可尝试的解决方案:

1. 将webview的keyboardDisplayRequiresUserAction属性设为"NO", 允许web可不经用户交互(点击), 即可弹出键盘

2. web实现一个"输入"按钮, 用户点击按钮后即可使输入框获取焦点, 弹出键盘
