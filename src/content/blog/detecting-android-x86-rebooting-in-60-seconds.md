---
title: 安装安卓虚拟机出现detecting android-x86和rebooting in 60 seconds的解决办法
description: 最近因为业务需要，要安装安卓虚拟机做测试，按照网上搜索到的安卓虚拟机安装教程，安装了VirtualBox，下载了安卓4.3的iso镜像，但是启动点install安装之后，不是出现detectingandroid-x86并卡死，就是出现rebootingin60seconds卡死，反反复复，下了好几个版本的镜像都无果，浪费了好多时间。解决办法：虚拟机VirtualBox的设置→系
date: 2014-11-26 00:32:59
category: Android
tags: ['Android']
post_id: 1545
alias: detecting-android-x86-rebooting-in-60-seconds
ViewNums: 17194
---

最近因为业务需要，要安装[安卓虚拟机](/blog/detecting-android-x86-rebooting-in-60-seconds)做测试，按照网上搜索到的[安卓虚拟机安装教程](http://jingyan.baidu.com/article/36d6ed1f24b0c81bce488376.html)，安装了VirtualBox，下载了安卓4.3的iso镜像，但是启动点install安装之后，不是出现**detecting android-x86**并卡死，就是出现**rebooting in 60 seconds** 卡死，反反复复，下了好几个版本的镜像都无果，浪费了好多时间。

[![安装安卓虚拟机出现detecting android-x86和rebooting in 60 seconds的解决办法](http://f.hiphotos.baidu.com/zhidao/pic/item/43a7d933c895d14338b0849272f082025baf07b8.jpg)](/blog/detecting-android-x86-rebooting-in-60-seconds)

**解决办法**：虚拟机VirtualBox的设置→系统→硬件加速里面有个“启用 VT-x/AMD-v"这个选项，打上勾。如果不能选择，需要在主板BIOS里进行设置，在启动电脑（真实的电脑，不是虚拟机）的时候进入bios的cpu选项里面开启。

F10，保存重启之后，在虚拟机里勾选VT-x，开启虚拟机，就能正常安装android系统了。

