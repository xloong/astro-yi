---
title: Audacious - Linux下的千千静听
description: 0:关于Audacious:Audacious是一款轻量级的音乐播放器,基于GTK2,这使得其对多语言环境支持更好,Audaicous致力于提升音乐品质,并且支持广泛的音频编码格式.Audacious是大名鼎鼎的BMP(BeepMediaPlayer)的衍生版,后者又是XMMS的衍生版,Audacious的回放引擎要比ubuntu默认的GStreamer强大的多,而且可以通过插件获得更强大的解码/功能.废话不多说,let’sbegin~ <audacious默认界面><最简界面>
date: 2009-06-07 10:28:01
category: 应用软件
tags: ['Audacious', '音乐', 'Linux', '软件', '千千静听']
post_id: 885
alias: Audacious
ViewNums: 6044
---

**0:关于[Audacious](/blog/audacious):**

[Audacious](/blog/audacious) 是一款轻量级的音乐播放器,基于GTK2,这使得其对多语言环境支持更好, Audaicous致力于提升音乐品质,并且支持广泛的音频编码格式.Audacious是大名鼎鼎的BMP(Beep Media Player)的衍生版,后者又是XMMS的衍生版, [Audacious](/blog/audacious)的回放引擎要比ubuntu默认的GStreamer强大的多,而且可以通过插件获得更强大的解码/功能.废话不多说,let’s begin~

[![Audacious - Linux下的千千静听](http://img8.imageshack.us/img8/2750/dtq8qhm79g337jxcxb.jpg)](/blog/audacious)
<audacious默认界面>

[![Linux下的千千静听](http://img15.imageshack.us/img15/9712/dtq8qhm80c5nwn6dfb.png)](/blog/audacious)
<最简界面>

**1:安装Audacious:**

1)Ubuntu 的软件源中一般都有Audacious, 你所需要做的就是打开终端:

[sudo apt-get install audacious] //这里是安装audacious主程序
[sudo apt-get install audacious-plugins audacious-plugins-extra]
//这里是安装audacious的插件/解码器

2)如果你的源里面没有,也可以选择编译安装:

在官网下载源码包:<http://audacious-media-player.org/downloads>
和上面apt-get安装的一样的道理,需要下载两个包包:) ~~
audacious-1.5.1.tgz和audacious-plugins-1.5.1.tgz
下载完成之后解压出来,可以双击解压或者终端 tar -xvvf 压缩包名

3)如果你很熟悉编译安装的流程,可以跳过这里:

终端cd 到你解压出来的目录
特殊情况下需要做这一句: [chmod 755 configure]来给configure文件加可以执行的权限
执行[./configure CFLAGS=-O2]:注意:如果是很少编译软件,可能在这里遇到很多问题,
先确保安装了最基本的编译环境: [sudo apt-get install build-essential]

这里举例说明一个问题:cofigure时遇到:
checking for GLIB… no
configure: error:
Cannot find Glib2! If you are using binary packages based system, check that you
have the corresponding -dev/devel packages installed.

于是可以按照给出的提示,在新利得里面搜索glib2,或者[aptitude search] 等等方法,总而言之
会找到这样一个东东:libglib2.0-dev,定睛一看介绍,这不就是你要找的么?安装之~~ 然后继续 configure, 遇到警告的话可以忽略的,遇到下一个error?如法炮制即可

~好了,能看到这里,我假设你前面已经通过了,现在在终端执行[make], 这一步执行的时间取决于你的 机器速度了,好在audacious是个很小的软件,最长不过几分钟就可以编译完成

notice:在做下一步前,确保configure和make你已经通过,不然hn安装失败,后果自负哦

OK,历经千辛万苦,终于编译完成了,继续在终端输入[sudo make install] 就安装完成了
不要忘了安装audacious-plugins,步骤同上:configure->make->make install

**2:配置[Audacious](/blog/audacious):**

不会吧?又要配置?为什么每个软件装完都要折腾折腾才能用的顺手?汗…本地化一直是linux的伤..
继续努力吧~~

你可能遇到的问题:

1)播放列表乱码(这大概是你使用这个系统以来最头疼的问题了)

没问题,这样设置一下:

首选项->播放列表->元数据: (Preferences->Playlist->Petadata)
使用自動编码检测器：chinese (Auto character encoding detected for)
备用字符编码cp936 (Fallback character encoding)

2)音量很小:

首选项->重放增益->默认增益改为0.00(Preferences->Replay Gain->Default Gain)
也可以设置为大于0,但可能会产生失真

3)想要最小化到托盘,就像千千静听那样么?

首选项->插件->常规,选上Status Icon. (Preferences->Plugins->General)
点击托盘图标即可

**3:恭喜恭喜,终于大功告成了, 享受[Audacious](/blog/audacious)给你带来的快乐吧!~~**

本文原作者：[OWNLINUX团队->坠落de咾鼠](http://www.ownlinux.cn/)

