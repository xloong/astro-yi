---
title: SunPinyin - Linux下最好用的拼音输入法
description: Sunpinyin貌似是很NB的，基于统计语言模型(SML)的输入法。忍受着SCIM看着YongSun牛开发SunPinyin，直到去年从FeiYGG的blog得知SunPinyin已经准备进入Debian的源了。得知这个消息心情非常激动，于是偶怀着万分崇敬的心情等待YongSun同学加入快速切换英文模式的支持—现在偶如愿以偿鸟~
date: 2009-04-04 09:51:24
category: 操作系统
tags: ['SunPinyin', '输入法', 'Linux']
post_id: 833
alias: SunPinyin
ViewNums: 5026
---

[Sunpinyin](/blog/sunpinyin)貌似是很NB的，基于统计语言模型(SML)的输入法。

忍受着SCIM看着Yong Sun牛开发SunPinyin，直到去年[从FeiY GG的blog得知](http://blog.eshangrao.com/2008/08/25/555/)Sun Pinyin已经准备进入Debian的源了。得知这个消息心情非常激动，于是偶怀着万分崇敬的心情等待Yong Sun同学加入快速切换英文模式的支持—现在偶如愿以偿鸟~

[![SunPinyin - Linux下最好用的拼音输入法](http://www.sxnsx.com/wp-content/uploads/2009/03/screenshot.png "SunPinyin - Linux下最好用的拼音输入法")](/blog/sunpinyin)

[Sun拼音](/blog/sunpinyin)编译安装：

1. 去http://mentors.debian.net/debian/pool/main/s/sunpinyin/ 把三个包包下下来。
2. $ dpkg-source -x sunpinyin_1.0~hg20090201-1.dsc
3. $ cd sunpinyin-1.0~hg20090201/
4. $ sudo dpkg-buildpackage

非常简单咩？

最后得到：

iiimf-le-sunpinyin-chinese_1.0~hg20090201-1_i386.deb
scim-sunpinyin_1.0~hg20090201-1_i386.deb
sunpinyin-data-be_1.0~hg20090201-1_all.deb
sunpinyin-data-le_1.0~hg20090201-1_all.deb

四个deb包。其中scim开头那个是scim用的，sunpinyin-data-le开头那个是x86这样 little-endian的平台用的。安装它们两个就可以了。

当然咯，你可以下载我自己编译好的deb包包：

scim-sunpinyin_1.0~hg20090201-1_i386.deb：[下载](http://www.box.net/shared/fzjj5k88nz)
sunpinyin-data-le_1.0~hg20090201-1_all.deb：[下载](http://www.box.net/shared/zzhms8jh2q)

开发者博客：[Yong Sun](http://blogs.sun.com/yongsun/)
项目主页：<http://www.opensolaris.org/os/project/input-method/>

转自：[Shellex](http://www.sxnsx.com/)

