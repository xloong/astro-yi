---
title: Ylmf OS 3.0 正式版下载 - 雨林木风开源操作系统
description: post/Ylmf-OS-3.0.html">YlmfOS3.0正式版从post/Ubuntu-10.04-LTS-Final.html">Ubuntulucid10.04官方源构建，集成更多的软件。强大的多媒体，办公，娱乐，网络功能。集成编程，音视频编辑等专业软件。采用精仿post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">WindowsXP主题，全新的安装方式，多语言自动配置。核心组件：/tags/Linux">Linuxkernel2.6.32-22.33，xorg1.7.6，gcc4.4.3，gnome2.30.0
date: 2010-06-01 10:07:51
category: 操作系统
tags: ['雨林木风', 'Linux']
post_id: 1153
alias: Ylmf-OS-3.0
ViewNums: 4126
---

[Ylmf OS 3.0 正式版](/blog/ylmf-os-30)从[Ubuntu lucid 10.04](/blog/ubuntu-1004-lts-final)官方源构建，集成更多的软件。强大的多媒体，办公，娱乐，网络功能。集成编程，音视频编辑等专业软件。采用精仿 [Windows XP](/blog/deepin-litexp-windows-xp-sp3-v62)主题，全新的安装方式，多语言自动配置。

核心组件：[Linux](/tags/Linux) kernel 2.6.32-22.33，xorg 1.7.6，gcc 4.4.3，gnome 2.30.0

所有修改的源代码请参考：<http://archive.ylmf.net/ylmfos>

Livecd 默认用户为ylmfos，密码为空

主要特性

1 . 使用 debootstrap 从 [Ubuntu 10.04 lucid](/blog/ubuntu-1004-lts-final) 官方源构建，更新到 2010.05.28。
2 . Livecd 采用 squashfs-lzma 格式，是目前 Linux 下压缩率最大的压缩格式，省出更多的空间集成更多的软件。
3 . 收集 Linux 下经典应用软件，加强用户体验，不论新手还是老手，安装完即用，节约时间，容易上手。
4 . 集成简体中文，繁体中文和英文语言环境及输入法。安装工具 ubiquity 会根据用户选择的语言为目标系统配置和自动删除不需
要的软件。 例如: 安装英文系统则自动删除中文语言包，自动配置软件源等
5 . 默认桌面环境为 Gnome，提供焕然一新的图标和主题风格。
6 . 视频播放器采用 Smplayer 并对其进行增强，可以播放多种常见的音视频，高清已不是问题。
音频播放器采用具有 Linux 下千千静听之称的 Audacious，修复了该软件对中文支持不好的问题。
7 . 办公软件采用 OpenOffice，集成了字处理，表格，演示三大套件，满足用户日常办公需求，额外添加的几款字体也让您的文档充满活力。
8 . 系统对网络功能进行扩展增强，在线音乐，即时通讯等日常应用一应俱全。
9 . 提供 Windows下的多种安装方式，提供 wubi 安装工具以及 wubi-hd 硬盘安装工具。
10. 默认已经添加了Ylmf OS官方源。

主要软件介绍

系统工具:
1 . 优化的 wine 模拟器，中文菜单， 没有乱码的烦恼，附带 winetricks 实用安装工具方便安装 [Windows](/blog/deepin-ghost-xp-sp3-v90-iso) 支持软件。
2 . 应用程序菜单加入卸载软件功能。
3 . 给予用户足够的权限， 例如：挂载硬盘，修改系统时间不用输入密码。
4 . 默认的软件关联，更方便顺手
5 . ailurus 系统调整工具。主要面向新手级的普通用户。它可以设置很多并不能在系统首选项中设置的隐藏选项，以满足用户自定义的乐趣。
6 . Bluez 蓝牙支持
7 . Compiz 帮您实现绚丽的 3D 桌面特效
8 . File-roller 压缩工具，解决zip文件名中文乱码，加入常用压缩格式支持，例如 7zip，rar，iso，cab等等。
9 . Gparted 分区管理工具
10. Ndisgtk Linux下安装 Windows 无线驱动程序的工具，方便 Linux 下找不到无线网卡驱动程序的用户。
11. Samba 和 Windows 机器共享数据和打印机。
12. Rdesktop 远程工具。
13. 加入linux-firmware， linux-firmware-nofree， broadcom 驱动等，加强硬件支持。
14. 默认中文字体为文泉驿微米黑，还集成了文泉驿正黑，简报宋体等。
15. 文件管理器 Nautilus，打开右键菜单的直接删除功能，默认显示地址栏，右键菜单加入：
(1)以管理员打开
(2)在终端打开
(3) 在桌面创建链接
(4)桌面刷新
16. Ubuntu 软件中心
17. 文本编辑工具 leafpad 替换默认的上 gedit，更轻量，自动检测编码。
18. 解决 flash 中文乱码，中文输入问题。
19. gmount-iso 挂在iso文件的图形工具。
20. 打印支持。
21. 集成gcc，linux-headers内核头文件。
22. 输入法ibus， 支持拼音，五笔，仓颉。

网络工具:
1 . aMule 电骡下载客户端，加入反吸血补丁，解决ed2k中文名乱码，关联firefox浏览器。
2 . Drcom-pum Drcom 校园认证客户端。
3 . Dzh 大智慧证券信息平台是一套用来进行证券行情显示、行情分析、外汇及期货信息，并同时进行信息即时接收的超级证券信息平台。
4 . Emesene MSN 客户端，Emesene使用了较新的 MSN 协议，因此支持离线消息、闪屏和个性签名。
5 . Empathy 多协议聊天工具。
6 . Firefox 网页浏览器，加入flash插件，集成常用扩展：
(1) Downthemall 多线程下载工具
(2) Ease link 修复迅雷，QQ旋风，快车，RayFile，纳米盘和QQ临时聊天专用链接，转换网页上的上述种类URL文件为超链接。
(3) 火狐魔镜 可对网页上的任何模块进行剪切和收藏，制作属于你自己的“剪报”，支持全新的视频单放功能，在独立的窗口播放网页视频。拖放图片可轻松保存至本 地；更含在线音乐、天气、股票等实用内容。
(4) 便签管理器 双击关闭标签等
(5) 一键切换字体扩展
7 . Iptux Linux下的"飞鸽传书"，局域网通信工具。
8 . gFtp ftp客户端，解决中文乱码问题。
9 . [LinuxQQ](/blog/qq-for-linux-10-preview-xiazai) LinuxQQ，解决运行崩溃问题。
10. Openfetion 飞信客户端。
11. Xchat irc聊天客户端。
12. Transmission BT下载工具。
13. webqq google音乐本地应用，用prism实现。
14. 优蛋 115网络 U 盘客户端， 多线程下载工具，用wine实现。
15. vinagre tsclient 远程客户端工具。

办公相关:
1 . OpenOffice Office 办公套件，包括字处理，表格，演示和帮助文档。
2 . thunderbird 雷鸟 3.0 版，大名鼎鼎的邮件客户端。
3 . chmsee CHM 文档查看器。
4 . Evince 文档查看器，支持 PDF 文档。
5 . Gnote 快速好用的便签。
6 . Simple-scan 扫描软件。
7 . Stardict 星际译王，翻译工具。
8 . Simple scan 简易的文件扫描工具。

多媒体:
1 . Audacious 音乐播放器，号称Linux下的千千静听，完善了中文翻译，默认皮肤为 Classic， 自动检测中文编码，用 Osdlyrics支持歌词显示。
2 . Audacity 跨平台的声音编辑软件，用于录音和编辑音频，是自由、开放源代码的软件。
3 . SMPlayer 视频播放器，能播放目前常见的所有的视频格式文件，字幕默认编码改成cp936。
4 . Pitivi 视频编辑工具，无论是编辑视频的新手，还是专业人员，皆可通过 Pitivi 找到自己的需要。
5 . Brasero 优秀的光盘刻录工具，堪比 Windows 平台的 Nero。
6 . Gimp 图像编辑软件，Gimp 能够实现多种图像处理方面的要求，包括照片润饰、图像合成和创建图像。
7 . gThumb 图片查看工具。
8 . mid3iconv 修改mp3标签的图形工具。
9 . 沙大收音机， 一个在线电台，电视软件。
10. cheese 茄子大头贴，一款用你的摄像头拍照片和视频的软件，并带一些有趣的特殊效果。

编程工具:
1 . Bluefish 网页编辑工具
2 . Geany 轻快的编程集成工具
3 . Vim Linux下常用的编辑

【[**Ylmf OS 3.0 正式版下载 - 雨林木风开源操作系统**](/blog/ylmf-os-30)】
Ylmf_OS_3.0.iso
大小: 676M
MD5: 919794E3D9B035A5A895C3E1D1818F95
SHA1: 6E672A667155E442A612F69CCBA1BF6C44752D8D
下载地址：[下载地址](download.asp?id=437)

Ylmf OS 官方源:

deb http://archive.ylmf.net/ylmfos lucid main
deb-src http://archive.ylmf.net/ylmfos lucid main

[雨林木风开源操作系统 Ylmf OS 3.0](/blog/ylmf-os-30) 安装说明 最新安装教程
<http://www.ylmf.net/read.php?fid=323&tid=1623239>

