---
title: HTTP 500 - 内部服务器错误 解决方法
description: 在学校调试asp程序，或者服务器课上配置IIS，有时候就会碰到这该死的“HTTP500-内部服务器错误”，怎么都搞不定，让夜火我好是火大，刚好在AK那看到这个HTTP500-内部服务器错误解决方法，转来记录之：培训销售人员安装asp.net运行环境，真是各种情况都遇到了，IIS安装完成，一运行出现“HTTP500-内部服务器错误”，网上找了一圈，处理方法那个叫复杂，在研究完复杂方法之后，发现只要三步就可以解决问题了。
date: 2009-07-02 10:35:17
category: 技术文章
tags: ['技术类', '技巧']
post_id: 905
alias: HTTP-500-Internal-Server-Error
ViewNums: 7955
---

在学校调试asp程序，或者服务器课上配置IIS，有时候就会碰到这该死的“[HTTP 500 - 内部服务器错误](/blog/http-500-internal-server-error)”，怎么都搞不定，让夜火我好是火大，刚好在[AK](http://amxking.bokee.com/)那看到这个[HTTP 500 - 内部服务器错误 解决方法](/blog/http-500-internal-server-error)，转来记录之：

培训销售人员安装asp.net运行环境，真是各种情况都遇到了，IIS安装完成，一运行出现“[HTTP 500 - 内部服务器错误](/blog/http-500-internal-server-error)”，网上找了一圈，处理方法那个叫复杂，在研究完复杂方法之后，发现只要三步就可以解决问题了。

**1. 运行：regsvr32 %windir%/system32/vbscript.dll （其实这一步也可以省，确保万一，还是执行吧）
2. 运行：msdtc -resetlog
3. 重新安装IIS**

注释：
1. 微软只随IIS5提供了一个管理脚本adsutil.vbs，这个脚本位于C:inetpubadminscripts子目录下，首先注册vbscript.dll。
2. msdtc.exe是微软分布式传输协调程序。该进程调用系统Microsoft Personal Web Server和Microsoft SQL Server，该服务用于管理多个服务器，必须确保该服务正常启动。
（1）控制面板->管理工具->组件服务
（2）找到“组件服务”->“计算机”->“我的电脑”->“COM 应用程序”->“IIS Out-Of-Process Pooled Applications”

[![HTTP 500 - 内部服务器错误 解决方法](http://images.cnblogs.com/cnblogs_com/wf225/博客用图/zjfw.jpg)](/blog/http-500-internal-server-error)

3. 如果找不到“IIS Out-Of-Process Pooled Applications”，或在点击不能打开“COM 应用程序”，执行完“msdtc -resetlog”后，重新安装IIS即可。

