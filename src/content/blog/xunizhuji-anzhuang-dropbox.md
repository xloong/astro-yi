---
title: 虚拟主机如何安装Dropbox备份网站教程
description: 以前发过一篇post/VPS-Dropbox-backup.html">在VPS中命令行安装Dropbox实现网站的实时备份，今天转一个月光写的post/xunizhuji-anzhuang-dropbox.html">虚拟主机如何安装Dropbox备份网站教程：　　虽然目前从国内访问post/Dropbox.html">Dropbox有小小困难，但是从国外访问还是正常的，对于拥有国外/tags/Linux">Linux虚拟主机的用户，可能会遇到这样的需求，就是如何将国外虚拟主机上的网站备份到Dropbox上，下面我以Dreamhost为例介绍一下备份的方法。
date: 2010-07-12 10:10:54
category: 技术文章
tags: ['技术类', '技巧']
post_id: 1186
alias: xunizhuji-anzhuang-dropbox
ViewNums: 2963
---

以前发过一篇[在VPS中命令行安装Dropbox实现网站的实时备份](/blog/vps-dropbox-backup)，今天转一个[月光](http://www.williamlong.info/)写的[虚拟主机如何安装Dropbox备份网站教程](/blog/xunizhuji-anzhuang-dropbox)：

虽然目前从国内访问[Dropbox](/blog/dropbox)有小小困难，但是从国外访问还是正常的，对于拥有国外[Linux](/tags/Linux)虚拟主机的用户，可能会遇到这样的需求，就是如何将国外虚拟主机上的网站备份到Dropbox上，下面我以Dreamhost为例介绍一下备份的方法。

你需要有一个国外的虚拟主机，虚拟主机需要有SSH权限，并能访问外网，符合这样条件的虚拟主机有一些，例如Dreamhost这类主机。

使用SSH帐号登录到你的主机地址，之后执行下面的命令：

wget -O dropbox.tar.gz http://www.dropbox.com/download/?plat=lnx.x86

下载完成文件后，接着，你可以执行下面的命令将其解压缩：

tar -zxof dropbox.tar.gz

接着执行下面的命令将Dropbox程序转移到～目录。

mv .dropbox-dist ~

现在，执行下面的程序即可后台运行Dropbox

~/.dropbox-dist/dropboxd &

第一次执行这个程序的时候，dropboxd会显示一串很长的URL地址，你需要手动在浏览器中执行这个地址，才能将虚拟主机服务器连接到Dropbox，执行完后，Dropbox的Events中会显示“The computer xxx was linked to your account”，表明该服务器已经连接好。

这时候，你的根目录下会出现一个Dropbox目录，并会自动下载，你可以使用下面命令进入你的Dropbox目录

cd ~/Dropbox

接着，将你的网站目录通过cp -r命令复制到~/Dropbox目录下，就能实现网站的同步备份了。

如果你想停止运行Dropbox，可以通过下面的命令实现：

killall dropbox

对于Dreamhost用户来说，其实你一退出SSH，dropbox就会自动退出，你要想让dropbox一直运行，估计要购买价格更高的VPS才行，或者就是用一个程序自动挂着SSH也行。

最后赞一下Dropbox的速度，在国外的主机上执行Dropbox真快的吓人，几个G的文件，不到半个小时就全部下载更新完毕，这和国内完全不是一个速度啊，我昨天在国内同步几个G的文件，至少要花整整两天的时间。

