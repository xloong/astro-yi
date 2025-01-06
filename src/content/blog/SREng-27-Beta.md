---
title: SREng - System Repair Engineer 2.7 Beta
description: SREng-SystemRepairEngineer2.7Beta是一款计算机安全辅助和系统维护辅助软件。主要用于发现、发掘潜在的系统故障和大多数由于计算机病毒造成的破坏，并提供一系列的修改建议和自动修复方法。该软件是Smallfrogs开发的，能够运行在所有主流的Windows操作系统上。SystemRepairEngineer(SREng)2.7版本主要变化说明
date: 2008-10-06 08:37:10
category: 安全工具
tags: ['SREng', '安全', '工具共享']
post_id: 630
alias: SREng-2.7-Beta
ViewNums: 2390
---

**[SREng - System Repair Engineer 2.7 Beta](/blog/sreng-27-beta)** 是一款计算机安全辅助和系统维护辅助软件。主要用于发现、发掘潜在的系统故障和大多数由于计算机病毒造成的破坏，并提供一系列的修改建议和自动修复方法。 该软件是Smallfrogs开发的，能够运行在所有主流的[Windows](/blog/deepin-litexp-windows-xp-sp3-v62)操作系统上。

**System Repair Engineer (SREng) 2.7 版本主要变化说明：**

l  自动增量升级功能：随着 System Repair Engineer 功能的增加，编译以后的文件越来越大了。在 System Repair Engineer 2.7里面，新增加入增量升级功能。当System Repair Engineer 在线检测发现有新的稳定正式版本的时候，System Repair Engineer主界面左下角会出现一个蓝色的文字链接，点击此文字链接或者点击通过工具— 检查新版本菜单，会弹出的升级对话框，点击对话框里面的升级按钮，对于支持增量升级的系统，System Repair Engineer 会自动下载增量升级文件，然后自动更新到最新版本。
增量升级支持的操作系统有：[Windows XP](/blog/deepin-ghost-xp-sp3-v90-iso)、Windows Server 2003、Windows Vista、[Windows Server 2008](/blog/windows-server-2008-x86-dvd-chs)

l  增加感染型病毒检测功能，如果发现系统文件被病毒感染，则在厂商信息前面增加 Infected 字样。

l  调整启动项目Tab页内容。对于 Windows 2000 之后的系统，操作系统已经不再解析 Autoexec.BAT、Config.SYS、Win.ini、system.ini 四个文件，从 System Repair Engineer 2.7 开始，对于 Windows 2000 之后的系统，这4个Tab页将被隐藏而不显示。

l  增加Windows计划任务扫描功能

l  智能扫描里面默认选中检查进程模块的数字签名信息。

l  智能扫描进程日志里面对于通过数字签名的Microsoft的进程，增加 Verified 字样
对于通过数字签名的进程里面的Microsoft模块，隐藏显示

l  增加后台扫描输出日志路径自定义设置功能，新增参数：/escan /escanlogpath [drive:]path
n  例如：使用srengldr /escan /escanlogpath c:log 将使用后台扫描功能，并把日志输出到 C:log目录下。

l  增加 System Repair Engineer 进程内数字签名相关的API Hook 检测

l  将繁体资源内置在System Repair Engineer主模块里面（本Beta版本里面未体现）

l  语言资源版本号和主模块版本号必须一致，否则不加载语言资源模块

**System Repair Engineer (SREng) 2.7 版本授权方式：**

System Repair Engineer (SREng) 2.7版本属于免费软件，在非用于商业用途的前提下允许自由传播。
System Repair Engineer (SREng) 2.7版本会在2010年1月1日到期，届时请自行下载新版本或联系软件作者免费索取授权号。

[**SREng - System Repair Engineer 2.7 Beta** 下载地址](/blog/download.asp?id=171

