---
title: Ubuntu 9.04 wubi安装失败的解决方法两则
description: Ubuntu9.04正式版发布有2天了，夜火我虽然下载好了，但是一直没空装，看到网上不少人用Ubuntu9.04的wubi安装失败，特收集于此，有空安装的时候如果出问题心里好有个数。
date: 2009-04-27 10:43:25
category: 操作系统
tags: ['Ubuntu', '技巧', 'Wubi']
post_id: 845
alias: Ubuntu-9.04-wubi-shibai
ViewNums: 8955
---

[Ubuntu 9.04 正式版](/blog/ubuntu-904-final)发布有2天了，[夜火](http://www.15897.com/)我虽然下载好了，但是一直没空装，看到网上不少人用 [Ubuntu 9.04 的 wubi安装失败](/blog/ubuntu-904-wubi-shibai)，特收集于此，有空安装的时候如果出问题心里好有个数。还没下载Ubuntu 9.04 正式版的朋友点此：<http://www.15897.com/blog/Ubuntu-904-Final>

**Ubuntu 9.04 wubi安装失败之一**

失败原因：盘符名中含有中文。
解决方法：将中文改为英文就可以了。如，原先为"系统盘(C:)"，改为"system(C:)"。其他也是类似的改法。注意，所有的盘符都不可以含有中文！

可能是做wubi的程序员考虑欠周全所致，希望以后的版本不会再这样。

如果你已经双击了wubi，应先清除临时文件，路径为C:Documents and SettingsAdministratorLocal SettingsTemp（假设你的系统盘是C盘，并且是Administrator）。清除后，为了保险起见，重启后再运行wubi。

**Ubuntu 9.04 wubi安装失败之二**

症状：[wubi运行后没有反应](/blog/ubuntu-904-wubi-shibai)

首先需要一个[8.10的wubi安装文件wubi.exe](/blog/wubi-810)和[9.04的ISO文件](/blog/ubuntu-904-final)。

安装虚拟光驱.(我用的是WinMount，很多人反映会有蓝屏现象，当然我也出现过一两次，但是大多情况下,并没有蓝屏。)

现在以WinMount3为例，打开WinMount3,点击"Mount文件"，选中Ubuntu9.04的iso文件，之后可以不管这些，等会弹出的Ubuntu9.04安装盘窗口可以直接关闭。

XP用户打开X:Documents and SettingsLocal SettingsTemp,Vista用户类似，在 X:用户Local SettingsTemp 目录下，X代表系统盘符，Z代表当前登陆用户的用户名。

然后清空里面的文件，清空后不要关闭。

在任意目录下打开8.10的wubi.exe(不需要打开umenu.exe)。

返回刚才打开的窗口，会发现出现两个文件夹，打开这两个文件夹后其中有一个文件夹里有个名字叫data的文件，继续打开，里面会有个isolist.ini 的文件，双击打开这个文件修改version=8.10为version=9.04，根据自己安装的版本进行修改，例如安装i386版本的，只需要修改 [Ubuntu-i386]下的这个字段,安装AMD64位的，就修改[Ubuntu-amd64]下字段即可，修改完毕后保存,返回wubi安装界面。

选择安装的盘符、体积、用户名、密码点安装后，稍等片刻。

等安装完毕后不要急着重启进入[Ubuntu](/tags/Ubuntu),因为可能会出错，此时进入Ubuntu安装目录，把Ubuntuinstall下的所有文件夹复制到Ubuntudisks下,会提示已有相同文件夹，覆盖掉然后重启即可。

到这里在[windows](/blog/deepin-litexp-windows-xp-sp3-v62)下安装Ubuntu9.04的工作已经接近尾声,开机选择Ubuntu后就可以顺利安装了.

