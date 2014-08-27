---
layout: post
title: grunt配置http任务，每次编译好自动发布相关zip包
---

## grunt配置http任务，每次编译好自动发布相关zip包

之前每次编译好，发布之前我们都需要到包管理平台 http://admin.connect.oa.com/index.html 发布一次zip包

频繁操作的成本就会非常高

所以需要在grunt编译好zip包之后就能自动把这条cgi包发出去

让cgi开了相关的cgi接口，参数跟管理后台上的参数保持一致

说说开发过程中遇到的问题：

1. 选型grunt插件， 第一个选定的就是 [grunt-http](https://github.com/johngeorgewright/grunt-http)

2. 我们是form表单数据， 所以需要安装 [form-data](https://github.com/felixge/node-form-data)

3. 为了避免加入cookie数据引入的蛋疼问题， 让cgi去掉了cookie校验

4. form.append('file' ** ) 这里， 我一开始是按照 grunt-http的官方示例里边写的 form.append('file', grunt.file.read(path.join(__dirname, 'images', 'pic.png'))); 这么写是有问题的，因为grunt.file.read是把一个文件按照string的形式读出来，而我们这里上传是以octet-stream的方式，8bit字节流的方式上传，所以这样穿上去后台无法正常解压，所以我采用下边的语句：

    form.append('file', fs.createReadStream('dist/qqcache/qqfind_qun_mobile_' + (TIMESTAMP) + '.zip'), {filename: 'qqfind_qun_mobile_' + (TIMESTAMP) + '.zip', contentType: 'application/octet-stream'});

第三个参数是options， 在options里边指定filename和contentType。

5. 最后嫌参数配置太蛋疼， 直接自己写了一个插件 [grunt-upload-file](https://materliu.github.com/grunt-upload-file)

