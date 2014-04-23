---
layout: post
title: 创建群需求README文件
---

## 创建群需求README文件

接口人：
前台： materliu chriscai

pdm : vivianjiang


#### 跑起来 详细步骤参见本页 编译发布 大模块

* 本地访问方法：

    在项目目录下执行 grunt dev 会生成一个dev目录

    直接使用fiddler代理，将http://admin.qun.qq.com/create/ 的请求指向本地项目目录 E:\workspace\idea\admin.qun.qq.com\pc_create\dev\ 。

* 测试环境及IP

    使用nohost, [具体配置见配置系统](http://imweb.server.com/im_nohost_mgr/index.php/apps/get/99)   (系统申请权限找littenli)

* 采用grunt构建

    请继续往下看

* 浏览器中访问地址

    http://admin.qun.qq.com/create/index.html

### 编译发布

### 一、准备

#### 1. 检出

check out本目录 svn 地址：[整个大项目 http://tc-svn.tencent.com/basic/basic_imweb_rep/qun_proj/trunk/htdocs/admin.qun.qq.com](http://tc-svn.tencent.com/basic/basic_imweb_rep/qun_proj/trunk/htdocs/admin.qun.qq.com)  PC创建群的项目在其中的pc_create目录

#### 2. 安装npm依赖包

确保本机已安装nodejs和npm, 然后在根目录运行

```
npm install
```

#### 3. 准备完毕!


### 二、编译

#### 两条主要的编译命令：

#####1 编译web发布资源:
```
grunt dist
```

#####2 编译本地化资源
```
grunt ct:o
```

#####3 编译本地化调试版本
```
grunt dev
```

群的同学写了一篇相关文章可以参考[访问](http://blog.server.com/generator-imweb-docs/index.html)

#### 注意点

#####1. 每次提测前,需要确认发布的版本号, 并保证资源的url路径以及版本号在如下三个地方正确、一致:

#####1) 本地: `proj-conf.json`

决定了html页面里的cdn资源引用路径

#####2) 本地: `proj-task/proj/proj-task.js`

决定了本地化资源的js/css资源,能够按照web发布系统相同的版本号方式放置在正确的路径下

#####3) web发布系统: `添加前台发布` - `JS版本` `CSS版本`

决定了web发布系统如何将svn拉下来的web发布资源压缩后放在对应的版本号目录下


####4. 关于本地化:

1) 本地化在需要部署灰度的情况下, 谨慎使用(准备在群文件里用一个无功能变更的版本灰度验证以后再使用)

2) 本地化时, 手动发布`dist-client-local`目录下的zip包


### 三、Web测试环境部署

群文件项目目前暂时只有一个测试环境(TODO:增加测试环境)

说一下发布流程， 首先登录进 [Svn代码提测发布系统](http://svn.server.com/index.php/Publish/index)

1. 点击项目发布

2. 搜索处 搜索 群管理-创建群

3. 会出来几个结果， 我们发布测试环境或者对外的正式环境，选择 `群管理-创建群` 点击查看

4. 在查看页面 点击 添加前台发布

5. 测试环境的话可以考虑把 是否压缩   是否压缩图片文件  的选项去掉 其他任何东西都不需要修改

6. js版本， css版本一定要填， 保证跟proj-conf.json 文件中的配置一样

6. 点击添加

7. 添加之后跳转到了 进行中页面（尾部）  在进行中处点击查看， 查看发布情况

8. 提测完成之后会有几个选项  通知测试  发布  查看  重发

9. 如果提示编译js出错， 要看清楚是warning 还是 error， 如果是warning的话直接不要管他了

9. 如果我们下一步要走到发布流程的话， 点击发布进入发布流程页面， 在这里选择 WEB发布系统

10. 点击确认， 进入 WEB发布系统

### 四、WEB发布

1. 群的同学给到了一个word文件， [参见](/attachments/2014-04-22-群web发布系统.doc)

2. 直接访问地址： http://10.137.10.21/release/index

3. 发完之后无需发布zip包， 因为内嵌群创建并没有实现本地化的zip流程

