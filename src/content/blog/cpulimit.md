---
title: cpulimit - Linux下限制进程CPU占用率的工具
description: 以前介绍过post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">windows下post/MemLimit.html">限制程序进程的内存使用量的工具-post/MemLimit.html">MemLimit，今天来看看一款在/tags/Linux">Linux下使用的post/cpulimit.html">限制进程CPU占用率的工具。post/cpulimit.html">cpulimit是一个简单而有用的小程序，通过它你可以限制一个进程的CPU占用率。如果善加利用，必将成为系统管理员的得力助手。
date: 2010-03-11 12:11:17
category: 应用软件
tags: ['Linux', '软件']
post_id: 1089
alias: cpulimit
ViewNums: 3530
---

以前介绍过[windows](/blog/deepin-litexp-windows-xp-sp3-v62)下[限制程序进程的内存使用量的工具](/blog/memlimit) - [MemLimit](/blog/memlimit)，今天来看看一款在[Linux](/tags/Linux)下使用的[限制进程CPU占用率的工具](/blog/cpulimit)。

[cpulimit](/blog/cpulimit) 是一个简单而有用的小程序，通过它你可以限制一个进程的 CPU 占用率。如果善加利用，必将成为系统管理员的得力助手。

[![cpulimit](http://linuxtoy.org/images/2010/02/cpulimit.png)](/blog/cpulimit)

[**cpulimit 的用法**](/blog/cpulimit)也很简单，如上图所示，通过 -e 选项指定需控制的进程名（或 -p 选项指定 pid），-l 选项指定 CPU 的占用百分比即可。这里，我将 Chrome 的 CPU 占用率限制到 25%。

【[**cpulimit 下载地址**](/blog/cpulimit)】
1.[项目主页](http://cpulimit.sourceforge.net/)
2.使用Linux发行版自带的包管理器安装

via [Linuxtoy](http://linuxtoy.org/)

