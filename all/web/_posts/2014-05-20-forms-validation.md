---
layout: post
title: 如何在不提交form的情况下使用浏览器自带的html5的错误提示消息
---
    
## 如何在不提交form的情况下使用浏览器自带的html5的错误提示消息

具体的示例代码可以参考我 testcase 项目中 http://localhost:9000/form-user-interface.html 中 doCustomValidate 中的写法。

说透了就是： 如果想触发浏览器自带的html5错误消息提示，就必须触发form的提交事件，

To check whether a certain field is valid, use:

```
$('#myField')[0].checkValidity() // returns true/false
```

To check if the form is valid, use:

```
$('#myForm')[0].checkValidity() // returns true/false
```

If you want to display the native error messages that some browsers have (such as Chrome), unfortunately the only way to do that is by submitting the form, like this:

```
var $myForm = $('#myForm')
if (!$myForm[0].checkValidity()) {
  // If the form is invalid, submit it. The form won't actually submit;
  // this will just cause the browser to display the native HTML5 error messages.
  $myForm.submit()
}
```
