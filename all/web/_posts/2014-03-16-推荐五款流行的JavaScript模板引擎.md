---
layout: post
title: 2014-03-16-推荐五款流行的JavaScript模板引擎.md
---

## 推荐五款流行的JavaScript模板引擎
### 声明：本文转自：外文[《The top 5 JavaScript templating engines》][1]

当你创建JavaScript应用时，你必然会用到JavaScript模板。当对HTML进行更新时，你可使用模板来代替库（如jQuery），使用模板可以大大简化你的代码。该文将例举当前较流行的一些模板库。

1.[Mustache][2]
![mustache](/images/2014-03-16-web-templates-mustache.jpg)

Mustache通常被称为JavaScript模板的基础。另一个流行的解决方案Hanldebars实际上就是基于Mustache构建而成的。这并不意味着Mustache是一个不好的模板解决方案。下面例举一例：

<pre class="brush: js">
Mustache.render("Hello, {{name}}", { name: "Jack" });
// 返回： Hello, Jack
</pre>

一旦在页面中包含了Mustache，你就可以访问全局对象“Mustache”。你可使用其中最主要的方法“render”，它包含两个参数。首个参数是实际的模板，第二个参数则为需要传入的参数值。

上例中，你可以看见“{{name}}”。其中的“{{}}”实际上为Mustache的语法，表示一个占位符。当Mustache对其进行编译时，它将在传入的对像中寻找“name”属性，并用该属性的值（该例中为“Jack”）来代替“{{name}}”。

在这里，模板只为一个字符串，但如果你有一个更复杂的模板，该方法可能就不适用了。通常的解决方案是将模板放在“script”标签中：

<pre class="brush: js">
var temp = $("#template").html();
Mustache.render(temp { name: "Jack" });
// 返回： <p>Hello, Jack</p>
</pre>
给“script”一个浏览器无法理解的“type”属性，浏览器就会忽略该Script，不将它作为JavaScript，也不会执行它。

你也可在模板中使用循环，如下面这个模板：
<pre class="brush: js">
{{#people}}
  {{name}}
{{/people}}
</pre>
传递数据：
<pre class="brush: js">
{ people: [ { name: "Jack" }, { name: "Fred" } ] }
</pre>
你将得到“JackFred”字符串。

2. [Underscore Templates][3]

......
详细信息参考 原文内容
在我们的项目中，我们重点使用了jade和handlebars， 请关注另外两篇博文
2014/03/17/在项目中使用预编译jade模板.html
2014/03/17/在项目中使用预编译handlebars模板.html


[1]:http://www.creativebloq.com/web-design/templating-engines-9134396
[2]:https://github.com/janl/mustache.js
[3]:http://underscorejs.org/

