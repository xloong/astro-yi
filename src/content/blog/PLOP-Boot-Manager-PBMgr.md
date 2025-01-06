---
title: PLOP Boot Manager-功能强大的多启动程序新星
description: PLOPBootManager(以下简称PBMgr)和其他多启动工具一样，也是能帮助管理多个系统的启动。但却有如下独到的地方：*支持USB磁盘启动这里有两层意思，其一是从USB介质上启动，也能转入到USB介质启动（无论BIOS是否支持USB启动）。从开发日志上看，对于EHCI/OHCI/UHCI三种接口是都支持的，但外接USBHUB还不支持。
date: 2008-05-12 10:54:59
category: 应用软件
tags: ['工具共享', '软件']
post_id: 479
alias: PLOP-Boot-Manager-PBMgr
ViewNums: 6569
---

**PLOP Boot Manager** (以下简称 PBMgr) 和其他多启动[工具](/tags/%E5%B7%A5%E5%85%B7%E5%85%B1%E4%BA%AB)一样，也是能帮助管理多个系统的启动。但却有如下独到的地方：

* 支持 USB 磁盘启动
这里有两层意思，其一是从 USB 介质上启动，也能转入到 USB 介质启动（无论 BIOS 是否支持 USB 启动）。从开发日志上看，对于 EHCI/OHCI/UHCI 三种接口是都支持的，但外接 USB HUB 还不支持。
这个功能，的确激动人心，虽然之前看 Filo 里面有 USB 栈，是保护模式下的，而这个是实模式下的。

* 支持光盘启动
　　这个也是两层意思: 既能从光盘上启动，也能从其他介质启动后转入光驱启动。虽然，我们曾经见过：比如 grub4all 里面的 scdrom 能实现这样的功能，但是兼容性不好；还有一个扇区的启动代码的启动转换（比如在 Avldr.bin 启动过程中按下 Alt 键，然后在出现的菜单中使用 'c'drom 项），也是存在兼容性问题。

* 超小体积和对图形界面的支持
　　PBMgr 当前版本，只有 40-50kb 的个头，但是能实现 USB 栈，和 cdrom mini 驱动的确是个奇迹，而它还包括了图形支持与启动特效。的确了不起。

[![](http://www.plop.at/images/bootmanagerv5/bootmngr5_4_small.jpg "PLOP Boot Manager")](http://www.plop.at/slide16en04.html)  [![](http://www.plop.at/images/bootmanagerv5/bootmngr5_1_small.jpg "PLOP Boot Manager")](http://www.plop.at/slide16en01.html)

[点击进入下载页面](/blog/download.asp?id=79

