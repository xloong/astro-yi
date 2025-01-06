---
title: MemLimit - 限制程序进程的内存使用量
description: 很少见到限制程序进程的内存使用量的软件，恩。。。。。夜火是没见到过。MemLimit是一个限制程序进程的内存使用量的软件，可以限制任意一个进程的物理内存使用量，防止占用过多内存，由Roger所写。MemLimit这里做的是一个软限制，假如限制了10MB，应用程序有可能用到12M、18M，但是会在很短的时间回复到接近10M的样子。MemLimit的原理是间隔地调用SetProcessWorkingSetSize，如果进程使用了过多的物理内存，马上就会被强制写入到页面文件中。所以为了使限制生效，MemLimit必须一直运行，最小化窗口时它会自动隐藏到托盘，双击恢复。
date: 2009-06-28 11:42:45
category: 应用软件
tags: ['工具共享', '软件']
post_id: 902
alias: MemLimit
ViewNums: 8060
---

很少见到限制程序进程的内存使用量的软件，恩。。。。。[夜火](/blog/)是没见到过。[MemLimit](/blog/memlimit) 是一个[限制程序进程的内存使用量](/blog/memlimit)的软件，可以限制任意一个进程的物理内存使用量，防止占用过多内存，由[Roger](http://rogerfd.cn/)所写。

[MemLimit](/blog/memlimit)这里做的是一个软限制，假如限制了10MB，应用程序有可能用到12M、18M，但是会在很短的时间回复到接近10M的样子。MemLimit的原理是间隔地调用SetProcessWorkingSetSize，如果进程使用了过多的物理内存，马上就会被强制写入到页面文件中。所以为了使限制生效，MemLimit必须一直运行，最小化窗口时它会自动隐藏到托盘，双击恢复。

但是没有办法限制进程使用的虚拟内存数量。如果使用job（作业）可以加以更多的限制，例如CPU使用时间等，但是这是硬性的限制，可能导致进程直接被杀掉。

对某个进程使用MemLimit，并且设置的限制值过小，可能导致频繁的页面交换，从而使得进程反应缓慢。

最后出现的一个问题是，当Roger以为一切OK准备打包时，忽然发现直接运行MemLimit.exe（而不是在VC中启动）会有一些system用户启动的进程无法OpenProcess。这是因为VC自己具有se_debug_name权限，在启动MemLimit时会把自己的权限继承，导致了奇怪的结果。解决的办法是在程序初始化时给MemLimit进程加以se_debug_name权限。

再罗嗦一句这东西必须由管理员启动，仅在xp下测试过。

截图1 限制之前：

[![MemLimit - 限制程序进程的内存使用量](http://rogerfd.cn/wp-content/uploads/2009/06/ml1.jpg "ml1")](/blog/memlimit)

截图2 限制之后：

[![MemLimit](http://rogerfd.cn/wp-content/uploads/2009/06/ml2.jpg "ml2")](/blog/memlimit)

【下载地址】：[MemLimit_1.0.1.zip](/blog/download.asp?id=356 （7KB）

————————————————————————
作者： roger
Blog： http://rogerfd.cn
Email：roger99707@163.com
本文欢迎转载和引用，请保留本说明并注明出处
————————————————————————

