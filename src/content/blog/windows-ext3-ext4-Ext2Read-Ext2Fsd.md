---
title: 在Windows 下读取 Linux 的 ext3/ext4 格式分区 -Ext2Read和Ext2Fsd
description: post/Ubuntu-10.10-Maverick-Meerkat.html">Ubuntu10.10正式版已经发布，对于像我这样的Linux小菜来说，在linux下访问windows分区文件很easy，但是想从windows下访问linux分区就没辙了，今天就给大家介绍介绍能在windows下读取linux的ext3,、ext4分区的软件——Ext2Read和Ext2Fsd。
date: 2010-10-18 09:26:52
category: 应用软件
tags: ['Windows', 'Linux', '技巧', '软件']
post_id: 1220
alias: windows-ext3-ext4-Ext2Read-Ext2Fsd
ViewNums: 9075
---

[Ubuntu 10.10 正式版](/blog/ubuntu-1010-maverick-meerkat "ubuntu 1010 正式版下载")已经发布，对于像我这样的Linux小菜来说，在linux下访问windows分区文件很easy，但是想从windows下访问linux分区就没辙了，今天就给大家介绍介绍能在windows下读取linux的ext3,、ext4分区的软件——Ext2Read和Ext2Fsd。

ext3等日志型文件系统是Linux中被广泛应用的。通常是许多流行[Linux](/tags/Linux)发行版默认的文件系统。

etx4也是Linux下的日志型文件系统，被设计作为ext3的继任者 。他消除了64位存储限制，是ext3向后兼容的扩展的系列之一，较ext3提高了性能表现。

**# 方法1:**

[Ext2Read](/blog/windows-ext3-ext4-ext2read-ext2fsd) 是一个能够读取[etc2](/blog/windows-ext3-ext4-ext2read-ext2fsd)/[etx3](/blog/windows-ext3-ext4-ext2read-ext2fsd)/[ext4](/blog/windows-ext3-ext4-ext2read-ext2fsd)文件系统的工具。他支持[LVM2](/blog/windows-ext3-ext4-ext2read-ext2fsd)和Ext4.可以查看和复制文件和文件夹，递归复制整个文件夹。

下载地址：<http://sourceforge.net/projects/ext2read/>

图片地址：

[![在Windows 下读取 Linux 的 ext3/ext4 格式分区 -Ext2Read和Ext2Fsd](http://wowubuntu.com/wp-content/uploads/2010/09/screenshot1.jpg "screenshot1")](/blog/windows-ext3-ext4-ext2read-ext2fsd)

**# 方法2:**

[Ext2Fsd](/blog/windows-ext3-ext4-ext2read-ext2fsd)是一个[windows](/blog/deepin-litexp-windows-xp-sp3-v62)下的ext2文件系统驱动，支持windows2000,[xp](/blog/deepin-ghost-xp-sp3-v90-iso)，vista。是一款自由软件，以GPL2协议发布

主页地址：<http://www.ext2fsd.com/>

使用：下载之后，单击邮件选择属性：设置Windows Vista Service Pack 2的兼容模式，设置以”管理员身份运行”。双机安装，推荐在安装时钩去“enable write access”来保护linux不被写入，以防止数据丢失

注：软件使用有风险，请自己承担失败风险。

来源：[Wow!Ubuntu](http://wowubuntu.com/win-read-ext3-ext4.html)

