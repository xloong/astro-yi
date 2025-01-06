---
title: windows 文件关联 用assoc和ftype命令更改文件类型关联
description: windows文件关联更改文件类型关联的方法，用assoc和ftype命令修改文件类型关联在Windows操作系统中，要将某个扩展名的文件用指定的程序打开，需分两个步骤来完成
date: 2012-11-05 10:09:53
category: 技术文章
tags: ['Windows']
post_id: 1409
alias: windows-wenjianguanlian-assoc-ftype
ViewNums: 3491
---

[windows 文件关联](/blog/windows-wenjianguanlian-assoc-ftype) [更改文件类型关联](/blog/windows-wenjianguanlian-assoc-ftype)的方法，用[assoc和ftype](/blog/windows-wenjianguanlian-assoc-ftype)命令[修改文件类型关联](/blog/windows-wenjianguanlian-assoc-ftype)

在[Windows](/tags/windows)操作系统中，要将某个扩展名的文件用指定的程序打开，需分两个步骤来完成：

第一步：使用**assoc**命令将扩展名和[文件类型关联](/blog/windows-wenjianguanlian-assoc-ftype)；
第二步：使用**ftype**命令将文件类型和[打开程序关联](/blog/windows-wenjianguanlian-assoc-ftype)；

[![windows 文件关联 用assoc和ftype命令更改文件类型关联](http://www.mzwu.com/pic/201210/002.gif)](/blog/windows-wenjianguanlian-assoc-ftype)

文件关联示例

assoc .txt=txtfile
ftype txtfile=C:Windows
otepad.exe %1

更多内容可参见：玩转Windows 7文件关联 <http://tech.sina.com.cn/s/2010-06-25/07364349548.shtml>

via [木子屋](http://www.mzwu.com)

