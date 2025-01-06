---
title: 命令行下一种新的加帐号的方法
description: 今天研究了一下用户控制面板文件nusrmgr.cpl，发现调用的是Shell.Users来加用户，它还同时调用了wscript.shell、Shell.Application、Shell.LocalMachine这三个组件。不过加用户的话，这一个Shell.Users就足够了。那么可能在删掉了net.exe和不用adsi之外，这也可能是一种新的加用户的方法。代码如下：
date: 2009-07-22 10:18:13
category: 技术文章
tags: ['技术类', '脚本Script']
post_id: 918
alias: command-line-add-user
ViewNums: 2338
---

作者：[lcx](http://hi.baidu.com/myvbscript/blog/item/cfc53df58c68a82cbd3109e8.html)

今天研究了一下用户控制面板文件nusrmgr.cpl，发现调用的是Shell.Users来[加用户](/blog/command-line-add-user)，它还同时调用了 wscript.shell、Shell.Application、Shell.LocalMachine这三个组件。不过加用户的话，这一个 Shell.Users就足够了。那么可能在删掉了net.exe和不用adsi之外，这也可能是[一种新的加用户的方法](/blog/command-line-add-user)。

代码如下：

js:

```
var o=new ActiveXObject( "Shell.Users" );z=o.create("test") ;z.changePassword("123456","")z.setting("AccountType")=3;
```

vbs:

```
Set  o=CreateObject( "Shell.Users" )Set z=o.create("test")z.changePassword "123456",""z.setting("AccountType")=3
```
