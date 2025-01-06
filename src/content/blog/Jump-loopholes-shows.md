---
title: 浅释跳转漏洞
description: 如题，这个漏洞原理的确很浅，所以只能浅释了。构造这种漏洞并不需要什么技术含量，本来不想提出来的。不过CSDN上面的下载资源分已经用完了，又懒得再申请一个帐号来下载资源，碰巧发现了一个CSDN的跳转漏洞，就写出来赚点资源分吧。跳转漏洞的形成很多网站的很多功能只对注册用户或部分vip用户开发，当没有登录的用户试图使用这个功能时，网站程序会自动跳转到登录的页面，待登录验证成功后再跳转会前一步的操作。这里面如果没有对参数做签名的话就容易产生跳转漏洞了。
date: 2008-03-29 09:48:56
category: 技术文章
tags: ['漏洞信息', '技术类']
post_id: 428
alias: Jump-loopholes-shows
ViewNums: 5015
---

来源：T.E.D on Technology

如题，这个[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)原理的确很浅，所以只能浅释了。构造这种漏洞并不需要什么[技术](/tags/%E6%8A%80%E6%9C%AF%E7%B1%BB)含量，本来不想提出来的。不过[CSDN](http://www.csdn.net/)上面的[下载](/tags/%E4%B8%8B%E8%BD%BDDownload)资源分已经用完了，又懒得再申请一个帐号来下载资源，碰巧发现了一个CSDN的跳转漏洞，就写出来赚点资源分吧。

**跳转漏洞的形成**

很多网站的很多功能只对注册用户或部分vip用户开发，当没有登录的用户试图使用这个功能时，网站程序会自动跳转到登录的页面，待登录验证成功后再跳转会前一步的操作。这里面如果没有对参数做签名的话就容易产生跳转漏洞了。

以CSDN为例，如果要下载资源的话，随便下载一个文档什么的，如果没有登录就会看到一下提示：
![](http://pic.yupoo.com/sunlei/75285530d524/rcieukmm.jpg)
图1 CSDN提示登录

点击登录，就会跳转到如下一个url：

[http://passport.csdn.net/UserLogin.aspx?from=http://d.download.csdn.net/down/357656/chenxhcc](http://passport.csdn.net/UserLogin.aspx?from=http://d.download.csdn.net/down/357656/chenxhcc "http://passport.csdn.net/UserLogin.aspx?from=http://d.download.csdn.net/down/357656/chenxhcc")

当你输入你的帐号、密码之后就会自动跳转到上面url中的：

[http://d.download.csdn.net/down/357656/chenxhcc](http://d.download.csdn.net/down/357656/chenxhcc "http://d.download.csdn.net/down/357656/chenxhcc")

如果把上面的回调url修改一下，也是可以成功的。比如：

[http://passport.csdn.net/UserLogin.aspx?from=http://www.baidu.com](http://passport.csdn.net/UserLogin.aspx?from=http://www.baidu.com "http://passport.csdn.net/UserLogin.aspx?from=http://www.baidu.com")

也是会顺利的跳转到百度的。
![](http://pic.yupoo.com/sunlei/03231530d527/20rb21u8.jpg)
图2 提示跳转到百度

**跳转漏洞的危害**

如果一个电子商务的网址（比如说：<http://www.some_site.com>）存在着这样的漏洞的话将会造成很严重的危机的，最直接简单的危害就是构造一个恶意网站(比如说是：[http://212.20.43.155/login.php](http://212.20.43.155/login.php "http://212.20.43.155/login.php"))，页面跟该电子商务网站的因密码错误而导致登录失败，得重新登录的页面一样。然后攻击者就可以在各个论坛发帖子说：XX网站网上购物返回30%的现金啊，详情点击：

[http://www.some_site.com/UserLogin.php?from=](http://www.some_site.com/UserLogin.php?from= "http://www.some_site.com/UserLogin.php?from=") http://212.20.43.155/login.php

当用户在官方网站登录过一次后就会跳转到恶意的网站，而这个恶意网站却跟官方网站一样，而且要求重新登录，相信不少用户会上当把自己的帐号和密码重新输入一次的（当然，CSDN的用户都是比较聪明的，估计不会上这样的当的）。

**跳转漏洞可能引发的XSS漏洞**

有些网站考虑有些浏览器可能不支持自动跳转，于是在用户输入完帐号和密码后会有类似提示：

…..将会跳转到前一个页面 [http://www.pre_site.com](http://www.pre_site.com/ "http://www.pre_site.com") 如果你的浏览器不支持自动跳转，请点击此……

如果没有对那个页面的网址进行转义输出的话就可能产生XSS漏洞，以CSDN为例：

首先把需要回调的url改为：’’;!—“<XSS>={()}

跳转页面如下：
![](http://pic.yupoo.com/sunlei/15452530d52a/8ha4ge36.jpg)
图3 CSDN跳转页面

查看页面源代码：
![](http://pic.yupoo.com/sunlei/35346530d52b/g4b36jlx.jpg)
图4 CSDN漏洞源码

观察发现一共有4处出现测试字符串，其中一个没做过滤。于是轻易的可以构造弹出框的XSS注入语句，观察发现成功。
![](http://pic.yupoo.com/sunlei/49677530d52f/dz4xj12p.jpg)
图5 CSDN弹出框

**漏洞预防**

由于在我的前一篇介绍搜索框XSS漏洞的文章中已经简单的介绍过怎么预防XSS漏洞了，所以[XSS](/tags/%E8%B7%A8%E7%AB%99)漏洞的预防在这里就不重复了，这里只讲述跳转漏洞预防。

这里以一个抽象的例子的来说明怎么预防跳转漏洞。

比如有个博客社区，一共普通用户点击社区首页的写博客，调用write_blog.php，其一般逻辑一般先检验登录，如果校验成功则继续，如果不成功则跳转到登录页面user_login.php，当用户在user_login.php正确的输入自己的帐号、密码后就会自动跳转到前一个页面。user_login.php之所以能够跳转到write_blog.php而不会跳转到 download.php往往需要在调用user_login.php的时候给他传递回调url作为参数。例如CSDN是：

[http://passport.csdn.net/UserLogin.aspx?from=http://d.download.csdn.net/down/357656/chenxhcc](http://passport.csdn.net/UserLogin.aspx?from=http://d.download.csdn.net/down/357656/chenxhcc "http://passport.csdn.net/UserLogin.aspx?from=http://d.download.csdn.net/down/357656/chenxhcc")

正如前文所说，单单传递一个回调url作为参数是不安全的，这里需要一个机制保证回调url不被修改，最简单的方法就是增加一个参数签名。比如可以在write_blog.php和user_login.php之间约定一个key，然后对回调的url根据key进行加密，产生一个checksum作为校验码。这样就可以保证回调url不被篡改了。当然，也可以约定一些接口，比如site_id=1时表示写博客，site_id=2表示下载

