---
title: 教你怎么在 Ubuntu 上安装 IE6 及 IE7
description:  这个文章是在wow!ubuntu上看到的，转载给有特殊需要的朋友看看，不过想完美稳定地跑IE的话，最好还是用虚拟机装个post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">WindowsXP。有些也许有这样的需求，想在 /tags/Ubuntu">Ubuntu 上使用IE来完成特殊的工作，通过大家的做法是用 /tags/VirtualBox">VirtualBox 这样的虚拟机来安装一个 post/Deepin-GHOST-XP-SP3-V9.0-ISO.html">Windows 系统，而这里有一个通过 /tags/wine">Wine 来运行IE6或IE7的方法，不妨可以尝试一下。
date: 2010-08-14 08:54:54
category: 应用软件
tags: ['Ubuntu', 'IE']
post_id: 1204
alias: ubuntu-wine-ie6-ie7
ViewNums: 4437
---

这个文章是在[wow!ubuntu](http://wowubuntu.com/)上看到的，转载给有特殊需要的朋友看看，不过想完美稳定地跑IE的话，最好还是用虚拟机装个[Windows XP](/blog/deepin-litexp-windows-xp-sp3-v62)。

有些也许有这样的需求，想在 [Ubuntu](/tags/Ubuntu) 上使用 IE 来完成特殊的工作，通过大家的做法是用 [VirtualBox](/tags/VirtualBox) 这样的虚拟机来安装一个 [Windows](/blog/deepin-ghost-xp-sp3-v90-iso) 系统，而这里有一个通过 [Wine](/tags/wine) 来运行 IE6 或 IE7 的方法，不妨可以尝试一下。

不过经过我试用发现，[在 Ubuntu 上运行 IE](/blog/ubuntu-wine-ie6-ie7) 的体验应该说是非常糟糕的，在打开淘宝或支付宝时经常崩溃。所以事先提醒一下，别对它指望太多。

# 安装：

1 安装 Wine 1.2 及 winetricks

> sudo add-apt-repository ppa:ubuntu-wine/ppa
> sudo apt-get update
> sudo apt-get install wine1.2 winetricks

2 安装 ie6 或 ie7

> winetricks ie6

或

> winetricks ie7

# 运行

> wine iexplore

