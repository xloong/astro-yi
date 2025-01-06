---
title: 利用Gmail插件Gmail Romote Command(GRC)远程控制电脑
description: 什么是GmailRomoteCommand(GRC)？GRC是一款Gmail的插件。功能：1、定时检测Gmail邮箱，这里是1分钟一次2、如果检测到特定邮件头的邮件则可在本地计算机执行某条命令我们看看GmailRomoteCommand(GRC)的用法：
date: 2008-04-13 08:46:50
category: 安全工具
tags: ['远程控制', '工具共享']
post_id: 449
alias: GRC-Gmail-Romote-Command
ViewNums: 5684
---

什么是Gmail Romote Command(GRC)？GRC是一款Gmail的插件。功能：
1、定时检测Gmail邮箱，这里是1分钟一次
2、如果检测到特定邮件头的邮件则可在本地计算机执行某条命令
我们看看Gmail Romote Command(GRC)的用法：
![](http://www.youxia.org/upload/2008/4/200804112103128304.gif)
输入你的Gmail用户名和密码，点Sign in，登陆。
![](http://www.youxia.org/upload/2008/4/200804112104006036.gif)
设置界面，代码和HTML或者UBB有相似之处
Subject Tag Left - 标签的左侧，可以理解成开始标记
Subject Tag Right - 标签的右侧,相当于HTML或UBB的结束标记
Title - 代码的主体部分，可自定义。
Subject Shutdown - 关机主题，如果在下面的Title写入shutdown，则标记出现这个就关机
Windows XP的Path是设置[Windows](/tags/Windows)的系统路径
下面，我们举个例子，打开你的电子邮件系统，写一封邮件：
![](http://www.youxia.org/upload/2008/4/200804112104151631.gif)
主题写入 [open]c:windowssystem32calc.exe[/open] 就可以了，正文无所谓
发送了这个邮件之后，最多等1分钟，你的计算机就会弹出计算器了！
简单分析了下Gmail Romote Command(GRC)，程序用VB写的
写一个事件，1分钟扫荡一次Gmail，如果邮件主题符合某个条件则触发本机事件
实际上和[木马](http://www.virus-info.cn/virus/Trojan.html)差不多，只是利用了Gmail做载体而已……

补充一下：
有朋友说，你开GRC的时候，我发个邮件给你，写上：
[open]format c: /Q/X[/open]
这样你不就挂了？……
是的，如果你不修改上面说的Title的话
你可以修改你计算机的[open]为[zbc_open]或者其它你喜欢的代码都可以
这样就不会让别人也通过Gmail操作你的计算机了！

点击进入下载页：[Gmail插件Gmail Romote Command(GRC)下载 GRC.rar](/blog/download.asp?id=68

作者：网路游侠 <http://www.youxia.org>

