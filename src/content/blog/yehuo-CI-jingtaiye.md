---
title: 跟夜火学CodeIgniter - 发布静态页
description: 经过上一节的学习，大家是不是把CodeIgniter都安装好了？这一节我们来看看如何修改或发布一个静态页面。这里所说的静态页，不是纯粹意义上的html静态页，而是不读取数据库的，直接从视图加载的静态内容。  修改示例页面回到上一节讲到的示例页面，我们先从修改示例页面开始。现在应该是welcome默认页面内容（如下图）。现在我们先来尝试，看如何修改这个页面。我们来到
date: 2014-03-17 11:36:27
category: 教程与电子书
tags: ['CodeIgniter', 'PHP']
post_id: 1511
alias: yehuo-CI-jingtaiye
ViewNums: 2990
---

经过[上一节](/blog/yehuo-ci-anzhuang)的学习，大家是不是把[CodeIgniter都安装](/blog/yehuo-ci-anzhuang)好了？这一节我们来看看如何修改或发布一个静态页面。这里所说的静态页，不是纯粹意义上的html静态页，而是不读取数据库的，直接从视图加载的静态内容。

### 修改示例页面

回到[上一节](/blog/yehuo-ci-anzhuang)讲到的示例页面，我们先从修改示例页面开始。现在应该是welcome默认页面内容（如下图）。

[![CodeIgniter 默认页](/upload/CI-01-01.jpg)](/blog/yehuo-ci-anzhuang)

现在我们先来尝试，看如何修改这个页面。

我们来到application/view目录，所有的视图文件都放在这里，如果不理解什么是视图，可以先简单的理解成模板。有一个名为welcome_message.php的视图文件，用编辑器打开，可以看到里面的内容就是我们上图看到的内容，先在里面改一下看看到底是不是，在H1标签里的“Welcome to CodeIgniter!”的最后增加内容xloong，然后刷新刚才的页面，看看是不是被修改了？

![](/upload/CI-03-01.jpg)

好，我们已经可以修改默认首页内容了，但是对于有强迫症的我来说，http://localhost/index.php/welcome 这样url显示welcome不好，我想让他最后显示home或者index，要怎么修改呢？

### 修改访问的url

我们来到application/controller目录，看到控制器welcome.php没，把他修改成我们需要的url名，就改为home好了，别急着刷新，只修改文件名还不行，修改文件内容，把如下代码：
```php
class Welcome extends CI_Controller
```
修改为：
```php
class Home extends CI_Controller
```
这里需要注意：class后面跟着的，要和文件名一样，且首字母大写。

其他可以根据需要修改，然后刷新看看，恩？是不是报404错误了？没错，因为url已经改了，所以我们要手动修改下访问的url，最后改为home，然后访问看看，页面是不是出来了？

这里如果想要访问网站根目录直接显示现在设置的home页，需要更改 application/config/routes.php 里的
```php
$route['default_controller'] = "welcome";
```
改为
```php
$route['default_controller'] = "home";
```
就可以了。

### 自定义页面

如果上面2个知识你都理解的话，就可以实现完全的自定义页面url和内容了，是不是挺简单？你说框架不过如此，明明一个简单的静态页面，还要折腾来折腾去的弄2个文件，太麻烦了？这么做是有意义的，框架的魅力还没开始展现出来那，不要心急，循序渐进。

tips：这里要知道，url的显示方式其实应该是带index的，如上面的例子，应该是/index.php/home/index，但是一般省略掉最后的index也是可以访问的，因为默认会载入index方法。

官方手册上更详细的内容：

[加载静态内容](http://codeigniter.org.cn/user_guide/tutorial/static_pages.html)

[Codeigniter URL](http://codeigniter.org.cn/user_guide/general/urls.html)

[控制器](http://codeigniter.org.cn/user_guide/general/controllers.html)

[视图](http://codeigniter.org.cn/user_guide/general/views.html)

上一节：[CodeIgniter的安装与配置](/blog/yehuo-ci-anzhuang)   下一节：[CodeIgniter的数据库增删改查](/blog/yehuo-ci-shujukuzengshangaicha)

