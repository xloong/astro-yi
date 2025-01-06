---
title: Radmin3.1服务端破解免安装精简版
description:
date: 2007-12-28 12:38:59
category: 安全工具
tags: ['木马', '远程控制', '软件']
post_id: 308
alias: Radmin-3.1-server-crack-nosetup
ViewNums: 15490
---

from:[鬼仔](http://www.huaidan.org/blog)

鬼仔注：以前发过 [Radmin 3.0 Remote Control 英文破解版](http://www.huaidan.org/blog/article.asp?id=1296 "http://www.huaidan.org/blog/article.asp?id=1296") 。这次发个3.1的
没赢政天下论坛的帐号的话，附件是下载不了的，所以我放到了网盘上了。

**[点此进入下载页面](/blog/download.asp?id=34**

提前说明下，RADMIN的服务器端和DLL什么的现在会被查杀，不要说我绑马什么的，不懂的不要下。
有帐号的这里下载：[http://bbs.winzheng.com/viewthread.php?tid=1545780&extra=page%3D2&page=1](http://bbs.winzheng.com/viewthread.php?tid=1545780&extra=page%3D2&page=1 "http://bbs.winzheng.com/viewthread.php?tid=1545780&extra=page%3D2&page=1")

作者：qjldw
来源：赢政天下论坛

Radmin (Remote Administrator) 是一款远程控制软件，可以远程管理公司或个人计算机，实现远程办公。可以进行完全控制、屏幕监视、文件管理、远程DOS操作等功能。操作简单，容易上手，只需要被控制主机执行服务端，安装服务，设置好连接端口和密码，您就可以利用控制端进行远程控制。
　　软件特点：
　　1、运行速度快，在10Mbps局域网的测试中，它比流行的VNC要快上150倍，也超过了PcAnywhere。
　　2、Radmin支持被控端以服务的方式运行、支持多个连接和IP过滤（即允许特定的IP控制远端机器）、个性化的文件互传、远程关机、支持高分辨率模式、基于 Windows NT 的安全支持及密码保护以及提供日志文件支持等。
　　3、在安全性方面，Radmin支持 Windows NT/2000 用户级安全特性，您可以将远程控制的权限授予特定的用户或者用户组，Radmin将以加密的模式工作，所有的数据（包括屏幕影像、鼠标和键盘的移动）都使用128位强加密算法加密；服务器端会将所有操作写进日志文件，以便于事后查询，服务器端有IP过滤表，对IP过滤表以外的控制请求将不予响应。
　　4、与PcAnywhere不同，Radmin目前只支持TCP/IP协议，不过没有关系，TCP/IP是目前网络应用中最流行的协议，应用十分广泛。
　　5、程序体积小巧，并且安装简单、配置容易，安装程序大小为1.2MB，但其具备了所有这类软件的常用功能。
　　应用环境
　　1、Radmin常用于远程教育、培训和演示活动中：Radmin服务端支持并发的多连接，这就意味着，多台控制机可以同时跟踪被控计算机的屏幕。这样，无需您亲自到场，培训和演示的环境就可以搭建完成，还节省了购买投影机费用，真是一举两得。
　　2、网络管理功能：有了Radmin，网络管理员的工作会变得轻松许多，笔者管理一个拥有30台客户端的小型网络，以前总为应用程序的升级和客户端的配置变更而伤透脑筋。使用Radmin之后，坐在办公室里就可以将这些工作轻松完成，还能够不用坐在机房内就可以监控机房主机的运行，真是方便极了。
　　3、技术的支持：同时不要忘了Radmin不仅可以运行在局域网内，TCP/IP协议还具有全球通用性。如果客户电脑的软件配置出了问题，上门服务既费时间又费钱，如果需要紧急处理，有时不能及时赶到。有了Radmin这些问题就会迎刃而解了，只要客户启动Radmin服务，通过Internet技术支持人员就会迅速来到客户身边，远程解决客户电脑的问题了。

Radmin Viewer 3.0.0.5 同时支持Radmin Server 2.x 和Radmin Server 3.x。所以大家只要最新版的这个了。不用2.x的那个了。
另外：Radmin影子版3.2管理端实际是Radmin3.0beta版。与正式版不兼容。而且影子版3.2中带的服务端是RServer2.1版，不是2.2版，也不是3.0beta版
radmin 3.0解决了2.2以前和windows终端登入的问题(XP/2003中启用快速用户切换) 早期登入3389再RADMIN连接屏幕出不来了。
屏幕也支持鼠标滚轮了，速度很大提高, 资源占用变小了, 多了个进程。。。赞啊~~~
小巧精干没得说。其他远程控制软件不是庞大就是速度跟不上底带宽下黑屏。。。。
另外：真正用Radmin进行远程管理的用户，请不要用Radmin2.x版了（包括影子版3.2），因为现在2.x出来一种HASH破解方法，十分可恶。请大家升级为3.0.0.5版的服务端。
注意：1、破解文件：R3GOD.DLL可能被报病毒。已经测试瑞星2008会查杀。
2、破解后,license information 还是显示：There is no license
但是不要担心，没有30天的限制了,测试期已过，仍可以工作！
本版本保留了新版本的穿透Windows防火墙、兼容性更好的radmin虚拟显卡驱动，其他的聊天功能什么的全部去掉！（个人觉得没什么用），服务器端无汉化，其实也没必要汉化！带Radmin viewer3.0汉化版。
使用说明：解包后运行install.cmd，在弹出设置界面中选择startup mode,选择automatic,点确定。然后点Permissions建立用户。如果使用radmin内置用户，那么请选择，radmin security，点右面的Permissions，建立用户名、密码以及选择下面需要开放的权限！如果使用系统内的用户，你可以选择windows nt security,点右面的Permissions选择用户以及权限！最后按exit，系统服务将启动。关于删除，请运行uninstall.cmd，然后到设备管理器里面的显示卡里面去删除radmin mirror driver v3。
另外说明：转载请说明作者，谢谢！！
![](http://photo15.yupoo.com/20071224/170209_1462388425.jpg)

更新：[Radmin 3.2 简体中文绿色完美者版本](/blog/radmin-32-jianti-zhongwen-lvse-wanmeizhe)

