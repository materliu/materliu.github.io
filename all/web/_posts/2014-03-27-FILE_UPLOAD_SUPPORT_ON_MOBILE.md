---
layout: post
title: 2014-03-27-FILE_UPLOAD_SUPPORT_ON_MOBILE.md
---

```javascript
// Detect file input support
var isFileInputSupported = (function () {
 // Handle devices which falsely report support
 if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
   return false;
 }
 // Create test element
 var el = document.createElement("input");
 el.type = "file";
 return !el.disabled;
})();

// Add 'fileinput' class to html element if supported
if (isFileInputSupported) {
 document.documentElement.className += " fileinput";
}
```

<table cellspacing="0" cellpadding="0">
  <thead>
    <tr>
      <th>
        OS
      </th>
      <th>
        Supported?
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Android 1.0—2.1
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        Android 2.2+
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        Blackberry 1.0—5.0
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        Blackberry 6.0+
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        BB Tablet OS 2.0+
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        Firefox OS 1.0
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        iOS 1.0—5.1.1
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        iOS 6.0+
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        Kindle OS 1.0—3.0
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        Maemo 5.0+
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        Meego 1.2+
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        Symbian 9.1-10.1
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
    <tr>
      <td>
        WebOS 1.0—3.0.5
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        Windows Phone 7.0—8.0
      </td>
      <td style="color:red">
        No
      </td>
    </tr>
    <tr>
      <td>
        Windows RT
      </td>
      <td style="color:green">
        Yes
      </td>
    </tr>
  </tbody>
</table>
