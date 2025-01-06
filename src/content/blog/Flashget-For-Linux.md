---
title: 网际快车Flashget For Linux 下载
description: post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">Windows平台下的著名下载软件快车（Flashget）现已推出/tags/Linux">Linux版本——post/Flashget-For-Linux.html">网际快车FlashgetForLinux1.0 。……
date: 2010-07-16 10:45:38
category: 应用软件
tags: ['Linux', '下载Download', '软件']
post_id: 1188
alias: Flashget-For-Linux
ViewNums: 3475
---

[Windows](/blog/deepin-litexp-windows-xp-sp3-v62) 平台下的著名下载软件快车（Flashget）现已推出 [Linux](/tags/Linux) 版本——[网际快车Flashget For Linux 1.0](/blog/flashget-for-linux) 。目前更新到1.0.1，增加了对BT下载的支持。

官方介绍：

Features
========
- 下载功能与[windows](/blog/deepin-ghost-xp-sp3-v90-iso)快车一样（BT稍后加入）
- 多线程
- 下载速度快
- 无广告,精简
- 支持快车专用链
- 支持FireFox浏览器

测试环境
========
[Ubuntu 10.04](/blog/ubuntu-1004-lts-final)
Red Hat Enterprise Linux AS4.0

安装
====
$tar zxvf wxFlashget-1.0.tar.gz
$sudo make install
wxFlashget就会安装在您的/usr/loca/bin目录下面名称为wxFlashget
配置文件目录位置: ~/.flashget
默认下载保存地址: ~/Download

Bug List
========
1,[Ubuntu 10.04](/blog/ubuntu-1004-lts-lucid-lynx)下面无法启动,提示找不到libexpat.so.0
error while loading shared libraries: libexpat.so.0: cannot open shared object file: No such file or directory
原因,编译flashget使用的是libexpat.so.0版本,系统默认为libexpat.so.1.5.2,做软连接即可.
$cd /usr/lib
$sudo ln -s libexpat.so.1.5.2 libexpt.so.0
$sudo ldconfig

问题反馈
========
<http://bbs.flashget.com/forumdisplay.php?fid=31>

【[**网际快车Flashget For Linux 1.0.1 下载**](/blog/flashget-for-linux)】
[deb下载](http://bbs.flashget.com/flashget_1.0.1-1_i386_cn.deb)
[二进制包下载](http://bbs.flashget.com/flashget_1.0.1.tar.gz)
[论坛下载页面](http://bbs.flashget.com/viewthread.php?tid=18519)

