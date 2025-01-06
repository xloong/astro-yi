---
title: PPS for Linux - PPS官方 Linux 版本
description: PPSforLinux-国内终于有个像样的Linux下的官方版P2P网络电视了，这话怎么那么绕口。。。上次出的PPLiveforLinux，夜火并没介绍，因为并不是官方的，不知道会不会有什么问题。现在好了，有官方的PPSforLinux了，官方只说支持Ubuntu8.04，其他版本并没说不能安装运行，但是也看出PPS早有Linux版的开发意向，相信后续版本会越来越好。
date: 2009-08-24 11:16:01
category: 应用软件
tags: ['PPStream', 'Linux']
post_id: 950
alias: PPS-for-Linux
ViewNums: 15689
---

[PPS for Linux](/blog/pps-for-linux) - 国内终于有个像样的Linux下的官方版P2P网络电视了，这话怎么那么绕口。。。上次出的PPLive for Linux，[夜火](/blog/)并没介绍，因为并不是官方的，不知道会不会有什么问题。现在好了，有官方的[PPS for Linux](/blog/pps-for-linux)了，官方只说支持[Ubuntu 8.04](/blog/ubuntu-804-lts-download-xiazai)，其他版本并没说不能安装运行，但是也看出[PPS](http://dl.pps.tv/)早有[Linux](/tags/Linux)版的开发意向，相信后续版本会越来越好。

国内著名在线播放软件，PPS网络电视不动声响的开放了对应[Linux](/tags/Linux)的软件下载。

支持系统：[Ubuntu 8.04](/blog/ubuntu-804-lts-download-xiazai)
运行环境：Console环境下运行，需要系统安装Framebuffer驱动
权限要求：root用户，本程序安装需要root权限，以保证程序的正常安装。

安装使用方法：

1. 解压release_for_ubuntu.tgz到任意目录；tar xzf release_for_ubuntu.tgz；
2. 进入release_for_ubuntu解压后目录：cd release_for_ubuntu；
3. 运行install.sh安装PPS点播库(请确认拥有Root权限)：./install.sh；
4. 安装完成后，在控制台下行播放器，目前使用的是mplayer播放器进行测试：./mplayer -playlist playlist.txt；
5. 开始播放，可以使用mplayer的操作按键可以实现快进、快退、暂停以及节目切换等功能；

注：[PPS for Ubuntu 8.04](/blog/pps-for-linux)解码器包含了rmvb和wmv相关的一些解码器，假如出现播放时没有图像的情况，可选择安装这些解码器。使用方法：加解压后的动态库文件 (.so)复制到“/usr/local/lib/codecs/”目录下即可。

【[PPS for Linux](/blog/pps-for-linux) 下载地址】

[PPS for Ubuntu 8.04安装包](http://download.ppstream.com/linux/release_for_ubuntu.tgz)
[PPS for Ubuntu 8.04解码器](http://download.ppstream.com/linux/codecs.tgz)
[C2 CC1100](http://download.ppstream.com/linux/libpps_for_cc1100.tgz)
[NXP PNX8935](http://download.ppstream.com/linux/libpps_for_pnx8935.tgz)
[Realtek RTD1073](http://download.ppstream.com/linux/libpps_for_rtd1073.tgz)
[Davinci DM6446](http://download.ppstream.com/linux/libs_for_dm6446.tgz)
[Telechips TCC8900](http://download.ppstream.com/linux/libs_for_telechips8900.tgz)
[Powerlayer PLM3000](http://download.ppstream.com/linux/libs_for_plm3000.tgz)
[Intel CE3100](http://download.ppstream.com/linux/libs_for_intel_ce3100.tgz)
[sample下载](http://download.ppstream.com/linux/sample.zip)

