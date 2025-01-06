---
title: Linux屏幕录像的5种方法
description: Linux下的屏幕录制软件，夜火我只知道Wink这一个，今天在CB看到这篇文章，转来给大家看看，希望对大家有用，也帮自己积累些东西，(原文地址)1.Istanbul:Istanbul是目前比较广泛使用的录像软件之一.您可以点击这里下载Istanbul.DebianLINUX和FedoraLINUX的用户可以从repo(Fedora的主要更新源)安装改软件.Istanbul的操作界面非常简单,当您第一次启动Istanbul时,在系统桌面面板上会出现一个红色的圆形小按钮,如图1所示
date: 2008-06-26 11:19:49
category: 操作系统
tags: ['Linux', '软件']
post_id: 534
alias: 5-way-screen-Linux-desktop
ViewNums: 3899
---

[Linux](/tags/Linux)下的屏幕录制软件，[夜火](/blog/)我只知道**Wink**这一个，今天在CB看到这篇文章，转来给大家看看，希望对大家有用，也帮自己积累些东西，([原文地址](http://www.linuxhaxor.net/2008/05/20/5-ways-to-screencast-your-linux-desktop/))

**1.Istanbul:**Istanbul是目前比较广泛使用的录像软件之一.您可以[点击这里](/blog/download.asp?id=104下载Istanbul.DebianLINUX和FedoraLINUX的用户可以从repo(Fedora的主要更新源)安装改软件.Istanbul的操作界面非常简单,当您第一次启动Istanbul时,在系统桌面面板上会出现一个红色的圆形小按钮,如图1所示:

![](http://lh4.ggpht.com/Sonny.zhang87/SGEDIZQZYlI/AAAAAAAAAgI/oQFoo4GOiu8/s800/1.jpg)
右键单击该按钮,会出现操作选单,如图2所示:

![](http://lh4.ggpht.com/Sonny.zhang87/SGEDIarRoTI/AAAAAAAAAgQ/9bSeVp8XIyA/s800/2.jpg)
您可以选择录制窗口,或者是用鼠标选择录像区域,如果要停止录像,您可以左键单击该按钮,并且它会提示您保存所录得的文件,如图3,4所示:

![](http://lh4.ggpht.com/Sonny.zhang87/SGEDIorci4I/AAAAAAAAAgY/6iTjN5EQcFk/s800/3.jpg)

![](http://lh4.ggpht.com/Sonny.zhang87/SGEDIzGnMdI/AAAAAAAAAgg/z1iFCFYbkHg/s800/4.jpg)

提示:在默认情况下Istanbul会把截获的视频以OGG的格式存储.

2.Wink

相对于其他屏幕录像软件而言,Wink可以让您更精确的控制录像的过程,事实上,Wink的录像原理并不同于传统的屏幕录像软件,它是使用每秒钟屏 幕截图的帧数来达到录像的效果的,比如说你设定她每秒钟截取20帧,则一分钟下来,他就会连续的进行屏幕截图1200次左右,然后把这些截图按顺序排放, 构成视屏,这样以来,后期您可以通过修改其中的任何一帧来改变视频的外观.Wink通常把录制的文件保存为ShockWave格式,而这种格式的好处是, 可以被转换任何一种你想要的视频格式.

[点击这里](/blog/download.asp?id=104下载Wink

请注意Wink在以下情况下是不能工作的
—1.[Ubuntu 8.04](/blog/ubuntu-804-lts-download-xiazai)以上的版本;
—2.其他在目录"/usr/lib/"中存在"libexpat.so.1"文件的LINUX发布版本,针对这种情况的解决方案是,重命名 "libexpat.so.0"这个文件,并且这样不会导致系统出现问题,当然了这种做法的缺陷是可能导致其他需要使用该文件的应用程序不能正常工作,一 个一劳永逸的的方案是重新编译受影响的应用程序,或者等待改程序更新版本的发布.

若要开始录像,则从"File"菜单的"New"选项开始,在弹出的对话框中选择录像的尺寸,如图5所示:

![](http://lh3.ggpht.com/Sonny.zhang87/SGEDIyDS9iI/AAAAAAAAAgo/m3FqPRUtttY/s800/5.jpg)

细心的你可能会发现,在默认情况下,Wink每秒钟会捕获50帧,如图6所示:

![](http://lh6.ggpht.com/Sonny.zhang87/SGEDQ-Dlb0I/AAAAAAAAAgw/ACyzN7uxPms/s800/6.jpg)
当您点击"OK"之后,会弹出一个窗口,其中有录制过程中所能用到的快捷键,如图7所示:

![](http://lh6.ggpht.com/Sonny.zhang87/SGEDRM6MsJI/AAAAAAAAAg4/-Bu0tO2uoBU/s800/7.jpg)

单击上图中的"MinimizeToTray",该操作将该程序最小化到系统托盘,相当于[windows](/blog/deepin-litexp-windows-xp-sp3-v62)中的后台运行,右击系统托盘上的图标并选择"StartTimedCapture",就可以开始屏幕录像,如图8所示:

![](http://lh5.ggpht.com/Sonny.zhang87/SGEDRJyX2jI/AAAAAAAAAhA/SrRe5fEpAD8/s800/8.jpg)

如果要停止录像,只需和开始录像一样,在弹出菜单中选择"StopTimedCapture",(在图8中显示为灰色不可用的菜单项),然后会生成录像报告,告诉您当前以捕获的帧数,如图9所示:

![](http://lh6.ggpht.com/Sonny.zhang87/SGEDRA0wC-I/AAAAAAAAAhI/SHydzMXNuq0/s800/9.jpg)
为了得到真正的视频文件,还要对所捕获的图像帧进行转换,具体操作见图10:(点击绿色的小箭头即可)

![](http://lh3.ggpht.com/Sonny.zhang87/SGEDRKpNL6I/AAAAAAAAAhQ/Ily4HwdfyZM/s800/10.jpg)

转换完成之后,进入保存文件对话框,在其中您可以自定义文件名,文件类型,帧频,如图11所示:

![](http://lh3.ggpht.com/Sonny.zhang87/SGEDcK3xlzI/AAAAAAAAAhY/VcaIKJmnWz0/s800/11.jpg)

3.Xvidcap

Xvidcap是一款轻量型的屏幕录像软件,您可以[点击这里](/blog/download.asp?id=104下载该软件.启动Xvidcap之后,屏幕上会出现一个红色的矩形框,框内即为将要捕获的范围,当然您可以按照您的意愿随意拖动该框的位置可拖放其大小.开始录像的操作更是简单,只需点击图中的红色小按钮,如图12所示:

![](http://lh5.ggpht.com/Sonny.zhang87/SGEDcOuPo2I/AAAAAAAAAhg/e-LrATr-wRA/s800/12.jpg)

.<<其他的一些选项包括:自由选择捕获区域和使捕获区域和软件操作见面不重复>>

注意:如果您所选择的屏幕区域较大,他将会减慢系统的速度.

4.vnc2swf

另一个比较流行但不太方便使用的屏幕录像软件叫做vnc2swf,他的工作原理是通过连接VNC服务器,捕获Session以获取录像, DebianLINUX的用户可以用命令"sudoapt-getinstallpyvnc2swf"安装该软件,[点击这里](/blog/download.asp?id=104下载

软件安装完毕后,开始录像的操作仅仅是在"Terminal终端"输入"vnc2swf-otest.swf-N-Slocalhost:0",系统会出现录像的对话框,如图13所示:

![](http://lh4.ggpht.com/Sonny.zhang87/SGEDcSfZ0iI/AAAAAAAAAho/m-Z2ry90G3A/s800/13.jpg)
更多的相关操作您可以查阅其官方文档.

5.Recordmydesktop

我所要介绍的最后一款:Recordmydesktop也是被广泛使用的以命令行方式运行并且有图形化界面的屏幕录像软件,DebianLINUX 的用户可以用命令"sudoapt-getinstallrecordmydesktopgtk-recordmydesktop"安装该软件,[点此下载](/blog/download.asp?id=104

Recordmydesktop的工作方式和Istanbul很相似,但是他拥有一些Istanbul所没有的特性,并且这些特性具有很好的自我解释性,一般的用户很容易理解并进行相关配置,在这里不再赘述,其操作界面,如图14所示:
![](http://lh4.ggpht.com/Sonny.zhang87/SGEDcce141I/AAAAAAAAAhw/9aPmfB6VX7A/s800/14.jpg)

