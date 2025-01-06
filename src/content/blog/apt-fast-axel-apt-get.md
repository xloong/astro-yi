---
title: apt-fast - 用axel让apt-get多线程加速软件安装
description: 这是在Wow！Ubuntu上看到的文章，非常实用，就直接全文转来了。Ubuntugeek 上介绍了一个方法，通过一个名为post/apt-fast-axel-apt-get.html">apt-fast的脚本来让post/apt-fast-axel-apt-get.html">axel结合apt-get命令进行软件的安装，由于axel可以多线程下载软件包，这样就可以起到了加速的作用。而且整个使用过程基本与apt-get无异，只需要把平常的apt-get改为apt-fast就可以了，比如sudoapt-fastinstallpackage。……
date: 2010-08-11 10:55:08
category: 技术文章
tags: ['Ubuntu', '技巧', 'apt-get']
post_id: 1203
alias: apt-fast-axel-apt-get
ViewNums: 8559
---

这是在[Wow！Ubuntu](http://wowubuntu.com/)上看到的文章，非常实用，就直接全文转来了。

[Ubuntugeek](http://www.ubuntugeek.com/apt-fast-and-axel-faster-apt-get-installations-and-upgrades.html) 上介绍了一个方法，通过一个名为 [apt-fast](/blog/apt-fast-axel-apt-get) 的脚本来让 [axel](/blog/apt-fast-axel-apt-get) 结合 apt-get 命令进行软件的安装，由于 axel 可以多线程下载软件包，这样就可以起到了加速的作用。

而且整个使用过程基本与 apt-get 无异，只需要把平常的 apt-get 改为 apt-fast 就可以了，比如 sudo apt-fast install *package* 。

# 安装与使用：

先安装 axel 工具

> sudo apt-get install axel

从[这里下载](http://www.mattparnell.com/linux/apt-fast/) apt-fast.sh 脚本，把它移动到 /usr/bin 目录中同时改名为 apt-fast 。

> sudo cp apt-fast.sh /usr/bin/apt-fast

最后给予可执行权限

> sudo chmod +x apt-fast

现在你就可以用 apt-fast 来代替 apt-get 了，比如 sudo apt-fast upgrade , sudo apt-fast dist-upgrade 等等。

