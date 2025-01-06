---
title: 雨林木风 Ylmf Linux Y1.5（Ubuntu 9.10）正式版下载
description: 2009年10月29日，Ubuntu发布了Ubuntu9.10正式版，雨林木风第一时间制作了雨林木风YlmfLinuxY1.5（Ubuntu9.10）正式版。雨林木风YlmfLinuxY1.5（Ubuntu9.10）正式版新版本特性：……
date: 2009-11-07 12:35:03
category: 操作系统
tags: ['雨林木风', 'Linux', 'Ubuntu']
post_id: 1020
alias: Ylmf-Linux-Y1.5-Ubuntu-9.10
ViewNums: 3880
---

2009年10月29日，Ubuntu 发布了[Ubuntu 9.10正式版](/blog/ubuntu-910-final)，雨林木风第一时间制作了[**雨林木风 Ylmf Linux Y1.5（Ubuntu 9.10）正式版**](/blog/ylmf-linux-y15-ubuntu-910)。

[雨林木风 Ylmf Linux Y1.5（Ubuntu 9.10）正式版](/blog/ylmf-linux-y15-ubuntu-910)新版本特性：

1. 将所有的软件和库更新到 11 月 3 日,安装时不需拨掉网线也不需长久等待
2. 集成firefox 的 flash 和 播放器插件
3. 针对新用户,我们在桌面上放置了 Ubuntu 指北针,可以双击直接访问一个快速的 [Ubuntu](/tags/Ubuntu) 手册.
4. 定制ibus输入法 集成UNRAR压缩软件
5. 修改了默认使用 ubuntu 欧洲官方的软件源,改为雨林木风软件源,也可以通过  图形化工具“系统 -> 系统管理 -> 软件源”选择其他的软件源
6. 集成了两款很精美的主题,满足不同用户的视觉需求
7. 移除了OpenOffice ,需要的用户可以在应用程序菜单的 Ubuntu 软件中心自行添加.

特别说明：

Linux 安装需要对硬盘分区进行操作与调整，用户需对整体操作上有一定程度的理解，请您在安装前对您的重要数据进行备份。由于 Ubuntu 本身是针对国际用户的，所以启动菜单有语言选项，为了方便国内用户安装，我们在启动安装界面取消了语言选择弹出菜单，默认仅使用简体中文，免去选择语言的 麻烦。

关于安装：
A：刻盘安装方式：
        把光盘放入光驱，从光驱启动，弹出多启动菜单，可以通过选择“进入Live CD 修复系统”菜单进入光盘的 Live 模式，这个模式不会改变电脑里面的任何数据，并可直接挂载读取NTFS分区。 如果您对 [Linux](/tags/Linux) 系统不了解，先不必急着安装，可以在 Live CD 模式中先感受一下也未尝不可。在此系统中我们设置了一些系统主题，不必等到装完再去体验，Live CD中已经可以体验这些主题了，如界面预览中的背景就是美轮美奂的MAC主题，呵呵，是不是很靓呢！

B：不刻盘安装方式：
一、wubi安装
这各方式将Ubuntu安装在[WINDOWS](/blog/deepin-litexp-windows-xp-sp3-v62)的分区里面，E盘空闲空间5G以上,建议使用NTFS分区，磁盘标识使用英文。
1.将[Ylmf-linux-Y1.5.iso](/blog/ylmf-linux-y15-ubuntu-910)放到E盘iso目录下；
2.将wubi.exe放到E盘iso目录下；
3.禁用本地网络；
4.双击wubi.exe进行安装，选择安装到E盘；
5.重启后选择ubuntu进行安装。

二、硬盘安装
这不是wubi安装，是硬盘安装。省去了硬盘安装前后自己手工复制、修改那部分。E盘空闲空间5G以上,建议使用NTFS分区，磁盘标识使用英文。
1.将[Ylmf-linux-Y1.5.iso](/blog/ylmf-linux-y15-ubuntu-910)放到E盘iso目录下；
2.将wubi-hd.exe放到E盘iso目录下；
3.将Ylmf-linux-Y1.5.iso改名为installation.iso ；
4.双击wubi-hd.exe进行安装，选择安装到E盘；
5.提取ISO里面casperinitrd.lz到e:ubuntu-installinstalloot下，并修改名字为initrd.gz；
6.重启后选择ubuntu,这时会进入到live-cd模式，双击桌面“安装 Ubuntu 9.10”进行安装，注意，双击”安装 Ubuntu 9.10“前，双击桌面“终端”，输入sudo umount -l /isodevice 按回车。

版本特性：

1. 将所有的软件和库更新到 11 月 3 日，安装时不需拨掉网线也不需长久等待；
2. 集成firefox 的 flash 和 播放器插件；
3. 针对新用户，我们在桌面上放置了 Ubuntu 指北针，可以双击直接访问一个快速的 Ubuntu 手册；
4. 定制ibus输入法 集成UNRAR压缩软件；
5. 修改了默认使用 ubuntu 欧洲官方的软件源，改为雨林木风软件源，也可以通过 图形化工具“系统 -> 系统管理 -> 软件源”选择其他的软件源；
6. 集成了两款很精美的主题，满足不同用户的视觉需求。

集成软件：
多媒体工具：
（1）视频播放器
Mplayer —— 可播放绝大多数媒体格式；
GMLive —— 可播放绝大多数媒体格式，还提供支持PPLIVE,PPSTREAM,SCPCAST等网络电视的播放；
Realplayer 11 —— 地球人都知道的流媒体播放软件；
（2）音乐播放器
Audacious —— 类似千千静听，可播放 mp3、wma、ogg 等诸多格式。

网络工具：
（1）网络聊天
腾讯QQ —— QQ 的 linux 版；
Pidgin —— 支持 MSN、QQ、Yahoo、ICQ 等等多种通讯协议；
（2）下载工具 aMule —— 电驴下载
Transmission —— BT下载
迅雷 —— Windows 下最经典的下载软件
（3）浏览器
Firefox —— 已安装 flash 和播放器插件，可在线播放音乐和视频；
（4）宽带拨号
ADSL/PPOE GTK TOOL—— 拨号软件
DR.COM ——宽带认证客户端
WICD —— 无线管理软件

办公工具：
（1）CHM阅读器
Chmsee —— 用来阅读Windows下的 chm 文件；
（2）图书阅读器
envince —— 增强对 PDF 中文的支持，并解决乱码问题。

图形图像：
（1）图像查看：
gthumb—— 简便好用的图像查看gimp图像处理软件。

系统工具：
（1）系统设置：
Ubuntu Tweak —— 功能超级强大的Ubuntu 设置 优化 程序安装卸载工具；
（2）程序模拟：
Wine —— linux可以运行windows文件的模拟器软件。

【[**雨林木风 Ylmf Linux Y1.5（Ubuntu 9.10）正式版下载地址**](/blog/ylmf-linux-y15-ubuntu-910)】
[下载地址](/blog/download.asp?id=373

